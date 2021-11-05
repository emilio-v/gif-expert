import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './theme/GlobalStyle';
import { lightTheme, darkTheme } from './theme/Themes';

import Toggle from './theme/Toggle';

interface AppProps {}

type currentTheme = 'light' | 'dark';

const App: React.FC<AppProps> = () => {
    const [theme, setTheme] = useState<currentTheme>('light');
    const themeToggler = () => {
        theme === 'light' ? setTheme('dark') : setTheme('light');
    };

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <>
                <GlobalStyle />
                <Toggle theme={theme} toggleTheme={themeToggler} />
            </>
        </ThemeProvider>
    );
};

export default App;
