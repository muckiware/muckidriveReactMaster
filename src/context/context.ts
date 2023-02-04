import { createContext } from "react";

import { ThemeConfig } from '../components/Themes/models/theme';

export type ThemeContextType = "light" | "dark";

const Context = createContext<any>({
    theme: ThemeConfig
});

export default Context;