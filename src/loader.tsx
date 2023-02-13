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
import ModelTheme, { IThemeConfig } from './components/Themes/models/theme';
import Loading from './themes/Basic/components/loading/loading';
import appContext from './context/context';

const ThemeLoader: React.FC = (props) => {

    const [Layout, setLayout] = useState<React.FC<ModelTheme>>();
    const context = useContext(appContext);

    const getThemeSetups = useCallback(async() => {

        let themeConfig: IThemeConfig = await import(`${context.theme.path}/theme.json`);

        return {
            "name": themeConfig.name,
            "version": themeConfig.version,
            "path": themeConfig.path
        }
    },[context]);

    useEffect(() => {

        getThemeSetups().catch(console.error).then((themeConfig: any) => {

            context.theme.name = themeConfig.name
            context.theme.version = themeConfig.version
            context.theme.path = themeConfig.path

            console.log('themeConfig', themeConfig)
            const currentLayout: React.FC<ModelTheme> = lazy(() => import(`./${themeConfig.path}/layout`));
            setLayout(currentLayout);
        });

    }, [getThemeSetups, context]);

    if(Layout) {
        return React.createElement(Layout, null, `Hello`);
    }

    return React.createElement(Loading, new ModelLoading('Theme'));
}

export default ThemeLoader;