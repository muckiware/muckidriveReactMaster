/**
 * @package     muckiwareDrive
 * @subpackage  ReactMaster
 *
 * @copyright Copyright (C) 2021-2023 by muckiware. All rights reserved.
 * @license MIT
 * @link https://github.com/muckiware/muckidriveReactMaster
 */

import React, { 
    useEffect,
    useState,
    lazy,
    useCallback,
    useContext
 } from 'react';

import ModelLoading from './components/Themes/models/loading';
import Theme from './components/Themes/theme';
import ModelTheme, { IThemeConfig } from './components/Themes';
import Loading from './themes/Basic/components/loading/loading';
import appContext from './context/context';

const ThemeLoader: React.FC = (props: any) => {

    const [Layout, setLayout] = useState<React.FC<ModelTheme.default>>();
    // const [availableThemes, setAvailableThemes] = useState<IThemeConfig[]>([]);
    const context = useContext(appContext);

    const getThemeSetups = useCallback(async() => {
        return await import(`${context.theme.path}/theme.json`);
    },[context]);

    useEffect(() => {

        getThemeSetups().catch(console.error).then((themeConfig: IThemeConfig) => {

            context.theme.name = themeConfig.name
            context.theme.version = themeConfig.version
            context.theme.path = themeConfig.path

            const currentLayout: React.FC<ModelTheme.default> = lazy(() => import(`${themeConfig.path}/layout`));
            setLayout(currentLayout);
        });

    }, [getThemeSetups, context]);

    useEffect(() => {

        async function fetchThemes() {

            try {
                const theme: Theme = new Theme(context.theme.path);
                const themesList: string[] = await theme.getThemeList();
                const availableThemes: IThemeConfig[] = await theme.getAvailableThemes(themesList);
                context.availableThemes = availableThemes;
                // setAvailableThemes(availableThemes);
            } catch (error) {
              console.error(error);
            }
          }
          fetchThemes();

    }, [context]);

    if(Layout) {
        return React.createElement(Layout, null, `Hello`);
    }

    return React.createElement(Loading, new ModelLoading('Theme'));
}

export default ThemeLoader;