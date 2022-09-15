import React from 'react'
import Cart from './components/Cart'
import Page from './components/Page'
import { DataProvider } from './context/Ecom'
import './Ecom.css'
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Thanku from './components/Thanku'
const Ecom = () => {
    return (
        <div>
            <DataProvider >
                <Router>
                    <Routes>
                        <Route excat path="/" element={<Page />} />
                        <Route excat path="/cart" element={<Cart />} />
                        <Route excat path="/thanku" element={<Thanku />} />
                    </Routes>
                </Router>



            </DataProvider>

        </div>
    )
}

export default Ecom
