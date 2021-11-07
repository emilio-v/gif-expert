import React from 'react';
import styled from 'styled-components';
import { Moon } from '@styled-icons/boxicons-solid/Moon';
import { Sun } from '@styled-icons/boxicons-solid/Sun';

import IconsFadeEffect from '../components/IconsFadeEffect';

interface ToggleProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

const Button = styled.button`
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    border-radius: 50%;
    cursor: pointer;
    padding: 8px;
    width: 40px;
    height: 40px;
    position: fixed;
    bottom: 25px;
    right: 25px;
`;

const Toggle: React.FC<ToggleProps> = ({ theme, toggleTheme }) => {
    return (
        <Button onClick={toggleTheme}>
            <IconsFadeEffect
                initialIcon={Moon}
                secondIcon={Sun}
                firstIconActive={theme === 'light'}
            />
        </Button>
    );
};

export default Toggle;
