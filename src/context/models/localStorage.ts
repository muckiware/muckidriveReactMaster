/**
 * @package     muckiwareDrive
 * @subpackage  ReactMaster
 *
 * @copyright Copyright (C) 2021-2023 by muckiware. All rights reserved.
 * @license MIT
 * @link https://github.com/muckiware/muckidriveReactMaster
 */

import { IThemeConfig } from '../../components/Themes';
export default class ContextModelLocalStoreage {

    themeName: string;

    constructor() {
        this.themeName = String(process.env.REACT_APP_ROOT_DEFAULT_THEME);
    }
    
    setThemeName(themeName: string) {

        this.themeName = themeName;
        localStorage.setItem(
            String(process.env.REACT_APP_LOCAL_STOREAGE_THEME_NAME),
            this.themeName
        );
    }

    getThemeName(): string {

        const themeName = localStorage.getItem(String(process.env.REACT_APP_LOCAL_STOREAGE_THEME_NAME));
        if(!themeName || themeName === '') {

            localStorage.setItem(
                String(process.env.REACT_APP_LOCAL_STOREAGE_THEME_NAME),
                this.themeName
            );
            return this.themeName
        }

        return themeName;
    }
}

export const setCurrentTheme = (theme: IThemeConfig) => {

    localStorage.setItem(
        String(process.env.REACT_APP_LOCAL_STOREAGE_THEME),
        JSON.stringify(theme)
    );
}

export const getCurrentTheme = (): IThemeConfig | null => {

    let currentTheme: string | null = localStorage.getItem(String(process.env.REACT_APP_LOCAL_STOREAGE_THEME))
    if(currentTheme) {
        return JSON.parse(
            currentTheme
        );
    }

    return null;
}

export const setAvailableThemes = (themes: any) => {

    localStorage.setItem(
        String(process.env.REACT_APP_LOCAL_STOREAGE_AVAILABLE_THEMES),
        JSON.stringify(themes)
    );
}
