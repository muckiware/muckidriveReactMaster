export enum DisplayModusTypes {

    LIGHT = 'light',
    DARK = 'dark'
};

export enum TextTypes {

    TEXT_PRIMAARY = 'text-primary',
    TEXT_SECONDARY = 'text-secondary',
    TEXT_SUCCESS = 'text-success',
    TEXT_DANGER = 'text-danger',
    TEXT_WARN = 'text-warning',
    TEXT_INFO = 'text-info',
    TEXT_LIGHT = 'text-light',
    TEXT_DARK = 'text-dark'
}

export interface IThemeConfig {
    name: string;
    version: string;
    path: string;
}

export class ThemeConfig {

    name: string;
    version: string;
    path: string;
    constructor() {

        this.name = '';
        this.version = '0.0.0.';
        this.path = './'
    }
}

export default class ModelTheme {

    displayModus: DisplayModusTypes;
    primaryColor: string;

    constructor() {

        this.displayModus = DisplayModusTypes.DARK;
        this.primaryColor = '#000';
    }
}
