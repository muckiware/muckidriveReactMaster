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
import appContext from '../../../../../../context/context';
// import themes from '../../..';

const ThemeSwitcher: React.FC<{}> = (props) => {

    const [themeItems, setThemeItems] = useState<any>();
    const context = useContext(appContext);

    const getThemesList = useCallback(async() => {

        const themesList: any = [];
        const themes: string[] = await (await import('../../../themePaths.json')).themes;

        themes.map(async(theme) => {

            const themeConfig = await import(`../../../${theme}/theme.json`);
            themesList.push(themeConfig);
        })

        return themesList;
    },[]);

    useEffect(() => {

        getThemesList().catch(console.error).then((themesList: any) => {
            setThemeItems(themesList);
        });

    }, [getThemesList, themeItems]);

    if(themeItems) {

        return (
            <React.Fragment>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-themes">
                        Select Theme ({themeItems.length})
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        {themeItems.map((themeItem: any) => (
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

export default ThemeSwitcher;