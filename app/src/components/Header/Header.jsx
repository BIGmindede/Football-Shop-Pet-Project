import React, { useEffect, useState } from 'react'
import classes from './Header.module.css'
import { Link } from 'react-router-dom'
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa'
import Cookies from 'universal-cookie'

const Header = () => {

  const cookies = new Cookies()

  const [authed, setAuthed] = useState(cookies.get("token"))

  return (
    <header className={classes.header}>
      <Link to="/">MainPage</Link>
      <div className={classes.ulinks}>
        {authed
         ? <div className={classes.cart}>
            <Link to="/cart"><FaShoppingCart/></Link>
          </div>
         : <></>
        } 
        <div className={classes.profile}>
          <FaUserAlt/>
          {authed
            ? <div>
              <Link to="profile">Профиль</Link>
              <span onClick={() => {
                  cookies.remove('token')
                  setAuthed(cookies.get("token"))
                }}>Выйти</span>
            </div>
            : <div>
              <Link to="/register">Регистрация</Link>
              <Link to="/login">Войти</Link>
            </div>
          }
        </div>
      </div>
    </header>
  )
}

export default Header