
import ModelTheme, { IThemeConfig } from '../../components/Themes/models/theme';
export interface language {
    name: string;
    code: string;
}

export default class ContextModelApp {

    theme: IThemeConfig;

    language: language;

    constructor() {

        this.theme = {
            name: 'Basic',
            version: '1.0.0',
            path: './src/Basic/layout'
        };
        this.language = {
            name: 'english',
            code: 'en-US'
        }
    }
}
