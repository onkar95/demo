import React, { useContext } from 'react'
import "../main.css"
import DataContext from './Context'
import { slide as Menu } from 'react-burger-menu'

export const data = [
    {
        id: 1,
        text: "ere, we made sure that the App wrapper never exceeds specific width. We also centered it in the viewport and added the  For the ControlsBox children, we set the grid layout columns columns  with two columns, each of the same width. We also added a gapOn the left side there is a sidebar that contains a list of records which are hard Each record has a number and the text. Each record can how are you i am fine For the ControlsBox children, we set the grid layout with two columns, each of the same width. We also added a gap"
    },
    {
        id: 2,
        text: " For the ControlsBox children, we set the grid layout columns columns  with two columns, each of the same width. We also added a gapOn the left side there is a sidebar that contains a list of records which are hard Each record has a number and the text. Each record can how are you i am fine For the ControlsBox children, we set the grid layout with two columns, each of the same width. We also added a gap  "
    },
    {
        id: 3,
        text: "On the left side there is a sidebar that contains a list of records which are hard Each record has a number and the text. Each record can how are you i am fine For the ControlsBox children, we set the grid layout with two columns, each of the same width. We also added a gap "
    },
    {
        id: 4,
        text: "  Each record has a number and the text. Each record can how are you i am fine For the ControlsBox children, we set the grid layout with two columns, each of the same width. We also added a gap"
    },
    {
        id: 5,
        text: " For the ControlsBox children, we set the grid layout with two columns, each of the same width. We also added a gap  "
    },

]
const Records = () => {
    const { setData, sideRecord1, setsideRecord1 } = useContext(DataContext)

    const handelText = (a) => {
        setData(() => a);
    }

    const handelSideMenu = () => {

    }
    return (
        < >


            {
                sideRecord1 ?
                    <div className='records'>
                        <div className='hamburger'>
                            <h1>Records</h1>
                            <button className='hamburgerButton' onClick={() => setsideRecord1(prev => !prev)}>-</button>
                        </div>
                        <div>
                            {
                                data.map((val, key) => (
                                    <button id={key} className='RecordList' onClick={() => handelText(val.text)}>
                                        <h5>{val.text.substring(0, 30)}...</h5>
                                    </button>
                                ))
                            }
                        </div>
                    </div>
                    :
                    <div className='hamburger'>
                        <button className='hamburgerButton' onClick={() => setsideRecord1(prev => !prev)}>+</button>
                    </div>

            }
        </>
    )
}

export default Records