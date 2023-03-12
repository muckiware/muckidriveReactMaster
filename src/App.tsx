import React, { useState, useEffect, useContext } from 'react';

import ThemeLoader from './loader';
// import ContextModelApp from './context/models/app';
// import ContextModelLocalStoreage from './context/models/localStorage';
import AppContetxt from './appContext';

function App() {

    // const LocalStoreage = new ContextModelLocalStoreage();

    const context = useContext(AppContetxt);
    console.log('context in app.tsx', context);

    // const [context, setContext] = useState<ContextModelApp>(new ContextModelApp());
    
    // console.log('context -1-', context);
    // console.log('set theme name in root app', LocalStoreage.getThemeName());
    // context.themeName = LocalStoreage.getThemeName();
    // console.log('context -2-', context);

    // console.log('context.context', context.context)
    return (
        <div className="App">
            <ThemeLoader/>
        </div>
    );
}

export default App;
