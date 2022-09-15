import React, { useContext, useEffect, useState } from 'react';
import 'antd/dist/antd.min.css'
import DataContext from '../context/Ecom';
import SearchFilter from './SearchFilter';

const Page = () => {

    const { FilterData, CartData, setData, setCartData, setFilterData, Data } = useContext(DataContext)

    const increment = (id) => {
        const FData = Data.map((val) => {
            if (val.id === id && val.Qty < 5) {
                const v = val.Qty + 1
                return { ...val, Qty: v }
            }
            return val
        })
        setFilterData(FData)
        setData(FData)
    }

    const decrement = (id) => {
        const FData = Data.map((val) => {
            if (val.id === id && val.Qty > 1) {
                const v = val.Qty - 1
                return { ...val, Qty: v }
            }
            return val
        })
        setFilterData(FData)
        setData(FData)
    }

    const AddToCart = (record) => {
        const obj = {
            id: record.id,
            img: record.img,
            Qty: record.Qty,
            name: record.name,
            price: record.price,
            size: record.size
        }
        if (CartData.length === 0) {
            setCartData([obj])
        } else {
            const newarray = CartData.filter(o => o.id !== record.id)
            setCartData([...newarray, obj])
        }
        if(record.Qty===0){
            const newarray = CartData.filter(o => o.id !== record.id)
            setCartData(newarray)
        }

    }

    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [start, setstart] = useState(0);
    const itemsPerPage = 5
    useEffect(() => {
        console.log("st",start)
        const end = start + itemsPerPage;
        setCurrentItems(FilterData?.slice(start, end));
        setPageCount(Math.ceil(FilterData?.length / itemsPerPage));
    }, [start, itemsPerPage, FilterData]);

    const handlePageClick = (event) => {
         console.log(event)
        const newStart = (event * itemsPerPage)%FilterData?.length
        setstart(newStart);
    };

    const arr = [];
    for (let i = 0; i < pageCount; i++) {
        arr[i] = i + 1
    }
    const handelprev = () => {
        if (start >= itemsPerPage) {
            setstart((start) => start - itemsPerPage)
        }
    }
    const handelnext = () => {
        if (start < FilterData?.length-itemsPerPage) {
            setstart((start) => start + itemsPerPage)
        }
    }
    return (
        <>
            <SearchFilter />
            <table className='pageTable' >
                <thead>
                    <th >img</th>
                    <th>name</th>
                    <th>price</th>
                    <th>color</th>
                    <th>stock</th>
                    <th>Action</th>
                </thead>
                <tbody>
                    {
                        currentItems && currentItems.map((val, key) => (
                            <tr id={key}>
                                <td ><img height="100px" src={val.img} alt="loading" /> </td>
                                <td>{val.name}</td>
                                <td>{val.price}</td>
                                <td>{val.color}</td>
                                <td>{val.stock}</td>
                                {<td>
                                    <div style={{ display: "flex" }}>
                                        <button onClick={() => increment(val.id)}>+</button>
                                        <p>{val.Qty}</p>
                                        <button onClick={() => decrement(val.id)}>-</button>
                                        <input type='checkbox'  onChange={(e) => { AddToCart(val) }} />
                                    </div>
                                </td>}

                            </tr>
                        ))
                    }
                </tbody>
            </table>
            {
                <div className='pagination'>
                    <button onClick={() => handelprev()}>prev</button>
                    {
                        arr.map((val, key) => (
                            <button id={key} onClick={() => handlePageClick(val-1)}>{val}</button>
                        ))
                    }
                    <button onClick={() => handelnext()}>next</button>
                </div>
            }
          
        </>
    )
};
export default Page
