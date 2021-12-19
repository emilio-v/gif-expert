import { useEffect, useState } from 'react';
import getGifs from '../helpers/getGifs';

interface GifProps {
    id: string;
    title: string;
    url: string;
}

interface StateProps {
    data: GifProps[];
    loading: boolean;
}

export const useFetchGifs = ({ category }: { category: string }): StateProps => {
    const [state, setState] = useState<StateProps>({
        data: [],
        loading: true,
    });

    useEffect(() => {
        setState({ ...state, loading: true });
        getGifs(category).then(gifs => {
            console.log(gifs);
            setState({ data: gifs, loading: false });
        });
    }, [category]);

    return state;
};
