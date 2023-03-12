import React, { useState, useEffect, useCallback } from "react";

// import ContextModelApp from './models/app';
import { IThemeConfig } from './components/Themes/models/theme';

export interface TAppContext {

    theme: IThemeConfig;
    availableThemes: IThemeConfig[];
    setCurrentTheme(theme: IThemeConfig): void;
    setAvailableThemes(themes: IThemeConfig[]): void;
}

const AppContetxt = React.createContext<TAppContext>({
    theme: {
        name: '',
        version: '',
        path: ''
    },
    availableThemes: [],
    setCurrentTheme: (theme: IThemeConfig) => {},
    setAvailableThemes: (themes: IThemeConfig[]) => {}
});

export const AppContetxtProvider: React.FC<any> = (props: any) => {

    const defaultThemePath: string = process.env.REACT_APP_ROOT_DEFAULT_THEME + '';
    const themesPathFile: string = process.env.REACT_APP_ROOT_THEMEPATHS_FILE + '';

    const [theme, setTheme] = useState<IThemeConfig>({
        name: '',
        version: '',
        path: ''
    },);
    const [themes, setThemes] = useState<IThemeConfig[]>([],);

    const getThemeSetup = useCallback(async(path: string) => {
        return await import(`${path}/theme.json`);
    },[]);

    const getThemeList = useCallback(async(fileName: string) => {
        return await (await import(`${fileName}.json`)).themes;
    }, []);

    useEffect(() => {

        async function fetchDefaultThemes() {

            try {
                const defaultTheme: IThemeConfig = await getThemeSetup(defaultThemePath);
                setCurrentTheme(defaultTheme);
                return defaultTheme
                
            } catch (error) {
              console.error(error);
            }
        }

        async function getAvailableThemes(allThemes: string[], defaultTheme: IThemeConfig): Promise<IThemeConfig[]> {

            let themesList: IThemeConfig[] = [];
            if (allThemes) {

                allThemes.map(async(themePath: string) => {
    
                    if(defaultTheme.path !== themePath) {
                        themesList.push(await getThemeSetup(themePath));
                    }
                });
            }

            return themesList;
        }

        async function fetchAvailableThemes(defaultTheme: any) {

            try {
                const themesList: string[] = await getThemeList(themesPathFile);
                const availableThemes: IThemeConfig[] = await getAvailableThemes(themesList, defaultTheme);
                setAvailableThemes(availableThemes)
            } catch (error) {
              console.error(error);
            }
        }

        fetchDefaultThemes().then((defaultTheme) => {
            fetchAvailableThemes(defaultTheme);
        });
    }, [getThemeSetup, getThemeList, themesPathFile, defaultThemePath]);


    const setCurrentTheme = (theme: IThemeConfig) => {
        setTheme(theme);
    }

    const setAvailableThemes = (themes: IThemeConfig[]) => {
        setThemes(themes);
    }

    return (
        <AppContetxt.Provider 
            value={{
                theme: theme,
                availableThemes: themes,
                setCurrentTheme: setCurrentTheme,
                setAvailableThemes: setAvailableThemes
            }}
        >
            {props.children}
        </AppContetxt.Provider>
    )
}

export default AppContetxt;