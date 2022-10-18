import { createContext, useEffect, useState } from 'react';

import { Records } from "./Records";

// export const TodoContext = createContext(null);

const DataContext = createContext({});

export const Annotation = [
    {
        text: "hello",
        category: "PERSON"
    },
    {
        text: "columns",
        category: "ORG"
    },
    {
        text: "add",
        category: "PERSON"
    },
    {
        text: "each",
        category: "ORG"
    },

]

export const DataProvider = ({ children }) => {
    const [Data, setData] = useState();
    const [Filter, setFilter] = useState(() => "");
    const [sideRecord1, setsideRecord1] = useState(true);
    const [sideRecord2, setsideRecord2] = useState(true);
    const [AData, setAData] = useState(Annotation);
    // setAData(Annotation)
    const [CartData, setCartData] = useState([]);
    const [CartDataRecord, setCartDataRecord] = useState(null);

    return (
        <DataContext.Provider value={{
            Data, setData,
            Filter, setFilter,
            AData, setAData,
            CartData, setCartData,
            sideRecord2, setsideRecord2,
            sideRecord1, setsideRecord1
        }}>
            {children}
        </DataContext.Provider >
    )
}

export default DataContext;