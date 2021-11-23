import React, { useEffect, useState } from 'react';
import GifGridItem from './GifGridItem';

interface GifGridProps {
    category: string;
}

interface GifProps {
    id: string;
    title: string;
    url: string;
}

const GifGrid: React.FC<GifGridProps> = ({ category }) => {
    const [images, setImages] = useState<GifProps[]>([]);

    useEffect(() => {
        getGifs();
    }, []);

    const getGifs = async () => {
        const url =
            'http://api.giphy.com/v1/gifs/search?q=Rick+and+Morty&limit=10&api_key=UjM3hWDYdlCy3GmLfh9PSj5bA3gadGis';
        const resp = await fetch(url);
        const { data } = await resp.json();

        const gifs = data.map((gif: any) => {
            return {
                id: gif.id,
                title: gif.title,
                url: gif.images?.downsized_medium.url,
            };
        });

        setImages(gifs);
    };

    return (
        <div>
            <h3>{category}</h3>
            {images.map(img => (
                <GifGridItem key={img.id} {...img} />
            ))}
        </div>
    );
};

export default GifGrid;
