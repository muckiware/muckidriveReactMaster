/**
 * @package     muckiwareDrive
 * @subpackage  ReactMaster
 *
 * @copyright Copyright (C) 2021-2023 by muckiware. All rights reserved.
 * @license MIT
 * @link https://github.com/muckiware/muckidriveReactMaster
 */

import React, { useEffect, useCallback, useState, useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import appContext from '../../../../context/context';

const ThemeSwitcher: React.FC<{}> = (props) => {

    const [availableTheme, setAvailableTheme] = useState<[]>();
    const [themes, setThemes] = useState<string[]>();
    const context = useContext(appContext);

    // const getThemesList = useCallback(async() => {

    //     const themesList: any = [];
    //     const themes: string[] = await (await import('../../../themePaths.json')).themes;

    //     themes.map(async(theme) => {

    //         const themeConfig = await import(`../../../${theme}/theme.json`);
    //         themesList.push(themeConfig);
    //     })

    //     return themesList;
    // },[]);

    const getThemesList = useCallback(async() => {

        const themes: string[] = await (await import('../../../themePaths.json')).themes;
        return themes;
    },[]);

    const getThemeItems = useCallback(async(themePath: string) => {

        const themeItems: any = await import(`../../../../${themePath}/theme.json`);
        return themeItems;
    },[]);

    useEffect(() => {

        getThemesList().catch(console.error).then((themes: any) => {
            setThemes(themes);
        });

    }, [getThemesList]);

    useEffect(() => {

        let themesList: any = [];
        if (themes) {

            console.log('context.theme.name', context.theme);

            themes.map(async(themePath: string) => {

                console.log('themePath', themePath);
                if(context.theme.path !== themePath) {
                    themesList.push(await getThemeItems(themePath));
                } else {
                    //console.log('context.theme.name', context.theme);
                    // console.log('themeName', themeName);
                }
            });
        }

        setAvailableTheme(themesList);

    }, [getThemeItems, themes, context]);


    if(availableTheme) {

        return (
            <React.Fragment>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-themes">
                        Select Theme ({availableTheme.length})
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        { availableTheme.map((themeItem: any) => (
                            <Dropdown.Item 
                                key={themeItem.name} 
                                eventKey={themeItem.name}
                            >
                                {themeItem.name}
                            </Dropdown.Item>
                        ))}
                    </Dropdown.Menu>
                </Dropdown>
            </React.Fragment>
        )
    }

    return (

        <React.Fragment>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-themes">
                    Loading theme list...
                </Dropdown.Toggle>
                <Dropdown.Menu></Dropdown.Menu>
            </Dropdown>
        </React.Fragment>
    )
}

const selectItems = (themeItems: any, context: any) => {

    return (
        <React.Fragment>
            { themeItems.map((themeItem: any) => (
                <Dropdown.Item 
                    key={themeItem.name} 
                    eventKey={themeItem.name}
                >
                    {themeItem.name}
                </Dropdown.Item>
            ))}
        </React.Fragment>
    );
}

export default ThemeSwitcher;