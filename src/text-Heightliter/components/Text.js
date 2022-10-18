import React, { useContext, useEffect, useState } from 'react'
import "../main.css"
import Records, { data as Data } from "./Records"
// import Highlighter from "react-highlight-words";
import Highlighter from "react-highlight-words"
import DataContext from './Context';

const Text = () => {
    const { Data, setFilter, Filter, AData } = useContext(DataContext)
    const [StoreWords, setStoreWords] = useState([]);
    const handeFlilter = (val) => {
        const fData = AData?.filter((key) => {
            return key.category == val
        })
        const Fcategory = fData?.map((val, key) => val.text);
        setFilter(() => Fcategory);

    }

    const StoreFilteredWords = () => {

        let Words = []
        Filter && Filter.forEach(element => {
            Words = [...Words, Data?.match(element)]

        });
        // // const Words = Data.match(/columns+/g)

        Words.forEach(element => {
            if (element != null) {
                const a = element[0]
                console.log(a)
                StoreWords.push(a)

            }

        });
        localStorage.setItem("words1", StoreWords);

        // w = [...w, Words && Words[0][0]];
        console.log(Words)
        console.log(StoreWords)
    }


    useEffect(() => {
        localStorage.setItem('Words', JSON.stringify(StoreWords));
    }, [StoreWords]);

    useEffect(() => {
        StoreFilteredWords()
    }, [Filter]);


    return (
        <div className='text'>
            <div className='filterTags'>
                <h1>
                    <button onClick={() => handeFlilter("PERSON")}>PERSON</button>
                    <button onClick={() => handeFlilter("ORG")}>ORG</button>
                </h1>
            </div>
            <div className='textHeiglighter'>
                <Highlighter
                    highlightClassName="YourHighlightClass"
                    searchWords={Filter ? Filter : []}
                    autoEscape={true}
                    textToHighlight={Data ? Data : "select any record "}
                />
            </div>


        </div>
    )
}

export default Text