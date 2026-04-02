import { createContext, useState } from "react";

export const GraphContext = createContext();

const GraphContextProvider = ({ children }) => {

    const [Graph, setGraph] = useState([]);
    const [Loading, setLoading] = useState(true);


    return (
        <GraphContext.Provider value={{ Graph, setGraph, Loading, setLoading }}>
            {children}
        </GraphContext.Provider>
    )
}

export default GraphContextProvider
