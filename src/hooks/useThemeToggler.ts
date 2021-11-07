import { useState, useEffect } from 'react';

type CurrentTheme = 'light' | 'dark';

export const useThemeToggler = (): [CurrentTheme, () => void, boolean] => {
    const [theme, setTheme] = useState<CurrentTheme>('light');
    const [mountedComponent, setMountedComponent] = useState<boolean>(false);

    const setMode = (mode: CurrentTheme) => {
        window.localStorage.setItem('theme', mode);
        setTheme(mode);
    };

    const themeToggler = () => {
        theme === 'light' ? setMode('dark') : setMode('light');
    };

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme && setTheme(localTheme as CurrentTheme);
        setMountedComponent(true);
    }, []);

    return [theme, themeToggler, mountedComponent];
};
