import { createGlobalStyle } from 'styled-components';

interface ThemeProps {
    background: string;
    text: string;
}

interface GlobalThemeProps {
    theme: ThemeProps;
}

const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }: GlobalThemeProps) => theme.background};
        color: ${({ theme }: GlobalThemeProps) => theme.text};
        font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
        transition: all 0.50s linear;
        margin: 0;
        padding: 30px;
    };
    button {
        margin: 0;
        padding: 0;
        border: none
    };
    hr {
        background: ${({ theme }: GlobalThemeProps) => theme.text};
    };
    ol {
        padding-left: 20px;
        padding-right: 20px;
    }
`;

export default GlobalStyles;
