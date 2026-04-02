import { createContext, useState } from "react";

export const collectionsContext = createContext();

const CollectionContextProvider = ({ children }) => {

    const [Collections, setCollections] = useState([]);
    const [Loading, setLoading] = useState(true);


    return (
        <collectionsContext.Provider value={{ Collections, setCollections, Loading, setLoading }}>
            {children}
        </collectionsContext.Provider>
    )
}

export default CollectionContextProvider
