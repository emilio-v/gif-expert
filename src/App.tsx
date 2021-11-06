import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './theme/GlobalStyles';
import { lightTheme, darkTheme } from './theme/Themes';
import { useThemeToggler } from './hooks/useThemeToggler';

import Toggle from './theme/Toggle';

interface AppProps {}

const App: React.FC<AppProps> = () => {
    const [theme, themeToggler] = useThemeToggler();

    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    return (
        <ThemeProvider theme={themeMode}>
            <>
                <GlobalStyles />
                <Toggle theme={theme} toggleTheme={themeToggler} />
            </>
        </ThemeProvider>
    );
};

export default App;
