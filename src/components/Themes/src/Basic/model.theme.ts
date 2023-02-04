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

export type TModelTheme = {

    displayModusType: DisplayModusTypes;
    primaryColor: string;
}

export interface IModelTheme {

    displayModusType: DisplayModusTypes;
    primaryColor: string;
}

export default class ModelTheme {

    displayModus: DisplayModusTypes;
    primaryColor: string;

    constructor() {

        this.displayModus = DisplayModusTypes.DARK;
        this.primaryColor = '#000';
    }
}
