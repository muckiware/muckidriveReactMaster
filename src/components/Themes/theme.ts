/**
 * @package     muckiwareDrive
 * @subpackage  ReactMaster
 *
 * @copyright Copyright (C) 2021-2023 by muckiware. All rights reserved.
 * @license MIT
 * @link https://github.com/muckiware/muckidriveReactMaster
 */

import { IThemeConfig } from './models/theme';
export default class Theme {

    protected currentThemePath: string

    constructor(currentThemePath: string) {
        this.currentThemePath = currentThemePath;
    }

    async getThemeConfig(themePath: string): Promise<IThemeConfig> {

        //Workaround for ./ paths as root configuration
        return await import(`../../${themePath.replace('./', '')}/theme.json`);
    }

    async getThemeList(): Promise<string[]> {
        return await (await import(`../../themes/themePaths.json`)).themes;
    }

    async getAvailableThemes(allThemes: string[]): Promise<IThemeConfig[]> {

        let themesList: IThemeConfig[] = [];
        if (allThemes) {

            allThemes.map(async(themePath: string) => {

                if(this.currentThemePath !== themePath) {
                    themesList.push(await this.getThemeConfig(themePath));
                }
            });
        }

        return themesList;
    }
}
