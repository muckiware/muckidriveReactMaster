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

    const context = useContext(appContext);

    return (
        <React.Fragment>
            <Dropdown>
                <Dropdown.Toggle id="dropdown-themes">
                    {context.theme.name} ({context.availableThemes.length})
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    { context.availableThemes.map((themeItem: any) => (
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

export default ThemeSwitcher;