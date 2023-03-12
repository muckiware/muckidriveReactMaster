

export default class ContextModelLocalStoreage {

    themeName: string;

    constructor() {
        this.themeName = String(process.env.REACT_APP_ROOT_DEFAULT_THEME);
    }
    
    setThemeName(themeName: string) {

        this.themeName = themeName;
        localStorage.setItem(
            String(process.env.REACT_APP_LOCAL_STOREAGE_THEME_NAME),
            this.themeName
        );
    }

    getThemeName(): string {

        const themeName = localStorage.getItem(String(process.env.REACT_APP_LOCAL_STOREAGE_THEME_NAME));
        if(!themeName || themeName === '') {

            localStorage.setItem(
                String(process.env.REACT_APP_LOCAL_STOREAGE_THEME_NAME),
                this.themeName
            );
            return this.themeName
        }

        return themeName;
    }
}
