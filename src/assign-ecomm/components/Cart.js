import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DataContext from '../context/Ecom'

const Cart = () => {
  const {  CartData, setCartData } = useContext(DataContext)
  const navigate = useNavigate();



  const [Total, setTotal] = useState(0);
  const increment = (id) => {

    const FData = CartData.map((val) => {
      if (val.id === id && val.Qty < 5) {
        const v = val.Qty + 1
        return { ...val, Qty: v }
      }
      return val
    })
    console.log(FData)
    setCartData(FData)
    CalcTotal()

  }

  const decrement = (id) => {
    const FData = CartData.map((val) => {
      if (val.id === id && val.Qty > 0) {
        const v = val.Qty - 1
        return { ...val, Qty: v }
      }
      return val
    })
    console.log(FData)
    setCartData(FData)
    CalcTotal()
  }
  const CalcTotal = () => {
    let v = 0;
    CartData.map((val) => (
      v += val.Qty * val.price
    ))
    setTotal(v)
  }
  useEffect(() => {
    CalcTotal()
  }, [CartData]);

  const handelRemove = (id) => {
    const newcart = CartData.filter((key) => key.id !== id)
    setCartData(newcart)
  }
  return (
    <div className='cartpage'>
      <table className='carttable'>
        <th >img</th>
        <th>name</th>
        <th>price</th>
        <th>Qty</th>
        <th>Sub Total</th>
        <tbody>
          {
            CartData?.map((val, key) => (

               <tr id={key + 1}>
                <td ><button onClick={() => handelRemove(val.id)}>remove</button><img height="100px" src={val.img} alt="loading" /> </td>
                <td>{val.name}</td>
                <td>{val.price}</td>
                <td>{val.Qty}</td>
                <td>{val.price * val.Qty}</td>
                <td>
                  <div style={{ display: "flex" }}>
                    <button onClick={() => increment(val.id)}>+</button>
                    <p>{val.Qty}</p>
                    <button onClick={() => decrement(val.id)}>-</button>
                  </div>
                </td>

              </tr>
            ))
          }
        </tbody>
      </table>
      <div className='cart'>
        <h1>Cart Page</h1>
        <h1>Total:{Total}</h1>
        <button disabled={Total === 0 ? true : false} onClick={() => navigate('/thanku')}>Checkout</button>
      </div>
    </div>
  )
}

export default Cart