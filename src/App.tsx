/**
 * @package     muckiwareDrive
 * @subpackage  ReactMaster
 *
 * @copyright Copyright (C) 2021-2023 by muckiware. All rights reserved.
 * @license MIT
 * @link https://github.com/muckiware/muckidriveReactMaster
 */

import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router'

function App() {

    return (
        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
