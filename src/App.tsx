import React, { useState, useEffect, useContext } from 'react';

import ThemeLoader from './themeLoader';
import AppContetxt from './appContext';

function App() {

    return (
        <div className="App">
            <ThemeLoader/>
        </div>
    );
}

export default App;
