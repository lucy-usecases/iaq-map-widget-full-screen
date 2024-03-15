import * as React from 'react'
import { DatePicker, DateTimePicker, DropDownButton, IconButton, IMarker, Loading, MapComponent, Select, ToggleFilter, useUpdateWidgetProps, WidgetWrapper } from 'uxp/components'
import { darkenColor, debounce, lightenColor, round } from './utils';
import { IContextProvider, registerWidget } from './uxp'
import classNames from 'classnames';
import './styles.scss'

interface IIAQOccupancyMapProps {
    uxpContext: IContextProvider,
    instanceId: string
    zoom?: number,
    timerInterval?: number,
    centerLatitude: number,
    centerLongitude: number,
}

const LucyPackage = "IAQAnalytics"

const IAQOccupancyMapFullScreened: React.FunctionComponent<IIAQOccupancyMapProps> = (props) => {
    let [loading, setLoading] = React.useState(true);
    let [floors, setFloors] = React.useState([]);
    let [floor, setFloor] = React.useState(null);
    let [spaces, setSpaces] = React.useState([]);
    let [allSpaces, setAllSpaces] = React.useState([]);
    let [occupancy, setOccupancy] = React.useState<any>({});
    let [iaq, setIAQ] = React.useState<any[]>([]);
    let [ranges, setRanges] = React.useState<any>({});
    let [filterTime, setFilterTime] = React.useState<Date>(new Date());
    let [bucket, setBucket] = React.useState('current');
    let [metric, setMetric] = React.useState('temp');
    let [groups, setGroups] = React.useState<any[]>([])
    const [isFullScreen, setIsFullScreen] = React.useState(false);

    let [configs, setConfigs] = React.useState<{ zoom: number, center: { lat: number, lng: number } } | null>(null)

    let updateDefaultProps = useUpdateWidgetProps()
    let getOccupancy = debounce(getLatestOccupancy, 500)
    let refreshOccupancy = debounce(getLatestOccupancy, (60 * 1000))
    let getIAQ = debounce(getLatestIAQ, 500)
    let refreshIAQ = debounce(getLatestIAQ, (60 * 1000))

    let metrics = [
        { label: 'Temperature', value: "temp" },
        { label: 'CO2', value: "co2" },
        { label: 'Humidity', value: "rh" }
    ]

    let colors = {
        temp: '#03a9f4',
        co2: '#9c27b0',
        rh: '#00ae92',
    } as any

    React.useEffect(() => {
        setLoading(true)
        getFloors()
        getAllSpaces()
        getRanges()
        getSensorGroups()
    }, []);

    // get spaces
    React.useEffect(() => {
        if (floor) {
            getSpacesByFloor()
        }
    }, [floor]);

    React.useEffect(() => {
        if (floor) {
            setLoading(true)
            getOccupancy()
        }

    }, [filterTime, bucket, floor]);

    React.useEffect(() => {
        getIAQ()
    }, [filterTime, bucket, floor, metric])

    React.useEffect(() => {
        console.log("groups ", groups)
    }, [groups])

    let currentMetric = metrics.find(met => metric == met.value);
    const timerTick = React.useRef(0);

    React.useEffect(() => {
        const intervalId = setInterval(() => {
            timerTick.current += 1
            let nextMetric = metrics[timerTick.current % metrics.length]

            setMetric(nextMetric?.value)
        }, (props.timerInterval || 4000));

        return () => clearInterval(intervalId);
    }, []);

    function getFloors() {
        props.uxpContext.executeAction(LucyPackage, 'GetFloors', {}, { json: true })
            .then(data => {
                let floors = data.floors || []
                setFloors(floors);
                if (!floor && floors.length) {
                    setFloor(floors[0].id);
                    setLoading(false)
                }
            })
            .catch(e => {
                setLoading(false)
            });
    }

    async function getSpacesByFloor() {
        props.uxpContext.executeAction(LucyPackage, 'GetSpacesByFloor', { 'floor': floor }, { json: true })
            .then(res => {
                let _spaces = res.spaces
                // setSpaces(_spaces.filter((a: any) => a.capacity))
                setSpaces(_spaces)
            })
            .catch(e => { console.log("Exception : ", e) })
    }

    async function getAllSpaces() {
        props.uxpContext.executeAction(LucyPackage, 'GetAllSpaces', {}, { json: true })
            .then(res => {
                let _spaces = res.spaces
                setAllSpaces(_spaces)
            })
            .catch(e => { console.log("Exception : ", e) })
    }

    async function getSensorGroups() {
        props.uxpContext.executeAction("OccupancySensorGrouping", "GetSensorGrouping", {}, { json: true })
            .then(res => {
                console.log(res)
                setGroups(res.groups || [])
            })
            .catch(e => { console.error(e) })
    }

    async function getRanges() {
        props.uxpContext.executeAction(LucyPackage, 'GetDefaults', {}, { json: true })
            .then(res => setRanges(res))
            .catch(e => { console.error("Exception : ", e) })
    }

    // get latest readings
    // occupancy
    async function getLatestOccupancy() {
        setLoading(true)
        let action = 'GetCurrentOccupancyForFloor';
        let args: any = { floor };
        if (bucket != 'current' && filterTime) {
            action = 'GetHistoricalOccupancyForFloor';
            args['bucket'] = bucket;
            let d = new Date(filterTime);
            d.setMinutes(0);
            d.setSeconds(0);
            d.setMilliseconds(0);
            if (bucket == 'day' || bucket == 'week' || bucket == 'month') {
                d.setHours(0);
            }
            let end = new Date(d);
            if (bucket == 'hour') {
                end.setHours(end.getHours() + 1);
            }
            if (bucket == 'day') {
                end.setDate(end.getDate() + 1);
            }
            if (bucket == 'week') {
                end.setDate(end.getDate() + 7);
            }
            if (bucket == 'month') {
                end.setDate(1);
                end.setMonth(end.getMonth() + 1);
            }

            args['start'] = d.toISOString();
            args['end'] = end.toISOString();
        }
        props.uxpContext.executeAction(LucyPackage, action, args, { json: true })
            .then(res => {
                let latestOccupancy: any = {};
                for (var i in res.occupancy) {
                    let d = res.occupancy[i];
                    latestOccupancy[d.id] = Number(d.value);
                }
                setOccupancy(latestOccupancy);
                setLoading(false)
                refreshOccupancy()
            })
            .catch(e => {
                console.log("Exception: ", e)
                setLoading(false)
                refreshOccupancy()
            })

    }

    // IAQ 
    async function getLatestIAQ() {
        setLoading(true)
        let action = "GetLatestValues"
        let args: any = { floor };
        if (bucket != 'current' && filterTime) {
            action = 'HistoricalIAQReadingsForAllRooms';
            args['bucket'] = bucket;
            let d = new Date(filterTime);
            d.setMinutes(0);
            d.setSeconds(0);
            d.setMilliseconds(0);
            if (bucket == 'day' || bucket == 'week' || bucket == 'month') {
                d.setHours(0);
            }
            let end = new Date(d);
            if (bucket == 'hour') {
                end.setHours(end.getHours() + 1);
            }
            if (bucket == 'day') {
                end.setDate(end.getDate() + 1);
            }
            if (bucket == 'week') {
                end.setDate(end.getDate() + 7);
            }
            if (bucket == 'month') {
                end.setDate(1);
                end.setMonth(end.getMonth() + 1);
            }

            args['start'] = d.toISOString();
            args['end'] = end.toISOString();
            args['sensor'] = metric;
        }
        props.uxpContext.executeAction(LucyPackage, action, args, { json: true })
            .then(res => {
                setIAQ(res);
                setLoading(false)
                refreshIAQ()
            })
            .catch(e => {
                console.log("Exception: ", e)
                setLoading(false)
                refreshIAQ()
            })
    }

    var regionCenter = function (arr: number[][]) {
        var minX: number, maxX: number, minY: number, maxY: number;
        for (var i = 0; i < arr.length; i++) {
            minX = (arr[i][0] < minX || minX == null) ? arr[i][0] : minX;
            maxX = (arr[i][0] > maxX || maxX == null) ? arr[i][0] : maxX;
            minY = (arr[i][1] < minY || minY == null) ? arr[i][1] : minY;
            maxY = (arr[i][1] > maxY || maxY == null) ? arr[i][1] : maxY;
        }
        return [(minX + maxX) / 2, (minY + maxY) / 2];
    }

    function getLabel() {
        let label = ''
        if (metric == 'temp') label = "°C"
        else if (metric == 'co2') label = "ppm"

        return label
    }

    let markers: IMarker[] = [];
    let occMarkers: IMarker[] = [];
    let iaqMarkers: IMarker[] = [];

    let floorData = floors.find(f => f.id == floor);
    let regionData: any[] = [];
    let occBg = '#F7CAAC'
    let occBC = "#C55A11"

    let iaqMax = "#FF0000"
    let iaqMin = "#8DA9DB"
    let iaqBetween = "#A8D08C"

    let totalOccupancy = 0
    // console.log("spaces count ", spaces.length, Object.keys(occupancy).length)
    let grouping: any = {}
    for (let i = 0; i < spaces.length; i++) {
        // get space 
        let space = spaces[i];
        // console.log('_____________space ', space.name);
        // if(space.name == "Reception" || space.name == "Meeting_Room_2") {


        //get group 
        let group = groups.find((g: any) => (g.space == space.name))

        if (group) {
            // get markers 
            let markers = grouping[group.officeName]
            if (!markers) {
                let centrePoint = regionCenter(space.coordinates.map((c: any) => [c.x, c.y]));

                grouping[group.officeName] = {
                    coords: [],
                    center: centrePoint,
                    name: group.officeName,
                    occupancy: 0
                }

            }

            // update count and total 
            grouping[group.officeName].coords = grouping[group.officeName].coords.concat(space.coordinates)
            grouping[group.officeName].occupancy = grouping[group.officeName].occupancy + (Number(occupancy[space.id]) || 0)
            totalOccupancy += (Number(occupancy[space.id]) || 0)

        }
    }

    console.log("grouping", grouping)
    Object.keys(grouping).map(s => {

        let group = grouping[s]
        let centrePoint = regionCenter(group.coords.map((c: any) => [c.x, c.y]));

        let _occBC = occBC
        let _occBg = occBg
        let _opacity = 1
        if (group.occupancy == 0) {
            _occBC = '#424242'
            _occBg = '#ccc'
            _opacity = 0.5
        }
        occMarkers.push({
            longitude: centrePoint[0],
            latitude: centrePoint[1],
            imageCoordinates: true,
            customHTMLIcon: { className: 'occ-space-icon', html: '<div style="border: 2px solid ' + _occBC + '; background-color: ' + _occBg + '; color: ' + _occBC + '; opacity: ' + _opacity + '">' + group.occupancy + '</div>' },
            renderTooltip: {
                content: () => <div>{group.name} </div>
            }
        });

    })

    for (let i = 0; i < allSpaces.length; i++) {
        let space = allSpaces[i];
        let coords = [[0, 0]]
        if (space.coordinates) {
            coords = space.coordinates?.map((c: any) => [c.x, c.y])
        }
        let centrePoint = regionCenter(coords);

        let readings = iaq.find(i => i?.space == space.name)

        if (readings && centrePoint) {

            let val = Number(readings[metric]) || 0
            let bc = getColor(val)
            iaqMarkers.push({
                longitude: centrePoint[0],
                latitude: centrePoint[1],
                imageCoordinates: true,
                customHTMLIcon: { className: 'iaq-space-icon', html: '<div style="background-color: ' + bc + '">' + (round(val, 1)) + '</div>' },
                renderTooltip: {
                    content: () => <div>{space.name} ({round(val, 1)} {getLabel()}) </div>
                }
            })
        }
    }

    markers = [...occMarkers, ...iaqMarkers]

    // get color 
    function getColor(val: number) {
        // get range 
        let _metric = metric
        if (_metric == 'rh') _metric = 'humidity'
        let min = ranges[_metric + 'min']
        let max = ranges[_metric + 'max']

        let color = (colors as any)[metric]

        if (val <= min) return lightenColor(color, 60);
        if (val >= max) return darkenColor(color, 60);
        return color

    }

    function getValue(type: string) {
        let label = "°C"
        let _metric = metric
        if (_metric != "temp") label = ""
        if (_metric == 'rh') _metric = 'humidity'
        if (type == "max") return (ranges[_metric + 'max'] || 0) + " " + label
        if (type == "min") return (ranges[_metric + 'min'] || 0) + " " + label
        return (ranges[_metric + 'min'] || 0) + " " + label + " - " + (ranges[_metric + 'max'] || 0) + " " + label
    }


    function onZoomEnd(e: any) {
        setConfigs({ zoom: e.target._zoom, center: e.target.getCenter() })
    }

    function onDragEnd(e: any) {
        setConfigs({ zoom: e.target._zoom, center: e.target.getCenter() })
    }

    async function updateProps() {
        let dProps: any = {
            zoom: configs.zoom,
            centerLatitude: configs.center.lat,
            centerLongitude: configs.center.lng,
            timerInterval: props?.timerInterval
        }

        console.log("widget configurations were updated...", dProps)

        updateDefaultProps(props.instanceId, dProps)
        setConfigs(null)
    }

    let _center: any = {
        position: {
            latitude: floorData?.layout.width * 0.5,
            longitude: floorData?.layout.height * 0.5
        },
        renderMarker: false
    }

    if (props.centerLatitude && props.centerLongitude) {
        _center.position = {
            latitude: props.centerLatitude,
            longitude: props.centerLongitude
        }
    }

    const containerRef = React.useRef(null);

    function getFullScreenElement() {
        return document.fullscreenElement
            || (document as any).mozFullScreenElement
            || (document as any).webkitFullscreenElement
            || (document as any).msFullscreenElement
    }

    React.useLayoutEffect(() => {
        document.onfullscreenchange = () =>
            setIsFullScreen(getFullScreenElement() != null);

        return () => { document.onfullscreenchange = undefined };
    }, []);

    const toggleFullScreen = () => {
        const element = containerRef.current;

        if (element) {
            if (!isFullScreen) {
                let rfs = element.requestFullscreen || element.webkitRequestFullscreen() || element.msRequestFullscreen()
                rfs.call(element);
            } else {
                document.exitFullscreen();
            }
            setIsFullScreen(!isFullScreen);
        }
    };

    return (
        <WidgetWrapper className="iaq-occupancy-map-widget-container-wrapper">
            <div className="iaq-occupancy-map-widget-container full-screenable" ref={containerRef}>
                {
                    (floorData && floorData.layout.floorPlan) ?
                        <MapComponent
                            zoom={Number(props.zoom ? props.zoom : 4)}
                            minZoom={2}
                            zoomOnScroll={false}
                            center={_center}
                            regions={regionData}

                            staticImage={{
                                url: floorData.layout.floorPlan || "",
                                width: floorData.layout.width,
                                height: floorData.layout.height
                            }}
                            onRegionClick={(e: any, data: any) => {

                            }}
                            markers={markers} onMarkerClick={() => { }} mapUrl={''}
                            onZoomEnd={onZoomEnd}
                            onDragEnd={onDragEnd}
                        />
                        : <div className='nomap'>Select a floor to get started</div>
                }

                <div className="header">
                    <div className="title">{`${currentMetric?.label}/Occupancy`}</div>
                </div>

                <div className='toolbar'>
                    <div className={classNames('full-screen-button', { 'full-screened': isFullScreen })} onClick={toggleFullScreen}>
                        <div className="icon"></div>
                    </div>
                </div>


                <div className="legend-cont">
                    <div className="total-occupancy" style={{ backgroundColor: occBg, border: `4px solid ${occBC}`, color: occBC }} >{totalOccupancy}</div>
                    <div className="legend">
                        <div className="legend-item">
                            <div className="indicator occ" style={{ backgroundColor: occBg, borderColor: occBC }}></div>
                            <div className="label">Area Occupancy Count</div>
                        </div>

                        <div className="legend-item">
                            <div className="indicator occ-total" style={{ backgroundColor: occBg, borderColor: occBC }}></div>
                            <div className="label">Total Floor area occupancy count</div>
                        </div>
                        <div className="legend-item ">
                            <div className="indicator iaq" style={{ backgroundColor: darkenColor(colors[metric], 60) }}></div>
                            <div className="label">Greater than or equal to {getValue("max")}</div>
                        </div>
                        <div className="legend-item">
                            <div className="indicator iaq" style={{ backgroundColor: colors[metric] }}></div>
                            <div className="label">Between {getValue("between")}</div>
                        </div>
                        <div className="legend-item">
                            <div className="indicator iaq" style={{ backgroundColor: lightenColor(colors[metric], 60) }}></div>
                            <div className="label">Less than or equal to {getValue("min")}</div>
                        </div>
                    </div>
                </div>
                <div className="iaq-metric-cont">
                    {
                        configs != null && <div className="pin-btn-container">
                            <IconButton type="pin" onClick={updateProps} />
                        </div>
                    }
                </div>

                {/* {loading && <div className="overlay"><Loading /></div>} */}
            </div>
        </WidgetWrapper>
    )
}

registerWidget({
    id: "iaq-occupancy-map-full-screen",
    name: "Full-screen floor map with IAQ and Occupancy.",
    widget: IAQOccupancyMapFullScreened,
    configs: {
        layout: {
            w: 13,
            h: 23,
            minW: 5,
            minH: 9
        },
        props: [
            {
                label: "Zoom",
                name: "zoom",
                type: "number",

            },
            {
                label: "Timer Interval(ms)",
                name: "timerInterval",
                type: "number",

            },
            {
                label: "Center (Latitude)",
                name: "centerLatitude",
                type: "number",
            },
            {
                label: "Center (Longitude)",
                name: "centerLongitude",
                type: "number",
            }
        ]
    },
})

export default IAQOccupancyMapFullScreened
