import { createContext, useState } from 'react';

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => { },
    removeFavorite: (id) => { },
});

const FavoritesContextProvider = ({ children }) => {

    const [ids, setIds] = useState([]);

    const addFavorite = (id) => {
        setIds(pre => [...pre, id]);
    }

    const removeFavorite = (id) => {
        setIds(ids.filter((favId) => favId !== id));
    }

    const value = {
        ids,
        addFavorite,
        removeFavorite
    }

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider;