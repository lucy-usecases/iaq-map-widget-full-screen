
import BundleConfig from '../bundle.json';

// window interface
interface ILayout {
    w?: number,
    h?: number,
    isDraggable?: boolean,
    isResizable?: boolean,
    maxH?: number,
    maxW?: number,
    minH?: number,
    minW?: number,
    static?: boolean
}

interface IContainer {
    background?: string
}

interface IWidgetPropConfig {
    name: string,
    type: string,
    label: string
    attr?: { [key: string]: any }
}

interface IWidgetConfig {
    layout?: ILayout
    // container?: IContainer,
    props?: IWidgetPropConfig[]
}

interface IWidgetObject {
    id: string,
    name: string,
    widget: any,
    configs?: IWidgetConfig
    isNew?: string,
    description?: string,
    icon?: string,
    vendor?: string,
    tags?: string[],
    defaultProps?: {
        [key: string]: any
    }
}
type SidebarLinkClick = () => void;

interface ISidebarLinkProps {
    onClose: () => void;
}
interface ISidebarLink {
    link?: string,
    click?: SidebarLinkClick
    target?: string,
    icon?: string,
    label: string,
    id: string,
    component?: React.FunctionComponent<ISidebarLinkProps> | React.Component<ISidebarLinkProps, {}>,
}

interface IRenderUIItemProps {
    id: string,
    component: any,
    uiProps?: any
}
declare global {
    interface Window {
        registerWidget(config: IWidgetObject): void;
        registerLink(config: ISidebarLink): void;
        registerUI(config: IRenderUIItemProps): void;
    }
}


interface IWidgetManager {
    loadFromMarketPlace: boolean;
    url: string;
}

interface IPartialContextProvider {
    root: string,
    sidebarContent: ISidebarLink[],
    scriptFiles: string[],
    widgetManager: IWidgetManager;
    lucyUrl: string;
    apiKey: string;
    userKey: string;
}

/**
 * Options for executing Lucy Actions
 */
interface ILucyActionExecutionOptions {
    /** Set this to true to parse the data as JSON and return it */
    json?: boolean;
}

export interface IContextProvider extends IPartialContextProvider {
    executeAction:(model:string, action:string, parameters:any,options?:ILucyActionExecutionOptions) => Promise<any>;
    fireEvent: (eventID: string) => Promise<void>;
    hasAppRole: (roles: string | string[]) => Promise<boolean>;
}

export function registerWidget(_widget: IWidgetObject) {
    let widget = Object.assign({}, _widget, { id: (BundleConfig.id + '/widget/' + _widget.id).toLowerCase() });
    if (!window.registerWidget) {
        console.error('This code is not being run within the context of UXP');
        return;
    }
    window.registerWidget(widget);
}
export function registerLink(_link: ISidebarLink) {
    let link = Object.assign({}, _link, { id: (BundleConfig.id + '/sidebarlink/' + _link.id).toLowerCase() });
    if (!window.registerLink) {
        console.error('This is not is not being run within the UXP context');
        return;
    }
    console.log('registering link....', link.id);
    window.registerLink(link);
}

export function registerUI(_ui: IRenderUIItemProps) {
    let ui = Object.assign({}, _ui, { id: (BundleConfig.id + '/ui/' + _ui.id).toLowerCase() });
    if (!window.registerUI) {
        console.error('This is not is not being run within the UXP context');
        return;
    }
    console.log('registering link....', ui.id);
    window.registerUI(ui);
}