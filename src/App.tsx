import React, { useState, useEffect } from 'react';

import ThemeLoader from './components/Themes/loader';

function App() {

    const [context, setContext] = useState<any>();

    useEffect(() => {

        setContext({
            language: {
                name: 'english',
                code: 'en-US'
            },
            theme: {
                name: 'Basic'
            }
        });

    }, []);

    return (
        <div className="App">
            <ThemeLoader/>
        </div>
    );
}

export default App;
