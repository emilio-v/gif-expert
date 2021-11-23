import React from 'react';

interface GifGridItemProps {
    id: string;
    title: string;
    url: string;
}

const GifGridItem: React.FC<GifGridItemProps> = ({ id, title, url }) => {
    return (
        <div>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    );
};

export default GifGridItem;
