import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCats } from '../../redux/slices/categoryList'
import classes from './CatsList.module.css'
import { useNavigate } from 'react-router-dom'

const CatsList = () => {
  
    const cats = useSelector(selectCats)
    const navigate = useNavigate()

    return (
    <div className={classes.wrap}>
        <h1>Категории</h1>
        <div className={classes.list}>
          {cats.map((cat, index) => 
              <div className={classes.category} key={index} onClick={() => {
                navigate(`/goods/?cat=${cat}`)
                }}>
                  {cat}
              </div>
          )}
         </div>
    </div>
  )
}

export default CatsList