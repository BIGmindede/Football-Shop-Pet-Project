import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Cookies from 'universal-cookie'
import classes from './CartGood.module.css'

const CartGood = ({item, index, deletion}) => {
    
    const dispatch= useDispatch()

    const [curr, setCurr] = useState(item)

    const inc_in_cart = () => {
        
        const new_item = JSON.parse(localStorage['cart']).find(itm => itm.id === item.id)
        localStorage['cart'] = JSON.stringify([...JSON.parse(localStorage['cart']).filter(itm => itm.id !== new_item.id), 
        {
            ...new_item,
            quantity: new_item.quantity + 1
        }])
        setCurr({...curr, quantity: curr.quantity + 1})
    }

    const dec_in_cart = async () => {
        
        setCurr({...curr, quantity: curr.quantity - 1})
        const new_item = JSON.parse(localStorage['cart']).find(itm => itm.id === item.id)
        if (new_item.quantity === 1) {
            localStorage['cart'] = JSON.stringify([...JSON.parse(localStorage['cart']).filter(itm => itm.id !== new_item.id)])
            await axios.post(`http://localhost:8080/cart/delete/${item.id}`, item,{
                headers: {
                    "Authorization": "Bearer " + cookies.get("token")
                }
            })
            deletion(JSON.parse(localStorage.getItem('cart')))
        } else {
            localStorage['cart'] = JSON.stringify([...JSON.parse(localStorage['cart']).filter(itm => itm.id !== new_item.id), 
            {
                ...new_item,
                quantity: new_item.quantity - 1
            }])
        }
    }

    const del_in_cart = async () => {
        localStorage['cart'] = JSON.stringify([...JSON.parse(localStorage['cart']).filter(itm => itm.id !== item.id)])
        await axios.post(`http://localhost:8080/cart/delete/${item.id}`, item,{
            headers: {
                "Authorization": "Bearer " + cookies.get("token")
            }
        })
        deletion(JSON.parse(localStorage.getItem('cart')))
    }

    const cookies = new Cookies()

    const [img, setImg] = useState(null)

    useEffect(() => {
        const fetchImage = async () => {
          try {
            const response = await fetch(`http://localhost:8080/image/${item.images[0].url.split('/')[2]}`, 
                {
                headers: {
                Authorization: "Bearer " + cookies.get("token")
                }
            });
            if (response.ok) {
              const blob = await response.blob();
              const objectUrl = URL.createObjectURL(blob);
              setImg(objectUrl);
            } else {
              console.log('Ошибка при получении файла', response);
            }
          } catch (error) {
            console.log('Ошибка при выполнении запроса:', error);
          }
        };
    
        fetchImage();
      }, [item.images])

  return (
    <div className={classes.card}>
        <div>
            <img src={img} alt="Image" />
            <div>
                <h3>{index + 1}. {curr.name}</h3>
                <p>Описание: {curr.description}</p>
                <p>Цена: {curr.price}</p>
                <div className={classes.buttons}>
                    <button onClick={inc_in_cart}>+</button>
                    <span>{curr .quantity}</span>
                    <button onClick={dec_in_cart}>-</button>
                    <button onClick={del_in_cart}>Удалить из корзины</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartGood