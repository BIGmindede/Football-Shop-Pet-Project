import React, { useEffect, useState } from 'react'
import classes from './CartGoods.module.css'
import CartGood from '../CartGood/CartGood'

const CartGoods = () => {
  
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')))

    return (
        <div className={classes.wrap}>
            <div className={classes.cart}>
                {cart.map((item, index) => 
                    <CartGood deletion={setCart} item={item} index={index}/>
                )}
            </div>
        </div>
  )
}

export default CartGoods