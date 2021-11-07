import React from 'react';
import styled from 'styled-components';
import { StyledIcon } from '@styled-icons/styled-icon';

interface IconsFadeEffectProps {
    initialIcon: StyledIcon;
    secondIcon: StyledIcon;
    firstIconActive: boolean;
}

interface StyledIconProp {
    active: boolean;
}

const Container = styled.div`
    position: relative;
`;

const StyledIconn = styled.div<StyledIconProp>`
    opacity: ${props => (props.active ? 1 : 0)};
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    z-index: ${props => (props.active ? 1 : 0)};
    transition: opacity 300ms ease-in-out; ;
`;

const IconsFadeEffect: React.FC<IconsFadeEffectProps> = ({
    initialIcon,
    secondIcon,
    firstIconActive,
}) => {
    return (
        <Container>
            <StyledIconn as={initialIcon} active={firstIconActive} />
            <StyledIconn as={secondIcon} active={!firstIconActive} />
        </Container>
    );
};

export default IconsFadeEffect;
