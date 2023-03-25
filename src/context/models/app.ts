
import { IThemeConfig } from '../../components/Themes/models/theme';
export interface language {
    name: string;
    code: string;
}

export default class ContextModelApp {

    theme: IThemeConfig;

    availableThemes: IThemeConfig[] | []

    language: language;

    constructor() {

        this.theme = {
            name: String(process.env.REACT_APP_ROOT_DEFAULT_THEME),
            version: '1.0.0',
            path: process.env.REACT_APP_ROOT_PATH_THEMES + '/' + process.env.REACT_APP_ROOT_DEFAULT_THEME,
            active: false
        };
        this.language = {
            name: 'english',
            code: 'en-US'
        }

        this.availableThemes = [];
    }

    set themeName(name: string) {
        this.theme.name = name;
    }

    get context() {
        return this
    }
}
