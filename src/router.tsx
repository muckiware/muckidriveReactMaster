/**
 * @package     muckiwareDrive
 * @subpackage  ReactMaster
 *
 * @copyright Copyright (C) 2021-2023 by muckiware. All rights reserved.
 * @license MIT
 * @link https://github.com/muckiware/muckidriveReactMaster
 */

import { createBrowserRouter } from "react-router-dom";

import ThemeLoader from './themeLoader';
import Dashboard from "./components/Dashboard/dashborad";

const router = createBrowserRouter([
    {
        path: process.env.REACT_APP_ROUTE_MAIN_PATH,
        element: <ThemeLoader />,
        children: [
            { index: true, element: <Dashboard/> }
        ]
    }
]);

export default router;
