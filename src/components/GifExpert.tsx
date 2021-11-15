import React, { useState } from 'react';
import AddCategory from './AddCategory';

const GifExpert: React.FC = () => {
    const initialCategories = ['One punch', 'Dragon Ball', 'Cats'];

    const [categories, setCategories] = useState<string[]>(initialCategories);

    console.log(categories);
    return (
        <>
            <h1>Gif Expert App</h1>
            <hr />
            <AddCategory setCategories={setCategories} />
            <ol>
                {categories.map((category, idx) => (
                    <li key={`${category}-${idx}`}>{category}</li>
                ))}
            </ol>
        </>
    );
};

export default GifExpert;
