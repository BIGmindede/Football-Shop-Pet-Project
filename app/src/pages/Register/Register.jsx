import React, { useRef, useState } from 'react'
import classes from './Register.module.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'universal-cookie'

const Register = () => {
  
  const name = useRef()
  const email = useRef()
  const password = useRef()

  const navigate = useNavigate()
  const cookies = new Cookies()

  const auth = async (event) => {
    event.preventDefault()
    try {
      const {data} = await axios.post("http://localhost:8080/register", {
        name: name.current.value,
        email: email.current.value,
        password: password.current.value
      })
      cookies.set("token", data.token)
      navigate('/')
    } catch (e) {
      console.log(e.message)
    }
  }

  return (
    <div className={classes.wrap}>
      <div className={classes.form}>
        <h1>Регистрация</h1>
        <input ref={name} type="text" placeholder='Name'/>
        <input ref={email} type="email" placeholder='E-mail'/>
        <input ref={password} type="password" placeholder='Password'/>
        <button onClick={(event => {auth(event)})}>Войти</button>
        <Link to="/login">Уже есть аккаунт?</Link>
        <Link to="/">Вернуться на главную</Link>
      </div>
    </div>
  )
}

export default Register