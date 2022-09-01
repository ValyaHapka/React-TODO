import React from 'react'
import cl from './MyInput.module.css'

export default function MyTime(props) {
  return (
    <input {...props} className={cl.myInput} type={'time'}/>
  )
}