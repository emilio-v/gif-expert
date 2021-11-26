import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import GifGridItem from './GifGridItem';
import getGifs from '../helpers/getGifs';

interface GifGridProps {
    category: string;
}

interface GifProps {
    id: string;
    title: string;
    url: string;
}

const CardGrid = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const GifGrid: React.FC<GifGridProps> = ({ category }) => {
    const [images, setImages] = useState<GifProps[]>([]);

    useEffect(() => {
        getGifs(category).then(setImages);
    }, [category]);

    return (
        <>
            <h3>{category}</h3>
            <CardGrid>
                {images.map(img => (
                    <GifGridItem key={img.id} {...img} />
                ))}
            </CardGrid>
        </>
    );
};

export default GifGrid;
