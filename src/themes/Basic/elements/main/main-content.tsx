/**
 * @package     muckiwareDrive
 * @subpackage  ReactMaster
 *
 * @copyright Copyright (C) 2021-2023 by muckiware. All rights reserved.
 * @license MIT
 * @link https://github.com/muckiware/muckidriveReactMaster
 */

import React from 'react';
import { Outlet } from 'react-router-dom';

const MainContent = () => {

    return (
        <React.Fragment>
            <main>
                <Outlet />
            </main>
        </React.Fragment>
    )
}

export default MainContent;