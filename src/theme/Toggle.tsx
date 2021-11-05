import React from 'react';
import styled from 'styled-components';

interface ToggleProps {
    theme: string;
    toggleTheme: () => void;
}

const Button = styled.button`
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;
    padding: 8px;
`;

const Toggle: React.FC<ToggleProps> = ({ theme, toggleTheme }) => {
    return <Button onClick={toggleTheme}>Switch theme</Button>;
};

export default Toggle;
