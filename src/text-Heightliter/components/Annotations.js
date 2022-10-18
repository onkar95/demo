import React, { useContext, useEffect, useState } from 'react'
import DataContext from './Context'


const Annotations = () => {
    const { setData, sideRecord2, setsideRecord2, AData, setAData } = useContext(DataContext)
    const [AnnotationData, setAnnotationData] = useState(AData);
    const hadelDelete = (val) => {
        if (window.confirm("relly")) {
            const deleteD = AData?.filter((key) => {
                return key.text != val
            });
            setAData(() => deleteD)
        }
    }
    useEffect(() => {
        setAnnotationData(AData)
        // setAData()
    }, [AData]);
    return (
        <>
            {
                sideRecord2 ?
                    <div className='annotations'>
                        <div className='hamburger'>
                            <h1>Annotations</h1>
                            <button className='hamburgerButton' onClick={() => setsideRecord2(prev => !prev)}>-</button>
                        </div>
                        <div className='annotationsTable'>


                            {
                                AnnotationData && AnnotationData.map((val, key) => (
                                    <div id={key}>
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>{val.text}</td>
                                                    <td><h3>{val.category}</h3></td>
                                                    <td><button onClick={() => hadelDelete(val.text)}>-</button></td>
                                                </tr>
                                            </tbody>


                                        </table>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    :
                    <div className='closed'>
                        <button className='hamburgerButton' onClick={() => setsideRecord2(prev => !prev)}>+</button>
                    </div>

            }
        </>
    )
}

export default Annotations