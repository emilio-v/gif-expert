import React, { useState, FormEvent } from 'react';

interface AddCategoryProps {
    setCategories: React.Dispatch<React.SetStateAction<string[]>>;
}

const AddCategory: React.FC<AddCategoryProps> = ({ setCategories }) => {
    const [newCategory, setNewCategory] = useState<string>('');

    const onChange = (value: string) => {
        setNewCategory(value);
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (newCategory.trim().length > 2) {
            setCategories(categories => [newCategory, ...categories]);
            setNewCategory('');
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                onChange={({ target }) => {
                    onChange(target.value);
                }}
            />
        </form>
    );
};

export default AddCategory;
