import React, { useState } from 'react';
import AddCategory from './AddCategory';
import GifGrid from './GifGrid';

const GifExpert: React.FC = () => {
    const initialCategories = ['Cats'];

    const [categories, setCategories] = useState<string[]>(initialCategories);

    return (
        <>
            <h1>Gif Expert App</h1>
            <AddCategory setCategories={setCategories} />
            <hr />
            <ol>
                {categories.map((category, idx) => {
                    return <GifGrid key={`${category}-${idx}`} category={category} />;
                })}
            </ol>
        </>
    );
};

export default GifExpert;
