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
    useContext,
    Suspense
 } from 'react';

import ModelLoading from './components/Themes/models/loading';
import { IThemeConfig } from './components/Themes';
import Loading from './themes/Basic/components/loading/loading';
import appContext, { TAppContext } from './appContext';

const ThemeLoader: React.FC = (props: any) => {

    const [Layout, setLayout] = useState<React.FC<any>>();
    const newcontext: TAppContext = useContext(appContext);

    const getThemeSetups = useCallback(async(path: string) => {
        return await import(`${path}`);
    },[]);

    useEffect(() => {

        if(newcontext.theme.path) {

            getThemeSetups(`${newcontext.theme.path}/theme.json`).catch(console.error).then((themeConfig: IThemeConfig) => {
                const currentLayout: React.FC<any> = lazy(() => import(`${themeConfig.path}/layout`));
                setLayout(currentLayout);
            });
        }

    }, [getThemeSetups, newcontext]);

    if(Layout) {
        return (
            <Suspense fallback={<p>loading...</p>}>
                <Layout/>
            </Suspense>
        );
    }

    return React.createElement(Loading, new ModelLoading('Theme'));
}

export default ThemeLoader;