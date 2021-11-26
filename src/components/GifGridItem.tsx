import React from 'react';
import styled from 'styled-components';
import colors from '../utils/colors';
import { capitalize } from '../utils/capitalize/capitalize';

interface GifGridItemProps {
    id: string;
    title: string;
    url: string;
}

const Card = styled.div`
    align-items: center;
    border: 1px solid ${colors.grayishBlue};
    border-radius: 6px;
    margin-bottom: 10px;
    margin-right: 10px;
    overflow: hidden;
`;

const Image = styled.img`
    max-height: 170px;
`;
const Title = styled.p`
    padding: 5px;
    text-align: center;
`;

const GifGridItem: React.FC<GifGridItemProps> = ({ id, title, url }) => {
    return (
        <Card>
            <Image src={url} alt={title} />
            <Title>{capitalize(title)}</Title>
        </Card>
    );
};

export default GifGridItem;
