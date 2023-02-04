import React, { 
    useEffect,
    useState,
    lazy,
    useCallback,
    useContext
 } from 'react';

import ModelLoading from './models/loading';
import ModelTheme, { IThemeConfig } from './models/theme';
import Loading from './src/Basic/components/loading/loading';
import Context from '../../context/context';

const ThemeLoader: React.FC = (props) => {

    const [Layout, setLayout] = useState<React.FC<ModelTheme>>();
    const [themeName, setThemeName] = useState<string>('');

    const getThemeSetups = useCallback(async(themeName: string) => {

        let themeConfig: IThemeConfig = await import(`./src/${themeName}/theme.json`);
        return {
            "name": themeConfig.name,
            "version": themeConfig.version,
            "path": themeConfig.path
        }
    },[]);

    useEffect(() => {

        if (themeName === '') {
            setThemeName('Basic');
        }

        if (themeName !== '') {

            getThemeSetups(themeName).catch(console.error).then((themeConfig: any) => {
    
                const currentLayout: React.FC<ModelTheme> = lazy(() => import(`${themeConfig.path}`));
                setLayout(currentLayout);
            });
        }

    }, [getThemeSetups, themeName]);

    if(Layout) {
        return React.createElement(Layout, null, `Hello`);
    }

    return React.createElement(Loading, new ModelLoading('Theme'));
}

export default ThemeLoader;