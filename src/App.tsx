import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './theme/GlobalStyles';
import { lightTheme, darkTheme } from './theme/Themes';
import { useThemeToggler } from './hooks/useThemeToggler';

import Toggle from './theme/Toggle';
import GifExpert from './components/GifExpert';

interface AppProps {}

const App: React.FC<AppProps> = () => {
    const [theme, themeToggler, mountedComponent] = useThemeToggler();

    const themeMode = theme === 'light' ? lightTheme : darkTheme;

    if (!mountedComponent) return <div />;

    return (
        <ThemeProvider theme={themeMode}>
            <>
                <GlobalStyles />
                <GifExpert />
                <Toggle theme={theme} toggleTheme={themeToggler} />
            </>
        </ThemeProvider>
    );
};

export default App;
