/**
 * @package     muckiwareDrive
 * @subpackage  ReactMaster
 *
 * @copyright Copyright (C) 2021-2023 by muckiware. All rights reserved.
 * @license MIT
 * @link https://github.com/muckiware/muckidriveReactMaster
 */

import React, { useContext } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import AppContetxt, { TAppContext } from '../../../../appContext';

const ThemeSwitcher: React.FC<{}> = (props) => {

    const currentContext: TAppContext = useContext(AppContetxt);
    const setTheme = (value: any) => {
        currentContext.setCurrentTheme(value);
    }

    return (
        <React.Fragment>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-themes">
                    {currentContext.theme.name} ({currentContext.availableThemes.length})
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    { currentContext.availableThemes.map((themeItem: any) => (
                        <Dropdown.Item 
                            key={themeItem.name} 
                            eventKey={themeItem.name}
                            onClick={() => setTheme(themeItem)}
                        >
                            {themeItem.name}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
        </React.Fragment>
    )
}

export default ThemeSwitcher;