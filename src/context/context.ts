import { createContext } from "react";

import ContextModelApp from './models/app'

const appContext = createContext<ContextModelApp>(new ContextModelApp());

export default appContext;