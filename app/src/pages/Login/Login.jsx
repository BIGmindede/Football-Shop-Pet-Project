import React, { useRef, useState } from 'react'
import classes from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import axios from 'axios'

const Login = () => {
  
  const email = useRef()
  const password = useRef()
  
  const navigate = useNavigate()
  const cookies = new Cookies()
  
  const auth = async (event) => {
    event.preventDefault()
    try {
      const {data} = await axios.post("http://localhost:8080/login", {
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
        <h1>Вход</h1>
        <input ref={email} type="email" placeholder='E-mail'/>
        <input ref={password} type="password" placeholder='Password'/>
        <button onClick={event => {auth(event)}}>Войти</button>
        <Link to="/register">Еще не зарегестрированы?</Link>
        <Link to="/">Вернуться на главную</Link>
      </div>
    </div>
  )
}

export default Login