import React from 'react'
import Annotations from './components/Annotations'
import Records from './components/Records'
import Text from './components/Text'
import "./main.css"

const Main = () => {
    return (
        <div className='main'>

            <Records />
            <Text />
            <Annotations />

        </div>
    )
}

export default Main