import React, { useState, useEffect } from 'react';

import ThemeLoader from './components/Themes/loader';
import ContextModelApp from './context/models/app';
import appContext from './context/context';

function App() {

    const [context, setContext] = useState<ContextModelApp>(new ContextModelApp());

    return (
        <div className="App">
            <appContext.Provider value={context}>
                <ThemeLoader/>
            </appContext.Provider>
        </div>
    );
}

export default App;
