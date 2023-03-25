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

    /**
     * Name of the theme
     */
    name: string;

    /**
     * Version of the theme
     */
    version: string;

    /**
     * In which path is the theme
     */
    path: string;

    /**
     * Current status if the theme is active or not 
     */
    active: boolean;
}
