interface GifProps {
    id: string;
    title: string;
    url: string;
}

const getGifs = async (category: string): Promise<GifProps[]> => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
        category
    )}&limit=10&api_key=UjM3hWDYdlCy3GmLfh9PSj5bA3gadGis`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((gif: any) => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized_medium.url,
        };
    });

    return gifs;
};

export default getGifs;
