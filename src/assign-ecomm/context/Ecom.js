import { createContext, useEffect, useState } from 'react';

import { ShopData } from "../data/data";

// export const TodoContext = createContext(null);

const DataContext = createContext({});


export const DataProvider = ({ children }) => {
    const [Data, setData] = useState(ShopData);
    const [Width, setWidth] = useState(window.innerWidth);
    const [FilterData, setFilterData] = useState(Data);
    const [CartData, setCartData] = useState([]);
    const [CartDataRecord, setCartDataRecord] = useState(null);
    const [added, setadded] = useState(true);
    const w = window.innerWidth
    useEffect(() => {
        setWidth(window.innerWidth);
    }, [w]);

    return (
        <DataContext.Provider value={{
            Data, setData,
            FilterData, setFilterData,
            Width, setWidth,
            CartData, setCartData,
            CartDataRecord, setCartDataRecord,
            added, setadded
        }}>
            {children}
        </DataContext.Provider >
    )
}

export default DataContext;