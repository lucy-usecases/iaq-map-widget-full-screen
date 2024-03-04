declare module "uxp/components" {
    
    /**
     * @export
     * Options that can be passed to a portal container component
     */
    export interface IPortalContainerProps {
        /**
         * create a backdrop if true
         */
        hasBackdrop?: boolean,
    
        /**
         * callback function to click on backdrop
         */
        onClickBackdrop?: () => void,
    
        /**
         * additional styles to backdrop
         */
        backdropStyles?: any
        /**
         * disabled the scrolling of main content block if true
         * default value is true
         */
        disableScroll?: boolean
    }
        
    /**
     * @export
     */
    export interface ISelectProps {
        /**
         * List of items to select from.
         * Each option has a label which is displayed and a value which is what we actually select.
         * also you can pass any object as options, then specify the labelField, valueField props
         */
        options: IOption[] | any[],
        /**
         * Name of the field you want to display as label
         * If not given default(label) will be used
         */
        labelField?: string,
        /**
         * Name of the field you want to return  as value
         * If not given default(value) will be used
         */
        valueField?: string,
        /**
         * The  currently selected value
         */
        selected: string,
    
        /**
         * Gets called whenever the selection changes.
         * The value parameter has the newly selected value
         * option parameter has the complete option/ object that you passed
         */
        onChange: (value: string, option?: IOption | any) => void,
    
        /**
         * Text to show when no value is selected
         */
        placeholder?: string,
        /**
         * Any extra css classes to add to the component
         */
        className?: string,
    
        /**
         * Set this to false to indicate the field doesn't have a valid value
         */
        isValid?: boolean,
        // inputAttr?: any
        /**
         * show hide end of content message
         */
        showEndOfContent?: boolean
    
    }
        
    /**
     * @export
     * Options that can be passed to a date picker field
     */
    export interface IDatePickerOptions {
        /**
         * The minimum selectable date. Either a Date object an an ISO8601 date string
         */
        minDate?: string | Date,
    
        /**
         * The maximum selectable date. Either a Date object an an ISO8601 date string
         */
        maxDate?: string | Date,
    
        /**
         * If set to `true`, you cannot select a weekend date
         */
        disableWeekEnds?: boolean,
    
        /**
         * An array of specific dates that the user cannot select
         */
        disableDates?: Array<Date | String>
    }
        
    /**
     * @export
     *
     */
    export interface IDatePickerProps {
        /**
         * The title
         */
        title: string,
    
        /**
         * The currently selected date. Either a Date object or an ISO8601 string representation of a date
         */
        date: string | Date,
    
        /**
         * Callback that gets executed whenever a date is selected/changed in the date picker
         */
        onChange: (date: Date) => void,
    
        /**
         * Called when the calendar popup is closed
         */
        closeOnSelect?: boolean,
    
        /**
         * Additional options to control behavior
         */
        options?: IDatePickerOptions,
    
        /**
         * Set to true to prevent a user from typing in a date
         */
        disableInput?: boolean,
    
    }
        
    /**
     * This function is invoked to display a toast (notification popup).
     *
     * @param icon - the icon to show in the notification popup
     * @param title - the title to show in the notification popup
     * @param content - the content to show in the notification popup
     * @param showCloseBtn - set to true to show a close button on the notification popup
     * @param autoClose - if set to true, the notification popup will automatically dismiss itself after a preset duration
     * @param closeAfter - how many seconds to wait before closing - only applicable if autoClose is set to true
     * @param onClose - callback that is invoked after the toast is closed
     *
     * @export
     *
     */
    export interface IPartialContent {
        icon?: string | IToastContent,
        title?: string | IToastContent,
        content: string | IToastContent,
        showCloseBtn?: boolean,
        autoClose?: boolean,
        onClose?: () => void,
        closeAfter?: number,
    }
        
    /**
     * The result of calling the useToast hook. This gives you methods to invoke notifications for success, errors, etc...
     * All notifications work the same way but have different styles.
     * @export
     */
    export interface IToastResult {
        success: IToast,
        error: IToast,
        warning: IToast,
        info: IToast,
        custom: IToast,
        remove: IRemove
    }
        
    /**
     * @export
     */
    export interface ITooltipProps {
        /**
         * The content to show inside the tooltip
         * This can be either a string or a JSX element
         * @example
         *
         * ```
         * <Tooltip content="This is a tooltip" />
         * ```
         *
         * @example
         *
         * ```
         * <Tooltip content={() => <div>This is a tooltip</div>} />
         * ```
         */
        content: string | IContentFunction,
    
        /**
         * Where the tooltip should be placed relative to the element it is being displayed for
         * <Tooltip position="left" content="There are many like it but this one's mine" />
         */
        position?: ITooltipPosition
    
        /**
         * the content to show within the bubble
         *  This can be either a string or a JSX element
         *
         * * @example
         *
         * ```
         *  <Tooltip
         *      content="This is a tooltip"
         *  >
         *      <button className="btn showcase" >Hover to Show Tooltip</button>
         *  </Tooltip>
         * ```
         *
         * * @example
         *
         * ```
         *  <Tooltip
         *      content={() => <div>This is a tooltip</div>}
         *      position="left"
         *  >
         *      <button className="btn showcase" >Hover to Show Tooltip</button>
         *  </Tooltip>
         * ```
         *
         */
    }
        
    /**
     * @export
     */
    export interface IPopoverProps {
        /**
         * title of the popup bubble
         *  This can be either a string or a JSX element
         * @example
         *
         * ```
         * title="Popover Title"
         * ```
         *
         * * @example
         *
         * ```
         * title={() => <div>Popover Title</div>
         * ```
         */
        title: string | IContentFunction,
    
        /**
         * the content to show within the bubble
         *  This can be either a string or a JSX element
         *
         * * @example
         *
         * ```
         * content="Popover Content"
         * ```
         *
         * * @example
         *
         * ```
         * content={() => <div>Popover content</div>
         * ```
         *
         */
        content: string | IContentFunction,
    
        /**
         * Where the bubble should be positioned relative to the element
         */
        position?: IPopoverPosition
    
        /**
         * the content to show within the bubble
         *  This can be either a string or a JSX element
         *
         * * @example
         *
         * ```
         *  <Popover
         *      title="Popover"
         *      content="This is a popover"
         *  >
         *      <button className="btn showcase" >Click to Show popover</button>
         *  </Popover>
         *
         * ```
         *
         * * @example
         *
         * ```
         *  <Popover
         *      title={() => <div>Popover</div>}
         *      content={() => <div>This is a popover</div>}
         *      position="left"
         *  >
         *      <button className="btn showcase" >Click to Show popover</button>
         *  </Popover>
         * ```
         *
         */
    }
        
    /**
     * @export
     */
    export interface IModalWizardProps {
    
        /**
         * Set this to true to show the dialog. False to hide it
         */
        show: boolean;
    
        /**
         * Call this to close the dialog
         */
        onClose:()=>void;
    
        /**
         * The title to show on the top
         */
        title: string;
    
        /**
         * An optional icon to show
         */
        icon?: string;
    
        /**
         * A method to render a subheader just below the title area.
         */
        onRenderHeader?:(currentStep:IModalWizardStepProps)=> JSX.Element;
    
        /**
         * The list of steps that this wizard consists of.
         */
        steps: IModalWizardStep[];
    
        /**
         * This action executes after they hit 'next' on the final page.
         */
        onComplete:()=>Promise<any>;
    
        /**
         * Text to show on the 'next' button in the final stage.
         */
        completionText?: string;
        className?:string;
    }
        
    /**
     * @export
     *
     * Props passed to the wizard step's render function
     */
    export interface IModalWizardStepProps {
        /**
         * Triggers the wizard to move to the next stage
         */
        next:()=>void;
    
        /**
         * Triggers the wizard to move the previous stage
         */
        prev:()=>void;
    
        /**
         * Information about the current stage
         */
        currentStep:IModalWizardStep;
        data?:any;
    }
        
    /**
     * @export
     * An individual step in a modal wizard
     */
    export interface IModalWizardStep {
        /**
         * This function returns the contents of the main area of the wizard
         */
        render:(props:IModalWizardStepProps) => JSX.Element;
    
        /**
         * This function renders the status section on the left sidebar. This will be rendered only if the `showStatus` property is not false.
         * You can return null from this function to prevent the side bar status from being rendered.
         */
        renderStatus:() => JSX.Element;
    
        /**
         * This is called just before the user tries to advance to the next stage. You can use this to validate the current stage.
         * You can return
         * a string - to indicate the id of the next step that should be taken.
         * a number - to indicate the index of the next step to be taken
         * undefined or null - to indicate it should stay on the current step
         */
        onValidateStep?:() =>string|number|undefined|null|boolean;
    
        /**
         * An optional id for this step. This is used by the onValidateStep function to address a specific step to jump to
         */
        id?:string;
    
        /**
         * The title of this step. Currently this is used only in the sidebar to show the status of that stage.
         */
        title?: string;
    
        /**
         * Set this to false to prevent the 'next' button from being shown. If this is false you will have to manually render the 'next' button yourself
         */
        showNext?: boolean;
    
    
        nextTitle?:string;
    
        /**
         * Set to false to prevent the status sidebar from being shown at this stage
         */
        showStatus?:boolean;
    
        /**
         * Render a sub-header below the main dialog header
         *
         */
        renderSubHeader?:()=>JSX.Element;
    }
        
    /**
     * @export
     */
    export interface ICalendarComponentProps {
        /**
         * array of dates
         */
        dates: Date[]
        /**
         * callback to trigger on click date
         * ill return the clicked date
         */
        onSelectDate: (date: Date) => void
        /**
         * disable weekends
         */
        disableWeekEnds?: boolean,
        /**
         * list of dates to disable
         */
        disableDates?: Array<Date>
        /**
         * min date
         */
        minDate?: Date,
        /**
         * max date
         */
        maxDate?: Date,
        /**
         * class name to use custom styles
         */
        className?: string
    }
        
    /**
     * @export
     * Options that can be passed to a date picker field
     */
    export interface IDataTableColumn {
        title: string | ITitleFunc,
        width: string,
        renderColumn: (item: any) => JSX.Element
    }
        
    /**
     * @export
     * An individual pie chart slice
     */
    export interface IDataItem { name: string, value: number, color?: string }
        
    /**
     * @export
     *
     */
    export interface IToggleOption {
        /**
         * The text shown to the user for this option
         */
        label: string,
    
        /**
         * The actual value stored when this option is selected
         */
        value: string
    }
        
    /**
     * @export
     */
    export interface IWidgetWrapperProps {
        /**
         * Any extra css class names to add to the widget wrapper
         */
        className?: string
    }
        
    /**
     * @export
     *
     * Custom html marker
     * refer https://docs.eegeo.com/eegeo.js/v0.1.780/docs/leaflet/L.DivIcon/
     *
     * @example
     *  {
     *       className: 'custom-marker',
     *       html: '<div>Marker Content</div>
     *  }
     */
    export interface IDivIconInterface {
        /**
         * A custom class name to assign to the icon.
         */
        className: string,
        /**
         * A custom HTML code to put inside the div element.
         */
        html: string,
        /**
         * Size of the icon in pixels. Can be also set through CSS.
         */
        iconSize?: [number, number],
        /**
         * The coordinates of the "tip" of the icon (relative to its top left corner).
         * The icon will be aligned so that this point is at the marker's geographical location.
         * Centered by default if size is specified, also can be set in CSS with negative margins.
         */
        iconAnchor?: [number, number]
        /**
         * The coordinates of the point from which popups will "open", relative to the icon anchor.
         */
        popupAnchor?: [number, number]
    }
        
    /**
     * @export
     * Render tooltip for marker
     */
    export interface IRenderMarkerTooltip {
        /**
         * content to show in tooltip
         */
        content: () => JSX.Element,
        /**
         * direction
         * default is auto
         */
        direction?: 'top' | 'bottom' | 'left' | 'right' | 'center' | 'auto',
        /**
         * keep showing the tooltip
         * default is false
         */
        keepShowing?: boolean
    }
        
    /**
     * @export
     * Render a popup for marker
     */
    export interface IRenderMarkerPopup {
        /**
         * content to show in popup
         */
        content: () => JSX.Element,
        /**
         * open the popup on load
         */
        showOnLoad?: boolean
    }
        
    /**
     * Represents an individual marker
     * @example
     *  {
     *      latitude:0,
     *      longitude:23.2,
     *      data:{'name':'FooBar'}
     *  }
     *
     * @export
     */
    export interface IMarker {
        /**
         * latitude
         */
        latitude: number,
        /**
         * longitude
         */
        longitude: number,
        /**
         * any data to return when click on the marker
         */
        data?: any,
        /**
         * custom HTML marker
         */
        customHTMLIcon?: IDivIconInterface,
        /**
         * content to display in pop-up
         */
        renderPopup?: IRenderMarkerPopup,
        /**
         * content to display in tooltip
         */
        renderTooltip?: IRenderMarkerTooltip,
    
        /**
         * use image coordinates to calculate bounds
         */
        imageCoordinates?: boolean,
    }
        
    /**
     * @export
     */
    export interface ICircleBound {
        /**
         * center of the circle
         */
        center: [number, number],
        /**
         * radius of the circle
         */
        radius: number
    }
        
    /**
     * @export
     */
    export interface IHeatmapPoint {
    
        /**
         * The latitude of the point
         */
        latitude: number;
    
        /**
         * The longitude of the point
         */
        longitude: number;
    
        /**
         * The intensity of the point
         */
        intensity: number;
    }
        
    /**
     * @export
     */
    export interface IHeatmapConfiguration {
        /**
         * The values to show on the heatmap. Each value has a coordinate and an intensity.
         * Intensities are relative the heatmap colors will be scaled based on the min/max intensities in the array
         *
         * @example
         * ```
         * heatmap={{values:[{latitude:2.3,longitude:-38.6,intensity:20},{latitude:2.4,longitude:-38.6,intensity:20},]}}
         * ```
         */
        values:IHeatmapPoint[];
    
        /**
         * Optionally - a gradient specified as an object of floating point values as keys from 0-1 and colors as the values
         *
         * @example
         * ```
         * heatmap={{values,gradient:{0.0:'blue',0.4:'yellow',0.7:'orange',0.9:'red'}}}
         * ```
         */
        gradient?:{[stop:number]:string};
    
    
        radius?:number;
    
        blue?:number;
    
        /**
         * The maximum possible intensity value.
         * If not specified, the intensities will be scaled based on the range of values provided.
         * Specify a max to set what the maximum possible value can be and the range will be scaled according to that max value
         */
        max?:number;
    
    
        /**
         * Set to true if the coordinates of the heatmap points are in the image coordinates system.
         */
        imageCoordinates?:boolean;
    }
        
    /**
     * @export
     * Region data for maps
     */
    export interface IRegion {
        /**
         * region type,
         * default is polygon
         */
        type?: regionType,
        /**
         * region bounds
         */
        bounds: IPolygonBound | ICircleBound,
        /**
         * show/hide outline of the region
         */
        hideStroke?: boolean,
        /**
         * outline color
         */
        color?: string,
        /**
         * fill color
         */
        fillColor?: string,
        /**
         * any data to return on click a region
         */
        data?: any,
        /**
         * use image coordinates to calculate bounds
         */
        imageCoordinates?: boolean,
        /**
         * A tooltip to be shown when you click on the region
         */
        tooltipContent?: (data: any) => JSX.Element;
    }
        
    /**
     * @export
     * A static image to load as the map.
     */
    export interface IStaticImage {
        /**
         * The url of the image
         */
        url: string;
        /**
         * The width of the image in pixels
         */
        width: number;
    
        /**
         * The height of the image in pixels
         */
        height: number;
        /**
         * static image bounds
         * if not provided these will be calculated based on image width and height (NOTE: this may not be accurate)
         *
         */
        bounds?: [[number, number], [number, number]]
    }
        
    /**
     * @export
     * These props are passed to the render method of each wizard step.
     *
     */
    export interface IWizardStepProps {
        /**
         * Triggers a request to go to the next step in the wizard. You can use this functional to programatically move to the next step (the user can also click the 'Next' action to do the same thing)
         */
        next: (id?: string) => void;
    
        /**
         * Similar to `next`, you can call this function to programatically go to the previous step in the wizard.
         */
        prev: () => void;
    }
        
    /**
     * Defines an individual step within a wizard.
     * Each step provides a render method to render the actual step.
     * You also need to specify a unique 'id' and title for the step.
     * You can optionally specify an `onNext` callback  to run whenever the user wants to go to the next step.
     * This can return either `null` - meaning we should not proceed to the next step, or the id of the next step to go to.
     * @export
     */
    export interface IWizardStep {
        onNext?: () => string | null;
        id: string;
        title: string;
        render: (props: IWizardStepProps) => React.ReactNode;
    }
        
    /**
     * @export
     * Dropdown button props
     */
    export interface IDropDownButtonProps {
        /**
         * The content to show inside the Dropdown
         * @example
         *
         * ```
         * content={() => <div>Dropdown Content</div>}
         * ```
         */
        content: () => JSX.Element,
    
        /**
         * Where the dropdown should be placed relative to the element it is being displayed for
         * default is right
         */
        position?: IDropDownButtonPosition,
        /**
         * If this is true dropdown will show on mouse over & hide n mouse out
         * If this is false dropdown ill show on click
         */
        showOnHover?: boolean
    
        className?: string
    
        /**
         * Dropdown button basic example
         *
         * @example
         *
         * ```
         *  <DropDownButton
         *      content={() => <div>This is dropdown content</div>}
         *  >
         *      <button className="btn showcase" >Click to Show the dropdown</button>
         *  </DropDownButton>
         * ```
         *
         * Dropdown button example with options
         * @example
         *
         * ```
         *  <DropDownButton
         *      content={() => <div>This is dropdown content</div>}
         *      position="left"
         *      showOnHover
         *  >
         *      <button className="btn showcase" >Click to Show the dropdown</button>
         *  </DropDownButton>
         * ```
         */
    
    
    }
        
    /**
     * @export
     * Options that can be passed to a date picker field
     */
    export interface IGaugeProps {
        /**
         * min value of the gauge
         */
        min: number;
        /**
         * max value of the gauge
         */
        max: number;
        /**
         * value of the gauge
         */
        value: number;
    
        /**
         * colors array.
         * color: name of the color.
         * stopAt: length of color distribution.
         *
         * default is blue, green, yellow, red colors at equal length
         */
        colors?: Array<{ color: string, stopAt: number }>;
        /**
         * label
         * no default value
         */
        label?: () => JSX.Element,
        /**
         * if true show legend.
         * default is false
         */
        legend?: boolean,
        /**
         * color of the ticks.
         * default is white
         */
        tickColor?: string,
        /**
         * class name(s) for additional styling
         */
        className?: string,
        /**
         * additional inline styles
         */
        styles?: React.CSSProperties
    
        /**
         * if true show gradient colors
         * default is false
         */
        gradient?: boolean,
        /**
         * thickness of the gauge
         * This value is defend on the radius
         * default is radius * 0.11
         * max value is radius * 0.25
         *
         * if you pass a higher value than the max value, max value will be used
         */
        thickness?: number,
        /**
         * thickness of the large ticks
         * default is 4
         * min value is 1
         * max value is 6
         *
         * if the given value is higher than the max value, max values will be used
         */
        largeTick?: number,
        /**
         * thickness of the small ticks
         * default is 1
         * min values is 1
         * max values is 3
         *
         * if the given values is higher than the max value, max values will be used
         */
        smallTick?: number
    }
        
    /**
     * @export
     *
     */
    export interface IColorPickerProps {
        /**
         *  default color
        */
        color: string,
        /**
         * callback on select a color
         */
        onChange: (color: string) => void,
        /**
         * picker position.  default is left
         */
        position?: IColorPickerPosition,
        /**
         * class name for additional styles
         */
        className?: string,
        /**
         * close the picker on select a color
         * default is true
         */
        closeOnSelect?: boolean,
        /**
         * change display format
         */
        displayFormat?: IColorTypes
        /**
         * change return format
         */
        returnFormat?: IColorTypes
    }
        
    /**
     * @export
     */
    export type IDataFunction = (max: number, lastPageToken: string, args?: any) => Promise<{ items: Array<any>, pageToken: string }>;
        
    /**
     * @export
     */
    export type IToastContent = () => JSX.Element
        
    /**
     * @export
     */
    export type IToast = (content: string | IPartialContent) => void;
        
    /**
     * The react hook for creating toasts
     * @export
     */
    export type ToastHook = () => IToastResult;
        
    /**
     * @export
     */
    export type IRemove = (id: string) => void;
        
    /**
     * @export
     */
    export type IContentFunction = () => JSX.Element;
        
    /**
     * A simple callback function
     * @export
     */
    export type ICallback = ()=>void;
        
    /**
     * @export
     * Options that can be passed to a date picker field
     */
    export type ITitleFunc = () => JSX.Element
        
    /**
     * @export
     *
     * max: page size
     * last : last page token
     * args: any args to filter items
     * args has a default option 'query'. when you type in the search box, search text ill be set to this 'query'
     */
    export type IDynamicSelectDataFunction = (max: number, lastPageToken: string, args?: any) => Promise<{ items: Array<any>, pageToken: string }>
        
    /**
     * The react hook for resize effect
     * @export
     */
    export type ResizeEffectHook = (instanceId: string) => boolean
        
    /**
     * @export
     * React Hook for using the Message Bus
     *
     */
    export type MessageBusHook = (context:IContextProvider,channel:string,callback:(payload:string,channel:string)=>string) => void;
        
    /**
     * @export
     */
    export type FieldsHook = (fields:any) =>[any,{[field:string]:(s:any)=>void},any,(s:any)=>void] ;
        
    /**
     * @export
     */
    export type IUseUpdateWidgetProps = () => (id: string, props: any) => void
        
    /**
     *
     * @export
     */
    export type IUseEffectWithPolling = (
        /**
         * UXP Context. You can get this from props (props.uxContext)
         */
        context: any,
        /**
         * message bus channel name
         */
        channel: string,
        /**
         * time interval in milliseconds
         */
        interval: number,
        /**
         * callback function to call when triggered
         */
        callback: () => Promise<void>,
        /**
         * list of dependencies
         */
        deps: any[]
    ) => void
        
    /**
     * Um - animations. We need to work on this.
     * @export
     */
    export type IAnimation = 'm-slide-ftr' | 'm-slide-ftl' | 'm-slide-fbr' | 'm-slide-fbl' | 'm-zoom-fc';
        
    /**
     * @export
     */
    export type IButtonType = "search" | "close" | "done" | "arrow-up" | "arrow-down" | "arrow-left" | "arrow-right" | "filter" | "edit"| "delete" | "pin" ;
        
    /**
     * @export
     */
    export type IButtonSize = "large" | "small";
        
    /**
     * Determines the behaviour of the input field
     * @export
     */
    export type IInputType = "text"| "password"| "number"|  "email";
        
    /**
     * @export
     * Determines how a checkbox field looks
     */
    export type ICheckboxType = "default" | "bordered" | "change-icon" | "switch-line" | "switch-box";
        
    /**
     * @export
     */
    export type IPosition = "left" | "right";
        
    /**
     * @export
     */
    export type ISize = "small" | "large";
        
    /**
     * @export
     */
    export type ITooltipPosition = "top" | "bottom" | "left" | "right";
        
    /**
     * @export
     *
     */
    export type IPopoverPosition = "top" | "bottom" | "left" | "right";
        
    /**
     * @export
     */
    export type regionType = "circle" | "rectangle" | "polygon"
        
    /**
     * @export
     */
    export type IPolygonBound = LatLngExpression[] | LatLngExpression[][];
        
    /**
     * @export
     * dropdown position
     */
    export type IDropDownButtonPosition = "right" | "left" | "top left" | "top right" | "top center" | "bottom left" | "bottom right" | "bottom center" | "left center" | "right center";
        
    /**
     * @export
     */
    export type IColorPickerPosition = 'left' | 'right'
        
    /**
     * @export
     */
    export type IColorTypes = "rgb" | "prgb" | "hex6" | "hex3" | "hex8" | "hsl" | "hsv"
        /**
     * @export
     * Options that can be passed to a portal container component
     */
    interface IPortalContainerProps {
        /**
         * create a backdrop if true
         */
        hasBackdrop?: boolean,
    
        /**
         * callback function to click on backdrop
         */
        onClickBackdrop?: () => void,
    
        /**
         * additional styles to backdrop
         */
        backdropStyles?: any
        /**
         * disabled the scrolling of main content block if true
         * default value is true
         */
        disableScroll?: boolean
    }
    /**
     *
     * @export
     *
     * This component is used to create a react portal.
     *
     *
     * @example
     * ```
     *  <PortalContainer >
     *      {your content}
     *  </PortalContainer>
     * ```
     *
     * @example
     *  <PortalContainer
     *      hasBackdrop
     *      onClickBackdrop={() => {setShow(false)}}
     *      backdropStyles={{backgroundColor: "white"}}
     *  >
     *      {your content}
     *  </PortalContainer>
     */
    export const PortalContainer : React.FunctionComponent<IPortalContainerProps>;
        
    interface IModalProps {
        /**
         * Set this to true to make the modal visible
         */
        show: boolean,
        /**
         * Called whenever the modal is opened
         */
        onOpen?: () => void,
    
        /**
         * Called when the modal gets closed
         */
        onClose?: () => void,
    
        /**
         * The title set in the title bar of the modal
         * If the `headerContent` attribute is set, then this value will not be used.
         */
        title?: string,
    
        /**
         * any custom component to use to render the dialog close button.
         * If a value is not provided and `showCloseButton` is set to true, the default close button UI will be rendered
         */
        closeButton?: JSX.Element,
    
        /**
         * Any extra css styles to apply
         */
        styles?: any,
    
        /**
         * Any extra css classes to apply
         */
        className?: string,
    
        /**
         * Any custom content to include in the modal header.
         * If this is set, then the `title` property will not be used.
         */
        headerContent?: JSX.Element
    
        /**
         * Set to true to allow the dialog to be closed by clicking outside of it
         */
        backgroundDismiss?: boolean,
    
        /**
         * Set this to 'true' to show the close button in the dialog
         */
        showCloseButton?: boolean,
    
        /**
         * Animation to use when opening/closing a modal
         */
        animation?: IAnimation,
        /**
         * additional styles for backdrop
         */
        backdropStyles?: any,
        /**
         * additional content to render
         */
        renderAdditionalContent?: () => JSX.Element
    }
    /**
     * Display a modal dialog. The dialog will be placed in front of a invisible sheet above the main UI.
     * @example
     * ```
     *  <button
     *      className="btn showcase"
     *      onClick={() => setShowModal(true)}
     *  >
     *      Click to Show Modal
     *  </button>
     *
     *  <Modal
     *      show={showModal}
     *      onOpen={() => { }}
     *      onClose={() => setShowModal(false)}
     *  >
     *      This is a sample modal
     *  </Modal>
     * ```
     * @export
     *
     */
    export const Modal : React.FunctionComponent<IModalProps>;
        
    interface IIconButtonProps {
        /**
         * button type
         */
        type: IButtonType,
        /**
         * Set button to active state when true
         */
        active?: boolean,
        /**
         * Set button to disabled state when true
         */
        disabled?: boolean,
        /**
         * The callback that gets invoked when the button is clicked.
         */
        onClick?: () => void,
         /**
         * Any extra css classes to apply
         */
        className?: string,
         /**
         * button size. Can be either 'large' or 'small'
         */
        size?: IButtonSize
    
        /**
         * set to `true` to prevent a border from being shown for the button
         */
        borderless?: boolean;
    }
    /**
     *
     * @export
     *
     * Default set of buttons with icons
     *
     * @example
     * ```
     *  <IconButton
     *      type="search"
     *      onClick={()=> {alert("Clicked")}}
     *      className="custom-css-class"
     *  />
     * ```
     *
     */
    export const IconButton : React.FunctionComponent<IIconButtonProps>;
        
    interface IFormFieldProps {
        /**Set this to true to have multiple fields in a single horizontal line */
        inline?: boolean,
        /**
         * Any extra css classes to attach to the field
         */
        className?: string,
    
        /**
         * A background color to set for the field
         */
        backgroundColor?: string
    }
    /**
     *
     * This is a generic field used to layout forms. Typically used in conjunction with `<Label>` to show a field with a label
     * @export
     * @example
     * ```
     * <FormField inline>
     *       <Label>Button (active)</Label>
     *       <Button
     *           title="Sample Button"
     *           onClick={() => alert("clicked")}
     *           icon="https://static.iviva.com/images/Adani_UXP/QR_badge_icon.svg"
     *           active
     *       />
     *   </FormField>
     * ```
     *
     * @example
     * TODO: More Examples
     */
    export const FormField : React.FunctionComponent<IFormFieldProps>;
        
    interface ILabelProps {
        labelFor?: string,
        className?: string,
        inline?: boolean
    }
    /**
     * A simple label. Usually used in conjunction with a FormField
     * @export
     *
     * @example
     * ```
     * <Label>Name</Label>
     * ```
     */
    export const Label : React.FunctionComponent<ILabelProps>;
        
    interface IInputProps {
        /**
         * Determines if the input field accepts a password, email address, number or just text. Default is 'text'
         */
        type?: IInputType,
    
        /**
         * The actual text
         */
        value: string,
    
        /**
         * This function is called whenever the text changes. The new text value is passed as a parameter
         */
        onChange: (value: string) => void,
    
        /**
         * Any additional class names to be included for the input field
         */
        className?: string,
    
        /**
         * Determines if an indicator should be shown at the end of the input.
         */
        hasIndicator?: boolean,
    
        /**
         * The color of the indicator icon (relevant only if hasIndicator is true)
         */
        indicatorColor?: string,
        isValid?: boolean,
        inputAttr?: { [key: string]: string | boolean }
        placeholder?: string,
        inline?: boolean
    }
    /**
     *
     * A standard text box
     * @export
     */
    export const Input : React.FunctionComponent<IInputProps>;
        
    interface ICheckboxProps {
        /**
         * Called when the checkbox is checked or unchecked by clicking on it
         */
        onChange: (checked: boolean) => void,
    
        /**
         * Get or set the current state of the checkbox
         */
        checked: boolean,
    
        /**
         * Any additional text to show next to the checkbox
         */
        label?: string,
    
        /**
         * If set to 'false' the checkbox will show in an 'invalid' state - neither true nor false
         */
        isValid?: boolean,
    
        /**
         * Any additional html attributes to pass to the underlying input field
         */
        inputAttr?: { [key: string]: string | boolean },
    
        /**
         * Determines how the checkbox looks, visually
         */
        type?: ICheckboxType
    }
    /**
     *
     * @export
     *
     * A checkbox component. This can render a true/value value in multiple ways. Set the type property to determine how it looks visually.
     * types : default, bordered, change-icon, switch-line, switch-box
     *
     * @example
     * ```
     *  <Checkbox
     *      checked={checked}
     *      onChange={(isChecked) => setChecked(isChecked)}
     *      label='Are you sure'
     *  />
     * ```
     *
     * @example
     * ```
     *  <Checkbox
     *      checked={checked}
     *      onChange={(isChecked) => setChecked(isChecked)}
     *      label='Are you sure'
     *      type="switch-box"
     *  />
     * ```
     *
     */
    export const Checkbox : React.FunctionComponent<ICheckboxProps>;
        /**
     * Show a simple loading animation indicator
     * @export
     */
    export const Loading : React.FunctionComponent<{}>;
        
    interface INotificationProps {
         /**
         *  Message to show when showing
         */
        message: string,
        /**
         * Any extra css classes to apply
         */
        class?: string,
        /**
         * any extra styles
         */
        styles?: any
    }
    /**
     * @example
     * ```
     *  <NotificationBlock message="-- End Of Content --" class="end-of-content" />
     * ```
     * @export
     *
     */
    export const NotificationBlock : React.FunctionComponent<INotificationProps>;
        
    interface IButtonProps {
        /**
         * The caption for the button
         */
        title: string,
    
        /**
         * The url of an icon to show on the button
         */
        icon?: string,
    
        /**
         * Any extra css classes to add to the button
         */
        className?: string,
    
        /**
         * The callback that gets invoked when the button is clicked
         */
        onClick: () => void,
    
        /**
         * Set this to `true` to show the button in its 'loading...' state.
         * In this state, an animation will be shown indicating that work is going on and the user will not be able to click the button
         */
        loading?: boolean,
    
        /**
         * The caption to show on the button when its in loading state
         */
        loadingTitle?: string,
    
    
        active?: boolean,
        disabled?: boolean
    }
    /**
     * This is a basic button component.
     * @export
     *
     * @example
     * ```
     *  <Button
     *      title="Click"
     *      onClick={() => {alert("Clicked")}}
     *  />
     * ```
     *
     * @example
     * ```
     *  <Button
     *      title="Click"
     *      onClick={() => {alert("Clicked")}}
     *      icon="https://static.iviva.com/images/lucy-logo.svg"
     *      loading={isLoading}
     *      loadingTitle="Loading..."
     *      className="custom-css-class"
     * />
     * ```
     *
     */
    export const Button : React.FunctionComponent<IButtonProps>;
        
    interface IDataListProps {
        /**
         * List of items to render. This can either be an array of objects or a function that will generate the array of objects.
         * If you supply a function then pagination will be supported. The function expects 2 parameters - `max` and `last` and returns a promise that will resolve to the list of objects.
         * `max` specifies the maximum number of items to be returned.
         */
        data: Array<any> | IDataFunction,
    
        /**
         * A function that will be responsible for rendering each individual element of the list.
         * It is common to return  `ItemCard` component from here.
         *
         * @example
         *
         * ```
         * renderItem={(item,key)=><div>{'Item:' + JSON.stringify(item)}}</div>}
         * ```
         *
         * @example
         * ```
         * renderItem={(item,key)=><ItemCard data={item} titleField='Name' />}
         * ```
         */
        renderItem: (item: any, key: number) => JSX.Element,
    
        /**
         * The number of items to fetch in each page. This gets passed to the data function as the `max` parameter
         */
        pageSize: number,
    
        args?: any
    
    
        /**
         * This function renders a loading animation. If not specified, the default loading animation will be used.
         */
        renderLoading?: () => JSX.Element,
    
        /**
         * Any extra class names to be added to the component
         */
        className?: string
        /**
         * show/hide footer (scroll buttons)
         */
        showFooter?: boolean,
        /**
         * mun of rows to scroll
         */
        scrollStep?: number,
        /**
         * show/hide end of content message
         */
        showEndOfContent?: boolean,
    
        /**
         * this function will be called every time list get updated
         * this will return total number of items (function should return the total count) and loaded items count
         */
        onItemsLoad?: (total: number, loaded: number) => void
    
    
    }
    /**
     *
     * A infinite-scrollable list that supports paging in of items
     * @export
     *
     *
     *
     *
     * @example
     * ```
     *  Using array
     *
     *  let data:any[] = [
     *      {
     *          "id": 1,
     *          "name": "Name 01"
     *      },
     *      {
     *          "id": 2,
     *          "name": "Name 01"
     *      },
     *      {
     *          "id": 3,
     *          "name": "Name 01"
     *      }
     *  ]
     *
     *  function renderItem(item:any, key:number) {
     *      return <div>
     *          <div>{item.name} </div>
     *      </div>
     *  }
     *
     *  <DataList
     *      data={data}
     *      renderItem={(item, key) => renderItem(item, key)}
     *      pageSize={10}
     *  />
     * ```
     *
     * @example
     * ```
     *  Using IDataFunction
     *  async function getData(max:number, last: string, args: any) {
     *      if(!last) last = "0";
     *
     *      return new Promise<{items:any[], pageToken: string}>((done, nope) =>{
     *          executeAction("model", "action", {max: max, last: last, args: args})
     *          .then(res => {
     *              done({items: res.data, pageToken: res.lastPageToken })
     *          })
     *          .catch(e => {
     *              done({items: [], pageToken: last})
     *          })
     *      })
     *  }
     *
     *  function renderItem(item:any, key:number) {
     *      return <div>
     *          <div>{item.name} </div>
     *      </div>
     *  }
     *
     *  <DataList
     *      data={(max, last, args) => getData(max, last, args)}
     *      renderItem={(item, key) => renderItem(item, key)}
     *      pageSize={10}
     *  />
     *
     * ```
     *
     * @example
     * ```
     *  Using other props
     *
     *  <DataList
     *      data={data}
     *      renderItem={(item, key) => renderItem(item, key)}
     *      pageSize={10}
     *      className="custom-css-class"
     *      showFooter={false}
     *      showEndOfContent={false}
     *  />
     *
     * ```
     */
    export const DataList : React.FunctionComponent<IDataListProps>;
        
    interface ISearchBoxProps {
        /**
         * Default value
         */
        value: string,
        /**
        * This function is called whenever the text changes. The new text value is passed as a parameter
        */
        onChange: (newValue: string) => void,
        /**
         * Any additional class names to be included for the input field
         */
        className?: string,
        /**
         * show only a icon button when true. When click on the button it will show the actual search box
         */
        collapsed?: boolean,
        /**
         * position of search box
         */
        position?: IPosition,
        /**
         * placeholder value
         */
        placeholder?: string
        /**
         * input will be auto focused if true
         */
        autoFocus?: boolean
    }
    /**
     *
     * @export
     *
     * This component is used to render a search box.
     *
     * @example
     * ```
     *  <SearchBox
     *      value={inputValue}
     *      onChange={(newValue) => { setInputValue(newValue) }}
     *  />
     * ```
     *
     * @example
     *  <SearchBox
     *      value={inputValue}
     *      onChange={(newValue) => { setInputValue(newValue) }}
     *      collapsed
     *      position="right"
     *  />
     *
     */
    export const SearchBox : React.FunctionComponent<ISearchBoxProps>;
        /**
     * @export
     */
    interface ISelectProps {
        /**
         * List of items to select from.
         * Each option has a label which is displayed and a value which is what we actually select.
         * also you can pass any object as options, then specify the labelField, valueField props
         */
        options: IOption[] | any[],
        /**
         * Name of the field you want to display as label
         * If not given default(label) will be used
         */
        labelField?: string,
        /**
         * Name of the field you want to return  as value
         * If not given default(value) will be used
         */
        valueField?: string,
        /**
         * The  currently selected value
         */
        selected: string,
    
        /**
         * Gets called whenever the selection changes.
         * The value parameter has the newly selected value
         * option parameter has the complete option/ object that you passed
         */
        onChange: (value: string, option?: IOption | any) => void,
    
        /**
         * Text to show when no value is selected
         */
        placeholder?: string,
        /**
         * Any extra css classes to add to the component
         */
        className?: string,
    
        /**
         * Set this to false to indicate the field doesn't have a valid value
         */
        isValid?: boolean,
        // inputAttr?: any
        /**
         * show hide end of content message
         */
        showEndOfContent?: boolean
    
    }
    /**
     *
     * A select control to select one item from a list of multiple items
     * @export
     *
     *  @example
     * ```
     *  // options
     *  let [selectedOption, setSelectedOption] = React.useState<string>(null)
     *  let options = [
     *      {label: "Sri Lanka", value: "SL"},
     *      {label: "India", value: "IN"},
     *      {label: "United State", value: "US"},
     *  ]
     *
     *  <Select
     *      options={options}
     *      selected={selectedOption}
     *      onChange={(newValue, option) => {
     *          setSelectedOption(value)
     *      }}
     *  />
     * ```
     *
     * @example
     * ```
     *  // options
     *  let [selectedOption, setSelectedOption] = React.useState<string>(null)
     *  let options = [
     *      {name: "Sri Lanka", code: "SL"},
     *      {name: "India", code: "IN"},
     *      {name: "United State", code: "US"},
     *  ]
     *
     *  <Select
     *      options={options}
     *      labelField="name"
     *      valueField="code"
     *      selected={selectedOption}
     *      onChange={(newValue, option) => {
     *          setSelectedOption(value)
     *      }}
     *  />
     * ```
     *
     */
    export const Select : React.FunctionComponent<ISelectProps>;
        /**
     * @export
     *
     */
    interface IDatePickerProps {
        /**
         * The title
         */
        title: string,
    
        /**
         * The currently selected date. Either a Date object or an ISO8601 string representation of a date
         */
        date: string | Date,
    
        /**
         * Callback that gets executed whenever a date is selected/changed in the date picker
         */
        onChange: (date: Date) => void,
    
        /**
         * Called when the calendar popup is closed
         */
        closeOnSelect?: boolean,
    
        /**
         * Additional options to control behavior
         */
        options?: IDatePickerOptions,
    
        /**
         * Set to true to prevent a user from typing in a date
         */
        disableInput?: boolean,
    
    }
    /**
     *
     * @export
     *
     * This component is used to select a date.
     *
     * @example
     * ```
     *  <DatePicker
     *    title="Date"
     *    date={date}
     *    onChange={(date) => setDate(date)}
     * />
     * ```
     *
     * @example
     * <DatePicker
     *     title="Date"
     *     date={date}
     *     onChange={(date) => setDate(date)}
     *     options={{
     *         disableWeekEnds: true
     *     }}
     * />
     */
    export const DatePicker : React.FunctionComponent<IDatePickerProps>;
        
    interface ITimePickerProps {
        /**
        * The title
        */
        title: string
        /**
         * The currently selected time. Either a Date object or an time string (Ex: 01:10:00 pm)
         */
        time: string | Date,
        /**
        * Callback that gets executed whenever a time is selected/changed in the time picker
        */
        onChange: (date: Date) => void,
        /**
        * Set to true to prevent a user from typing in a date
        */
        disableInput?: boolean
    }
    /**
     *
     * @export
     *
     * This component is used to select a time.
     *
     * @example
     * ```
     *  <TimePicker
     *      title="Time"
     *      time={date}
     *      onChange={(date) => setDate(date)}
     *  />
     * ```
     */
    export const TimePicker : React.FunctionComponent<ITimePickerProps>;
        
    interface IProfileImageProps {
    
        /**
         * The url for the image to be shown
         */
        image?: string,
    
        /**
         * Any name to be dispayed. This is used only if the image is empty.
         * 2 letters will be derived from the name (typically the first letter of the first 2 words in the name)
         * and a background color will be chosen. Background colors are random but consistent. So a given `name` string will always have the same background
         */
        name?: string,
        bgColor?: string,
        textColor?: string,
        className?: string,
        size?: ISize
    }
    /**
     * Display a profile picture. Alternatively you can specify a name and it will be shown in a colored background as initials
     *
     * @export
     */
    export const ProfileImage : React.FunctionComponent<IProfileImageProps>;
        /**
     * @export
     */
    interface ITooltipProps {
        /**
         * The content to show inside the tooltip
         * This can be either a string or a JSX element
         * @example
         *
         * ```
         * <Tooltip content="This is a tooltip" />
         * ```
         *
         * @example
         *
         * ```
         * <Tooltip content={() => <div>This is a tooltip</div>} />
         * ```
         */
        content: string | IContentFunction,
    
        /**
         * Where the tooltip should be placed relative to the element it is being displayed for
         * <Tooltip position="left" content="There are many like it but this one's mine" />
         */
        position?: ITooltipPosition
    
        /**
         * the content to show within the bubble
         *  This can be either a string or a JSX element
         *
         * * @example
         *
         * ```
         *  <Tooltip
         *      content="This is a tooltip"
         *  >
         *      <button className="btn showcase" >Hover to Show Tooltip</button>
         *  </Tooltip>
         * ```
         *
         * * @example
         *
         * ```
         *  <Tooltip
         *      content={() => <div>This is a tooltip</div>}
         *      position="left"
         *  >
         *      <button className="btn showcase" >Hover to Show Tooltip</button>
         *  </Tooltip>
         * ```
         *
         */
    }
    /**
     * This component wraps another component and shows a tooltip for the component it is wrapping, whenever the user moves the mouse over it.
     * @export
     */
    export const Tooltip : React.FunctionComponent<ITooltipProps>;
        /**
     * @export
     */
    interface IPopoverProps {
        /**
         * title of the popup bubble
         *  This can be either a string or a JSX element
         * @example
         *
         * ```
         * title="Popover Title"
         * ```
         *
         * * @example
         *
         * ```
         * title={() => <div>Popover Title</div>
         * ```
         */
        title: string | IContentFunction,
    
        /**
         * the content to show within the bubble
         *  This can be either a string or a JSX element
         *
         * * @example
         *
         * ```
         * content="Popover Content"
         * ```
         *
         * * @example
         *
         * ```
         * content={() => <div>Popover content</div>
         * ```
         *
         */
        content: string | IContentFunction,
    
        /**
         * Where the bubble should be positioned relative to the element
         */
        position?: IPopoverPosition
    
        /**
         * the content to show within the bubble
         *  This can be either a string or a JSX element
         *
         * * @example
         *
         * ```
         *  <Popover
         *      title="Popover"
         *      content="This is a popover"
         *  >
         *      <button className="btn showcase" >Click to Show popover</button>
         *  </Popover>
         *
         * ```
         *
         * * @example
         *
         * ```
         *  <Popover
         *      title={() => <div>Popover</div>}
         *      content={() => <div>This is a popover</div>}
         *      position="left"
         *  >
         *      <button className="btn showcase" >Click to Show popover</button>
         *  </Popover>
         * ```
         *
         */
    }
    /**
     *
     * Show a popup bubble when clicking on an element.
     * Wrap the element you want to target in the popup bubble.
     *
     * @example
     * ```
     * <Popover title='Details' content={'Name:' + props.name}>
     *      <span>Click to see name</span>
     * </Popover>
     * ```
     * @export
     */
    export const Popover : React.FunctionComponent<IPopoverProps>;
        
    interface IAsyncButtonProps {
    
        /**
         * The caption for the button
         */
        title: string,
    
        /**
        * The url of an icon to show on the button
        */
        icon?: string,
    
        /**
         * Any extra css classes to add to the button
         */
        className?: string,
    
        /**
         * The callback that gets invoked when the button is clicked.
         * It must return a Promise
         */
        onClick: () => Promise<any>,
    
        /**
         * Set button to active state when true
         */
        active?: boolean,
        /**
        * Set button to disabled state when true
        */
        disabled?: boolean,
        /**
         * Text to show when in loading state
         */
        loadingTitle?: string,
        /**
         * a callback function to call on error
         */
        onError?: (e: any) => void
    }
    /**
     * This is a button that is meant to be used to execute a async action.
     * The onClick handler should return a promise. The button's behavior is to set the status as 'loading...' until the promise that was returned evluates and returns a result or throws an exception.
     * @export
     *
     * @example
     * ```
     *  <AsyncButton
     *      title="Submit"
     *      onClick={async() => {return executeAction("model", "action", {})}}
     *      icon="https://static.iviva.com/images/Adani_UXP/QR_badge_icon.svg"
     *      loadingTitle="Submitting..."
     *      className="custom-css-class"
     *  />
     * ```
     *
     */
    export const AsyncButton : React.FunctionComponent<IAsyncButtonProps>;
        /**
     * @export
     */
    interface IModalWizardProps {
    
        /**
         * Set this to true to show the dialog. False to hide it
         */
        show: boolean;
    
        /**
         * Call this to close the dialog
         */
        onClose:()=>void;
    
        /**
         * The title to show on the top
         */
        title: string;
    
        /**
         * An optional icon to show
         */
        icon?: string;
    
        /**
         * A method to render a subheader just below the title area.
         */
        onRenderHeader?:(currentStep:IModalWizardStepProps)=> JSX.Element;
    
        /**
         * The list of steps that this wizard consists of.
         */
        steps: IModalWizardStep[];
    
        /**
         * This action executes after they hit 'next' on the final page.
         */
        onComplete:()=>Promise<any>;
    
        /**
         * Text to show on the 'next' button in the final stage.
         */
        completionText?: string;
        className?:string;
    }
    /**
     * This component is used to show a modal dialog that takes the user through as sequence of steps.
     * You define how each step should render.
     * @export
     *
     * @example
     * ```
     *  <ModalWizard
     *      show={show}
     *      title="Sample modal wizard"
     *      steps={[
     *      {
     *          id: "step-1",
     *          render: (props) => <div>
     *              <FormField>
     *                  <Label>Name</Label>
     *                  <Input value={name} onChange={setName} />
     *              </FormField>
     *              <FormField>
     *                  <Label>Email</Label>
     *                  <Input value={email} onChange={setEmail} />
     *              </FormField>
     *          </div>,
     *          renderStatus: () => <div>Personal Details</div>,
     *          onValidateStep: () => "step-2",
     *          showStatus: true
     *      },
     *      {
     *          id: "step-2",
     *          render: (props) => <div>
     *              <FormField>
     *                  <Label>University</Label>
     *                  <Input value={school} onChange={setSchool} />
     *              </FormField>
     *          </div>,
     *          renderStatus: () => <div>Educational Details</div>
     *      }
     *  ]}
     *  onClose={() => { setShow(false) }}
     *  onComplete={async () => { return executeAction("model", "action", {data: data}) }}
     * />
     * ```
     *
     */
    export const ModalWizard : React.FunctionComponent<IModalWizardProps>;
        
    interface IFilterPanelProps {
        /**
         * Called whenever the panel is opened
         */
        onOpen?: ICallback,
    
        /**
         * Called whenever the panel gets dismissed
         */
        onClose?: ICallback,
    
        /**
         * Called whenever the clear button on the panel is pressed. This button is available only when `enableClear` is set to `true1`
         */
        onClear?: ICallback,
        fillContainer?: React.RefObject<HTMLElement>,
    
        /**
         * Any extra css classes to add to the filter panel
         */
        className?: string,
    
        /**
         * Enabled the clear button on the panel
         */
        enableClear?: boolean
    }
    /**
     * Displays a filter button which, when clicked, opens a popup panel.
     * Suitable for hiding filters for widgets or searches
     * @export
     *
     * @example
     * ```
     * <FilterPanel
     *                                enableClear={inputValue?.length > 0 || selected != null}
     *                                onClear={() => { setInputValue(""); setSelected(null) }} >
     *                                <FormField className="no-padding mb-only">
     *                                    <Label>Sort By</Label>
     *                                    <Select
     *                                        selected={selected}
     *                                        options={[
     *                                            { label: "Name", value: "op-1" },
     *                                            { label: "Date", value: "op-2" },
     *                                        ]}
     *                                        onChange={(value) => { setSelected(value) }}
     *                                        placeholder=" -- select --"
     *                                        isValid={selected ? selected?.length > 0 : null}
     *                                    />
     *                                </FormField>
     * </FilterPanel>
     * ```
     *
     */
    export const FilterPanel : React.FunctionComponent<IFilterPanelProps>;
        
    interface IWidgetTitleBarProps {
        /**
         * The title to show for the widget
         */
        title:string;
    
        /**
         * The url for an icon to be shown next to the title on the top left corner.
         */
        icon?:string;
        className?: string
    }
    /**
     * Use this to show a title area on widgets. You can set a title on the left side
     * and any arbitrary content on the right side - typically you would use a {@component FilterPanel} there.
     * The content that appears on the right side go as children of this component.
     * @export
     *
     * @example
     *
     * ```
     * <TitleBar title='My Test Widget'>
     *      <div>Active</div>
     * </TitleBar>
     * ```
     *
     */
    export const TitleBar : React.FunctionComponent<IWidgetTitleBarProps>;
        
    interface ILinkWidgetContainerProps {
        /**
         *  Set this to true to make the container visible
         */
        show: boolean,
        /**
         * Called whenever the container is opened
         */
        onOpen?: any,
         /**
         * Called when the container gets closed
         */
        onClose?: any,
        /**
         * The title set in the title bar of the container
         */
        title?: any,
        /**
         * Any extra css classes to apply
         */
        className?: string,
         /**
         * Any custom content to include in the container toolbar.
         */
        toolbarContent?: any
    }
    /**
     * This is a extended version of modal. this covers the full UI.
     * main purpose is to create a container for sidebar link widgets
     * @example
     * ```
     *  <button className="btn showcase" onClick={() => setShowLinkWidget(true)}>Click to Show Link Widget Container</button>
     *
     *  <LinkWidgetContainer
     *      show={showLinkWidget}
     *      onClose={() => setShowLinkWidget(false)}
     *      title="Link Widget Container"
     *  >
     *      content
     * </LinkWidgetContainer>
     * ```
     * @export
     *
     */
    export const LinkWidgetContainer : React.FunctionComponent<ILinkWidgetContainerProps>;
        /**
     * @export
     */
    interface ICalendarComponentProps {
        /**
         * array of dates
         */
        dates: Date[]
        /**
         * callback to trigger on click date
         * ill return the clicked date
         */
        onSelectDate: (date: Date) => void
        /**
         * disable weekends
         */
        disableWeekEnds?: boolean,
        /**
         * list of dates to disable
         */
        disableDates?: Array<Date>
        /**
         * min date
         */
        minDate?: Date,
        /**
         * max date
         */
        maxDate?: Date,
        /**
         * class name to use custom styles
         */
        className?: string
    }
    /**
     * @export
     * Calendar component so display range of dates
     */
    export const CalendarComponent : React.FunctionComponent<ICalendarComponentProps>;
        
    interface IDataTableProps {
        /**
         * List of items to render. This can either be an array of objects or a function that will generate the array of objects.
         * If you supply a function then pagination will be supported. The function expects 2 parameters - `max` and `last` and returns a promise that will resolve to the list of objects.
         * `max` specifies the maximum number of items to be returned.
         */
        data: Array<any> | IDataFunction,
    
        /**
         * List of columns to render
         * column contains three(3) params
         *  - title : column title. this can be either a string or a function that returns a jsx element
         *  - width : width of the column. this can a percentage (20%), fixed with (100px) or null
         *  - renderColumn : content of the column. this is a function that returns a jsx element. this function will take a single argument item type of any
         *  @example
         *
         * ```
         *  renderColumn={(item,key)=><div>{'Item:' + JSON.stringify(item)}}</div>}
         * ```
         * @example
         *
         * ```
         * columns= {[
         *  {
         *      title: "Request Id",
         *      width: "20%",
         *      render: (item) => <div>{item.requestId} </div>
         *  },
         *  {
         *      title: "User",
         *      width: "10%",
         *      render: (item) => <div>{item.user} </div>
         *  }
         * ]}
         * ```
         */
        columns: IDataTableColumn[],
    
        /**
         * The number of items to fetch in each page. This gets passed to the data function as the `max` parameter
         */
        pageSize: number,
    
        args?: any
    
        /**
         * This function renders a loading animation. If not specified, the default loading animation will be used.
         */
        renderLoading?: () => JSX.Element,
    
        /**
         * Any extra class names to be added to the component
         */
        className?: string
        /**
         * show/hide footer (scroll buttons)
         */
        showFooter?: boolean,
        /**
         * mun of rows to scroll
         */
        scrollStep?: number,
        /**
         * show/hide end of content message
         */
        showEndOfContent?: boolean
    
        /**
       * this function will be called every time list get updated
       * this will return total number of items (function should return the total count) and loaded items count
       */
        onItemsLoad?: (total: number, loaded: number) => void
    
        /**
         * this will toggle the headers
         * default is true
         */
        renderHeaders?: boolean,
    
        /**
         * callback function to trigger on click a table row
         */
        onClickRow?: (item: any) => void,
    
        /**
         * active table row styles
         * default is 'active' an has some styles
         * if you give a class here it will be applied
         */
        activeClass?: string
    }
    /**
     *
     * A infinite-scrollable list that supports paging in of items
     * @export
     *
     * @example
     * ```
     *  <DataTable
     *      data={(max, last) => getDataItems(max, last)}
     *      pageSize={10}
     *      columns={[
     *          {
     *              title: "Request",
     *              width: "30%",
     *              renderColumn: (item) => <ItemCard
     *                  item={item}
     *                  subTitleField="request"
     *                  className="data-table-item"
     *              />
     *          },
     *          {
     *              title: "User",
     *              width: "25%",
     *              renderColumn: (item) => <ItemCard
     *                  item={item}
     *                  subTitleField="user"
     *                  className="data-table-item"
     *              />
     *          },
     *          {
     *              title: "Zone",
     *              width: "15%",
     *              renderColumn: (item) => <ItemCard
     *                  item={item}
     *                  subTitleField="section"
     *                  className="data-table-item"
     *              />
     *          },
     *          {
     *              title: "Status",
     *              width: "15%",
     *              renderColumn: (item) => <ItemCard
     *                  item={item}
     *                  subTitleField="status"
     *                  className="data-table-item"
     *              />
     *          },
     *          {
     *              title: "Date",
     *              width: "15%",
     *              renderColumn: (item) => <ItemCard
     *                  item={item}
     *                  subTitleField="date"
     *                  className="data-table-item"
     *              />
     *          }
     *      ]}
     *  />
     * ```
     */
    export const DataTable : React.FunctionComponent<IDataTableProps>;
        
    interface IItemCardProps {
        /**
         * A reference to the data to be rendered as a card.
         */
        item?: any,
    
        /**
         * The name of the field within the `item` that has the url of an image to be shown
         */
        imageField?: string,
    
        /**
         * The name of the field within `item` that has the title of the object
         */
        titleField?: string,
    
        /**
         * The name of the field within 'item' that holds the subtitle of the object
         */
        subTitleField?: string,
    
        /**
         * This name of the field within `item` that contains any 'name' associated with the object.
         * This property is used only if the imageField value is not set. The name is abbreviated and set as the profile image.
         */
        nameField?: string,
    
        /**
         * Any extra css classes to biind to the card.
         */
        className?: string
    }
    /**
     * This component is used to render some item in a standard card form.
     * This includes a profile pic, a title, a subtitle and a list of fields and values.
     * @export
     *
     * @example
     * ```
     *  <ItemCard
     *      item={{
     *          request: "AC Extension request #36",
     *          user: "Johnson & Johnson",
     *          section: "Parking 1",
     *          status: "approved",
     *          date: "23/0702020"
     *      }}
     *      titleField="request"
     *      subTitleField="date"
     *      className="data-table-item"
     *  />
     * ```
     *
     * @example
     * ```
     *  <ItemCard
     *      item={{
     *          id: "1",
     *          image: "https://avatars.dicebear.com/api/male/john.svg?background=%230000ff"
     *          name: "John Doe",
     *      }}
     *      imageField="image"
     *      titleField="name"
     *      className="data-table-item"
     *  />
     * ```
     *
     */
    export const ItemCard : React.FunctionComponent<IItemCardProps>;
        
    interface IPieChartProps {
        /**
         * A list of items that the pie chart is comprised of
         */
        data: IDataItem[],
    
        /**
         * TODO
         */
        fillColor: string,
    
        /**
         * Set to `true` to show the chart legend
         */
        showLegend?: boolean
    }
    /**
     *
     * Display a pie chart visualization
     * @export
     */
    export const PieChartComponent : React.FunctionComponent<IPieChartProps>;
        
    interface IFormFeedbackProps {
        validInput?: boolean,
        className?: string
    }
    /**
     * This is used to provide a success or error summary message for forms
     * @export
     * @example
     * ```
     * FormFeedback validInput>Form feedback ( valid )</FormFeedback>
     * ```
     *
     * @example
     * ```
     * <FormFeedback validInput={false}>Form feedback ( invalid )</FormFeedback>
     * ```
     *
     */
    export const FormFeedback : React.FunctionComponent<IFormFeedbackProps>;
        
    interface IToggleFilterProps {
        /**
         * The list of possible options to choose from
         */
        options: IToggleOption[],
    
        /**
         * The current value (selected item)
         */
        value: string,
    
        /**
         * Called whenever an option is selected
         */
        onChange: (newValue: string) => void,
    
        /**
         * Any additional css classes to include
         */
        className?: string
    }
    /**
     * This component presents a group of options from which one can be selected.
     * Suitable to select a single item from a list where the list is very small. Most often used for filters.
     * @export
     */
    export const ToggleFilter : React.FunctionComponent<IToggleFilterProps>;
        
    interface IDataGridProps {
        /**
         * The items to render into a grid. This will be an array of any data.
         * The data is passed into the render function and can be used there to render the actual grid cell.
         *
         */
        data: Array<any>,
    
        /**
         * A function which can be used to return the contents of each cell. The function will be passed 2 parameters:
         *
         * `item`: The individual item from the list of items passed as the `data` prop
         * `key`: The index of the item in the list
         *
         * This function should return a react element
         *
         * @example
         *
         * ```
         * renderItem={(item:any,key:number)=> <div>{'Key Is ' + key}}</div>}
         * ```
         */
        renderItem: (item: any, key: number) => JSX.Element,
    
        /**
         * The number of columns to display. Items will be layed out row by row and the number of columns in each row is specified here
         */
        columns: number,
    
        /**
         * Any additional css class names to include in the component
         */
        className?: string
    }
    /**
     * @export
     *
     * Used to show data in a matrix or grid. You can give it a list of items and a function to render those items.
     * Items get layed out in a grid and displayed.
     *
     * @example
     * ```
     *  let GridData = [
     *      {
     *          icon: "https://static.iviva.com/images/Adani_UXP/QR_badge_icon.svg",
     *          title: "Item Card",
     *          subTitle: "Item card with image/icon Item card with image/icon"
     *      },
     *      {
     *          icon: "",
     *          name: "Dinesh Gamage",
     *          title: "Item Card",
     *          subTitle: "Item card with name"
     *      },
     *      {
     *          icon: "https://static.iviva.com/images/Adani_UXP/QR_badge_icon.svg",
     *          title: "Item Card Title & Icon",
     *          subTitle: ""
     *      },
     *      {
     *          icon: "https://static.iviva.com/images/Adani_UXP/QR_badge_icon.svg",
     *          title: "",
     *          subTitle: "Item Card sub Title & Icon"
     *      },
     *      {
     *          title: "Item Card",
     *          subTitle: "Item card without image/icon"
     *      },
     *      {
     *          title: "Item Card Title only",
     *      },
     *      {
     *          subTitle: "Item card sub title only"
     *      },
     *      {
     *          icon: "https://static.iviva.com/images/Adani_UXP/QR_badge_icon.svg",
     *          title: "QR Code",
     *          subTitle: "scan your code"
     *      },
     *      {
     *          icon: "https://static.iviva.com/images/Adani_UXP/QR_badge_icon.svg",
     *      },
     *      null
     *  ]
     *
     *
     *  function renderGridItem(item: any, key: number){
     *      return (<ItemCard
     *          item={item}
     *          imageField="icon"
     *          titleField="title"
     *          subTitleField="subTitle"
     *          nameField="name"
     *      />)
     *  }
     *
     *  <DataGrid
     *      data={GridData}
     *      renderItem={renderGridItem}
     *      columns={2}
     *  />
     * ```
     *
     */
    export const DataGrid : React.FunctionComponent<IDataGridProps>;
        
    interface IItemListCardProps {
        /** The title to show on the card */
        title: string,
    
        /**
         * Any optional subtitle content to render. This should be a function that returns a react node
         */
        renderSubTitle?: () => JSX.Element,
    
        /**
         * The object to render in the card
         */
        item: any,
    
        /**
         * The list of fields from within the object that should be shown.
         * For each field in this list - one line gets rendered on the card
         */
        fields: string[],
    
        /** An optional function to control rendering of each field. It takes the item as a parameter along with the name of the field being rendered.
         * You can choose to render whatever you want here
         */
        renderField?: (object: any, field: string, key: number) => JSX.Element,
    
        /**
         * Any background tint to apply to the card. This must be in #RRGGBB hexadecimal format.
         */
        backgroundColor?: string
    
        /**
         * Any additional css classes to apply to the component
         */
        className?: string
    }
    /**
     * Show a card with a list of fields in it. You need to provide an object as the `item` prop and then a list of fields from within the object to be rendered.
     * You can also provide an optional `renderField` function to customize how fields are rendered.
     * @export
     *
     * @example
     * ```
     *  <ItemListCard
     *      title="System"
     *      item={{
     *          "hvac": {
     *              "value": 250,
     *              "percentage": 15
     *          },
     *          "lighting": {
     *              "value": 250,
     *              "percentage": 15
     *          },
     *          "elevators": {
     *              "value": 250,
     *              "percentage": 15
     *          },
     *          "fire alarm": {
     *              "value": 250,
     *              "percentage": 15
     *          }
     *      }}
     *      renderSubTitle={() => {
     *          return (<div className="sample-subtitle">Savings (AED)</div>)
     *      }}
     *      fields={["hvac", "lighting", "elevators", "fire alarm"]}
     *      renderField={(item, field, key) => {
     *          return (<div className="sample-item-field" key={key}>
     *              <div className="label">{field.toUpperCase()}</div>
     *              <div className="value">
     *                  <div className="amount">{item[field].value}</div>
     *                  <div className="percentage">{item[field].percentage}%</div>
     *              </div>
     *          </div>)
     *      }}
     *      backgroundColor="rgb(209 148 250)"
     *  />
     * ```
     *
     */
    export const ItemListCard : React.FunctionComponent<IItemListCardProps>;
        /**
     * @export
     */
    interface IWidgetWrapperProps {
        /**
         * Any extra css class names to add to the widget wrapper
         */
        className?: string
    }
    /**
     *
     * @export
     *
     * This is a standard wrapper for widgets.
     * It provides basic visual styling for common widgets. You should generally wrap all your widgets in this.
     *
     * @example
     * ```
     * <WidgetWrapper>
     *  <Label>My custom widget</Label>
     * </WidgetWrapper>
     * ```
     */
    export const WidgetWrapper : React.FunctionComponent<IWidgetWrapperProps>;
        
    interface IMapComponentProps {
        /**
         * The url of the tile server that will serve up map tiles.
         * This url should have the following placeholders in them:
         * `{x}`, `{y}` and `{z}`
         *
         * `{z}` represents the current zoom level
         *
         * @example
         * ```
         * mapUrl="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
         * ```
         */
        mapUrl: string,
    
        /**
         * A static image to use instead of a map layout.
         * If you are using a static image, specify `mapUrl` as an empty string.
         *
         * The static image consists of a url for the image and a width and height of the image.
         * Note that the width and height values  be relative - just that the ratio should be accurate.
         *
         * @example
         * ```
         * staticImage={{url:'https://myserver/floor-plan.png',width:200,height:400}}
         * ```
         */
        staticImage?: IStaticImage,
    
        /**
         * Where the map is centered.
         */
        center?: { position: IMarker, renderMarker?: boolean },
    
        /**
         * A list of markers to render.
         * Each marker has a `latitude` `longitude` and `data` field.
         * The `data` field can store arbitrary data.
         */
        markers?: IMarker[],
    
        /**
         * This handler gets called whenever a marker is clicked on.
         * The first parameter represents the marker element that was clicked on.
         * The second parameter represents the data associated with the marker
         */
        onMarkerClick?: (el: any, data: any) => void
    
        /**
         * regions to show on map
         */
        regions?: IRegion[],
        /**
         * this handler will get called when a region is clicked
         *
         */
        onRegionClick?: (event: any, data: any) => void,
    
    
    
        /**
         * If you want to overlay a heatmap -  assign this object with some valid value
         */
        heatmap?:IHeatmapConfiguration
    
        /**
         * The default zoom level to show on the map
         */
        zoom?: number,
        /**
         * max zoom level.
         * optional. default is 19
         */
        maxZoom?: number,
        /**
         * min zoom level.
         * optional. default is -19
         */
        minZoom?: number,
        /**
         * zoom on scroll
         * default is false
         */
        zoomOnScroll?: boolean
        /**
         * this handler will get called when the map is clicked
         */
        onClick?: (event: LeafletMouseEvent) => void,
    
        onZoomEnd?: (event: LeafletEvent) => void
        onDragEnd?: (event: DragEndEvent) => void
    }
    /**
     * A map widget that can show a pannable/zoomable map with markers
     * @export
     *
     */
    export const MapComponent : React.FunctionComponent<IMapComponentProps>;
        
    interface IWizardProps {
        /**
         * A list of steps within the wizard.
         */
        steps: IWizardStep[];
    
        /**
         * What title should be shown on the 'next' button when we reach the last screen
         */
        completionTitle?: string;
    
        /**
         * This callback is run whenever they hit the final 'completion' action on the last step. It should be async so we can show a loading animation on the button
         */
        onComplete?: () => Promise<void>;
    }
    /**
     * A wizard-style interface to guide users through a journey.
     * You can conditionally skip steps and validate steps before proceeding.
     * @export
     */
    export const Wizard : React.FunctionComponent<IWizardProps>;
        
    interface IDateRangePickerProps {
        title: string,
        /**
         * start date of the range. Either a Date object or an ISO8601 string representation of a date
         */
        startDate: string | Date,
        /**
         * end date of the range. Either a Date object or an ISO8601 string representation of a date
         */
        endDate: string | Date,
        /**
         * Callback that gets executed whenever a date range is selected/changed in the date picker
         */
        onChange: (newStartDate: Date, newEndDate: Date) => void,
        /**
         * Called when the calendar popup is closed
         */
        closeOnSelect?: boolean,
        /**
         * Set to true to prevent a user from typing in a date
         */
        disableInput?: boolean,
        /**
        * Additional options to control behavior
        */
        options?: {
            /**
             * The minimum selectable date. Either a Date object an an ISO8601 date string
             */
            minDate?: string | Date,
    
            /**
             * The maximum selectable date. Either a Date object an an ISO8601 date string
             */
            maxDate?: string | Date,
    
            /**
             * If set to `true`, you cannot select a weekend date
             */
            disableWeekEnds?: boolean,
    
            /**
             * An array of specific dates that the user cannot select
             */
            disableDates?: Array<Date | String>
        }
    }
    /**
     *
     * @export
     *
     * This component is used to select a date range.
     *
     * @example
     * ```
     *  <DateRangePicker
     *      startDate={startDate}
     *      endDate={endDate}
     *      closeOnSelect
     *      onChange={(newStart, newEnd) => { setStartDate(newStart); setEndDate(newEnd) }}
     *  />
     * ```
     *
     */
    export const DateRangePicker : React.FunctionComponent<IDateRangePickerProps>;
        
    interface ITimeRangePickerProps {
        title: string
        /**
         * Start time . Either a Date object or an time string (Ex: 01:10:00 pm)
         */
        startTime: string | Date,
        /**
        * End time . Either a Date object or an time string (Ex: 01:10:00 pm)
        */
        endTime: string | Date,
        /**
        * Callback that gets executed whenever a time range is selected/changed in the time picker
        */
        onChange: (start: Date, end: Date) => void,
        /**
       * Set to true to prevent a user from typing in a time
       */
        disableInput?: boolean
    }
    /**
     *
     * @export
     *
     * This component is used to select a time range.
     *
     * @example
     * ```
     *  <TimeRangePicker
     *      startTime={startDate}
     *      endTime={endDate}
     *      onChange={(s, e) => { setStartDate(s); setEndDate(e) }}
     *  />
     * ```
     */
    export const TimeRangePicker : React.FunctionComponent<ITimeRangePickerProps>;
        
    interface IDateTimePickerProps {
        title: string,
        /**
        * The currently selected datetime. Either a Date object or an ISO8601 string representation of a date
        */
        datetime: string | Date,
        /**
         * Callback that gets executed whenever a datetime is selected/changed in the datetime picker
         */
        onChange: (date: Date) => void,
        /**
        * Set to true to prevent a user from typing in a datetime
        */
        disableInput?: boolean
    
        /**
        * Additional options to control behavior
        */
        options?: {
            /**
             * The minimum selectable date. Either a Date object an an ISO8601 date string
             */
            minDate?: string | Date,
    
            /**
             * The maximum selectable date. Either a Date object an an ISO8601 date string
             */
            maxDate?: string | Date,
    
            /**
             * If set to `true`, you cannot select a weekend date
             */
            disableWeekEnds?: boolean,
    
            /**
             * An array of specific dates that the user cannot select
             */
            disableDates?: Array<Date | String>
        }
    }
    /**
     *
     * @export
     *
     * This component is used to select a datetime.
     *
     * @example
     * ```
     *  <DateTimePicker
     *      datetime={date}
     *      onChange={(date) => { setDate(date); }}
     *  />
     * ```
     */
    export const DateTimePicker : React.FunctionComponent<IDateTimePickerProps>;
        
    interface ITrendChartProps {
        /**
         * The series to plot. More than one can be visualized.
         */
        data: ITrendSeries[],
    
        /**
         * Use this to render a custom tooltip that will appear when the user hovers over a data point.
         * The data being hovered over is passed as a parameter.
         *
         * @example
         * onShowTooltip={(data)=><div>{`Temperature: ${data.temp}`}</div>}
         */
        onShowTooltip?: (data: any) => JSX.Element
    
        /**
         * Called whenever a data point is clicked on. The data point being clicked on is passed as a parameter to the function
         */
        onClick?: (data: any) => JSX.Element
    }
    /**
     * A component to show time series based trend or line visualizations
     * @export
     *
     *
     * @example
     * ```
     *  const TrendData: ITrendSeries[] = [
     *      {
     *          unit: "A",
     *          lineColor: "#ff7300",
                data: [
                    { time: "2020/07/20", value: 200 },
                    { time: "2020/08/20", value: 100 },
                    { time: "2020/09/20", value: 50 },
                    { time: "2020/10/20", value: 300 },
                    { time: "2020/11/20", value: 700 },
                    { time: "2020/12/20", value: 90 }
                ],
                type: "line"
            },
            {
                unit: "B",
                lineColor: "#413ea0",
                fillColor: "#8884d8",
                data: [
                    { time: "2014/06/21", value: 50 },
                    { time: "2020/07/20", value: 50 },
                    { time: "2020/08/20", value: 30 },
                    { time: "2020/09/20", value: 90 },
                    { time: "2020/10/20", value: 300 },
                    { time: "2020/11/20", value: 100 },
                    { time: "2020/12/20", value: 90 }
                ],
                type: "area"
            }
        ]
     *
     *  <TrendChartComponent
     *      data={TrendData}
     *  />
     * ```
     */
    export const TrendChartComponent : React.FunctionComponent<ITrendChartProps>;
        
    interface IConfirmButtonProps {
        /**
         * The caption for the button
         */
        title: string,
    
        /**
         * The url of an icon to show on the button
         */
        icon?: string,
    
        /**
         * Any extra css classes to add to the button
         */
        className?: string,
    
        /**
         * The callback that gets invoked when the confirm button is clicked
         */
        onConfirm: () => Promise<any>,
        /**
         * The callback that gets invoked when the cancel button is clicked
         */
        onCancel: () => void,
    
        /**
         * Set this to `true` to show the button in its 'loading...' state.
         * In this state, an animation will be shown indicating that work is going on and the user will not be able to click the button
         */
        loading?: boolean,
    
        /**
         * The caption to show on the button when its in loading state
         */
        loadingTitle?: string,
        active?: boolean,
        disabled?: boolean
    }
    /**
     * This is a confirm button component.
     * @export
     *
     * @example
     * ```
     *  <ConfirmButton
     *      title="Delete Item"
     *      loading={buttonLoading}
     *      onConfirm={async () => {return executeAction("model", "action", {})}}
     *      onCancel={() => {alert("Canceled")}}
     *  />
     * ```
     */
    export const ConfirmButton : React.FunctionComponent<IConfirmButtonProps>;
        
    interface IDynamicSelectProps {
        /**
         * List of options to render.
         * This a function that will generate the array of objects.
         * pagination will be supported.
         * The function expects 2 parameters - max and last and returns a promise that will resolve to the list of objects. max specifies the maximum number of items to be returned.
         */
        options: IDynamicSelectDataFunction,
        /**
         * selected option label
         */
        selected: string,
        /**
         * Callback that gets executed whenever a option is selected/changed
         */
        onChange: (value: any) => void,
        /**
         * placeholder text
         */
        placeholder?: string,
        /**
         * Any extra css classes to add to the button
         */
        className?: string,
        /**
         * set to valid state if true
         */
        isValid?: boolean,
        /**
         * page size for pagination
         */
        pageSize?: number,
        /**
         * A function that will be responsible for rendering each individual option of the list.
         * It is common to return  `ItemCard` component from here.
         *
         * @example
         *
         * ```
         * renderItem={(option,key)=><div>{option.label}</div>}
         * ```
         *
         * @example
         * ```
         * renderItem={(option,key)=><ItemCard data={item} titleField='label' />}
         * ```
         */
        renderOption?: (item: any, key: number) => JSX.Element,
        /**
         * name of the field to display
         */
        labelField: string,
        /**
         * number of milliseconds to delay send the request on change query
         * default is 500
         *
         */
        timeout?: number,
        type?: "search-box" | "select-box",
        /**
         * show hide end of content message
         */
        showEndOfContent?: boolean
    }
    /**
     *
     * @export
     *
     * This component is used to create a select box with pagination (infinite scrolling) & search/filter options.
     * Support keyboard interactions
     *  - Arrow Keys (up & down) - navigate through options list
     *  - Enter Key - Select current highlighted option
     *  - Escape Key - Exit select mode & discard changes
     * @example
     * ```
     *  <DynamicSelect
     *      selected={selected}
     *      options={(max: number, pageToken: string, args?: any) => getOptions(max, pageToken, args)}
     *      onChange={(value) => { setSelected(value)}}
     *      placeholder=" -- select --"
     *      labelField="label"
     *      timeout={500}
     *  />
     * ```
     *
     */
    export const DynamicSelect : React.FunctionComponent<IDynamicSelectProps>;
        /**
     * @export
     * Dropdown button props
     */
    interface IDropDownButtonProps {
        /**
         * The content to show inside the Dropdown
         * @example
         *
         * ```
         * content={() => <div>Dropdown Content</div>}
         * ```
         */
        content: () => JSX.Element,
    
        /**
         * Where the dropdown should be placed relative to the element it is being displayed for
         * default is right
         */
        position?: IDropDownButtonPosition,
        /**
         * If this is true dropdown will show on mouse over & hide n mouse out
         * If this is false dropdown ill show on click
         */
        showOnHover?: boolean
    
        className?: string
    
        /**
         * Dropdown button basic example
         *
         * @example
         *
         * ```
         *  <DropDownButton
         *      content={() => <div>This is dropdown content</div>}
         *  >
         *      <button className="btn showcase" >Click to Show the dropdown</button>
         *  </DropDownButton>
         * ```
         *
         * Dropdown button example with options
         * @example
         *
         * ```
         *  <DropDownButton
         *      content={() => <div>This is dropdown content</div>}
         *      position="left"
         *      showOnHover
         *  >
         *      <button className="btn showcase" >Click to Show the dropdown</button>
         *  </DropDownButton>
         * ```
         */
    
    
    }
    /**
     * This component wraps another component and shows a tooltip for the component it is wrapping, whenever the user moves the mouse over it.
     * @export
     */
    export const DropDownButton : React.FunctionComponent<IDropDownButtonProps>;
        
    interface IHSListProps {
        /**
         * Array of items
         */
        items: any[],
        /**
         * render method for an item given above
         */
        renderItem: (item: any, key: number) => JSX.Element
        /**
         * number of items to scroll when click on controller buttons
         */
        scrollStep?: number
        /**
         * additional css class names
         */
        className?: string
    }
    /**
     * This widget will create a horizontal scroll-able list
     *
     * @example
     * ```
     *  <HorizontalScrollList
     *      items={[...Array(15).keys()]}
     *      renderItem={(item, key) => {
     *      return (<div className="item-thumbnail">
     *              {key}
     *          </div>)
     *      }}
     *  />
     * ```
     * @export
     */
    export const HorizontalScrollList : React.FunctionComponent<IHSListProps>;
        
    interface ILinkButtonWidgetProps {
        /**
         * link url
         */
        link: string,
        /**
         * target for link
         * default is _self
         */
        target?: "_self" | "_blank" | "_parent"
        /**
         * icon to show
         */
        icon: string,
        /**
         * label for link
         */
        label: string
    }
    /**
     * This widget will give a simple widget with configurable option to create a link button
     *
     * @example
     * ```
     *  <LinkButtonWidget
     *      link="https://google.com"
     *      target="_blank"
     *      icon="path to your icon"
     *      label="Go to Google"
     *  />
     * ```
     * @export
     */
    export const LinkButtonWidget : React.FunctionComponent<ILinkButtonWidgetProps>;
        /**
     * @export
     * Options that can be passed to a date picker field
     */
    interface IGaugeProps {
        /**
         * min value of the gauge
         */
        min: number;
        /**
         * max value of the gauge
         */
        max: number;
        /**
         * value of the gauge
         */
        value: number;
    
        /**
         * colors array.
         * color: name of the color.
         * stopAt: length of color distribution.
         *
         * default is blue, green, yellow, red colors at equal length
         */
        colors?: Array<{ color: string, stopAt: number }>;
        /**
         * label
         * no default value
         */
        label?: () => JSX.Element,
        /**
         * if true show legend.
         * default is false
         */
        legend?: boolean,
        /**
         * color of the ticks.
         * default is white
         */
        tickColor?: string,
        /**
         * class name(s) for additional styling
         */
        className?: string,
        /**
         * additional inline styles
         */
        styles?: React.CSSProperties
    
        /**
         * if true show gradient colors
         * default is false
         */
        gradient?: boolean,
        /**
         * thickness of the gauge
         * This value is defend on the radius
         * default is radius * 0.11
         * max value is radius * 0.25
         *
         * if you pass a higher value than the max value, max value will be used
         */
        thickness?: number,
        /**
         * thickness of the large ticks
         * default is 4
         * min value is 1
         * max value is 6
         *
         * if the given value is higher than the max value, max values will be used
         */
        largeTick?: number,
        /**
         * thickness of the small ticks
         * default is 1
         * min values is 1
         * max values is 3
         *
         * if the given values is higher than the max value, max values will be used
         */
        smallTick?: number
    }
    /**
     *
     * @export
     *
     * This component is used to create a radial gauge.
     *
     * ## Demo
     * Find a [Demo](https://lucy-uxp.github.io/dev/showcase.html#radial-gauge) here
     *
     *
     * @example
     * ```
     *  <RadialGauge
     *      value={10}
     *      min={0}
     *      max={100}
     *  />
     * ```
     *
     * @example
     * ```
     *  <RadialGauge
     *      value={10}
     *      min={0}
     *      max={100}
     *      label={() => <>Equipment Heat</>}
     *      legend={true}
     *      gradient={true}
     *      thickness={20}
     *      largeTick={5}
     *      smallTick={2}
     *      colors={[
     *          {color: 'cyan', stopAt: 12.5},
     *          {color: 'green', stopAt: 70},
     *          {color: 'orange', stopAt: 87.5},
     *          {color: 'red', stopAt: 100},
     *      ]}
     *
     *  />
     * ```
     */
    export const RadialGauge : React.FunctionComponent<IGaugeProps>;
        /**
     * @export
     *
     */
    interface IColorPickerProps {
        /**
         *  default color
        */
        color: string,
        /**
         * callback on select a color
         */
        onChange: (color: string) => void,
        /**
         * picker position.  default is left
         */
        position?: IColorPickerPosition,
        /**
         * class name for additional styles
         */
        className?: string,
        /**
         * close the picker on select a color
         * default is true
         */
        closeOnSelect?: boolean,
        /**
         * change display format
         */
        displayFormat?: IColorTypes
        /**
         * change return format
         */
        returnFormat?: IColorTypes
    }
    /**
     *
     * @export
     * Color picker input field
     */
    export const ColorPicker : React.FunctionComponent<IColorPickerProps>;
        export const useToast:ToastHook;    export const useResizeEffect:ResizeEffectHook;    export const useMessageBus:MessageBusHook;    export const useFields:FieldsHook;    export const useUpdateWidgetProps:IUseUpdateWidgetProps;    export const useEffectWithPolling:IUseEffectWithPolling;
}
