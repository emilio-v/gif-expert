import { createGlobalStyle } from 'styled-components';

interface ThemeProps {
    body: string;
    text: string;
}

interface GlobalThemeProps {
    theme: ThemeProps;
}

const GlobalStyle = createGlobalStyle`
    body {
        background: ${({ theme }: GlobalThemeProps) => theme.body};
        color: ${({ theme }: GlobalThemeProps) => theme.text};
        font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
        transition: all 0.50s linear;
    }
`;

export default GlobalStyle;
