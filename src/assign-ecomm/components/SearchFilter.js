import { Button, Form, Input, Select } from 'antd';
import React, { useContext, useEffect, useState } from 'react'
import DataContext from '../context/Ecom';
import { useNavigate } from 'react-router-dom'

const SearchFilter = () => {
    const { Data, setFilterData, CartData, FilterData } = useContext(DataContext);
    const navigate = useNavigate();
    const { Search } = Input;

    const [typeVal, settypeVal] = useState("select");
    const [SizeVal, setSizeVal] = useState("select");
    const [searchvalue, setsearchvalue] = useState();
    const [message, setmessage] = useState(false);
    const [Type, setType] = useState(FilterData);


    function findInValues(arr, val) {
        const value = String(val).toLowerCase();
        return arr?.filter(o =>
            Object.entries(o).some(entry =>
                String(entry[1]).toLowerCase().includes(value)
            )
        );
    }

    const handelTypeFilter = (arr, val) => {
        settypeVal(val)
        const filter = arr?.filter(o => o.type.includes(val))
        setType(() => filter)
        setFilterData(() => filter)
    }
    const handelSizeFilter = (arr, val) => {
        setSizeVal(val)
        const sfilter = arr.filter(o => o.size.includes(val))
        setFilterData(() => sfilter)
    }


    const handelReset = (e) => {
        setmessage(false)
        setFilterData(Data)
        setType(Data)
        setsearchvalue("")
        settypeVal("select")
        setSizeVal("select")
    }
    const AddToCheckout = () => {
        return navigate('/cart')

    }
    // const handelSearch = (e) => {
    //     console.log(e)
    //     setsearchvalue(e);
    //     const value = String(e).toLowerCase();
    //     return FilterData?.filter(o =>
    //         Object.entries(o).some(entry =>
    //             String(entry[1]).toLowerCase().includes(value)
    //         )
    //     );
       
    // }

    useEffect(() => {
        const value = String(searchvalue).toLowerCase();
       const val=  FilterData?.filter(o =>
            Object.entries(o).some(entry =>
                String(entry[1]).toLowerCase().includes(value)
            )
        );
        setFilterData(()=>val)
        console.log(val);
        // handelSearch(searchvalue);
    }, [searchvalue]);

    console.log(FilterData)
    return (
        <div id="sf">
            <Form className='searchfilter'>
                <div className='selectop'>
                    <Form.Item  >
                        <Select placeholder='select' value={typeVal} onChange={(e) => handelTypeFilter(Data, e)} >
                            <Select.Option value="hoodie" >hoodie</Select.Option>
                            <Select.Option value="shirt" >shirt</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item  >
                        <Select placeholder='size' value={SizeVal} onChange={(e) => { handelSizeFilter(Type, e) }}>
                            <Select.Option value="s">s</Select.Option>
                            <Select.Option value="m">m</Select.Option>
                            <Select.Option value="l">l</Select.Option>
                        </Select>
                    </Form.Item>
                </div>
                <Form.Item label="Search" className='search'>
                    <div style={{ display: "flex" }}>
                        <Search
                            placeholder="search your todo here"
                            enterButton="Search"
                            size="middle"
                            width="200px"
                            onChange={(e) => setsearchvalue(e.target.value)}
                            // onSearch={(value) => {
                            //     setFilterData(findInValues(Data, searchvalue))
                            //     setmessage(true)
                            // }}
                            value={searchvalue}
                            onClick={() => console.log("first")}
                        />
                        <Button onClick={() => handelReset()}> reset</Button>
                    </div>
                </Form.Item>
                <div className='addtoc'>
                    <button disabled={CartData.length === 0 ? true : false} onClick={() => { AddToCheckout() }}>Add to cart</button>
                </div>
            </Form>
            {message ?
                <div>
                    <h3 style={{ textAlign: "center", color: "red" }}>{FilterData.length === 0 ? "no Match found" : ""}</h3>
                </div> : ""}
        </div>
    )
}

export default SearchFilter
