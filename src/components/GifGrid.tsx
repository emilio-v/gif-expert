import React from 'react';
import styled from 'styled-components';
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

interface GifGridProps {
    category: string;
}

// interface GifProps {
//     id: string;
//     title: string;
//     url: string;
// }

const CardGrid = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

const GifGrid: React.FC<GifGridProps> = ({ category }) => {
    const { data, loading } = useFetchGifs({ category });

    return (
        <>
            <h3 className="animate__animated animate__rubberBand">{category}</h3>
            {loading && <p className="animate__animated animate__flash">Loading...</p>}
            <CardGrid>
                {data.map(img => (
                    <GifGridItem key={img.id} {...img} />
                ))}
            </CardGrid>
        </>
    );
};

export default GifGrid;
