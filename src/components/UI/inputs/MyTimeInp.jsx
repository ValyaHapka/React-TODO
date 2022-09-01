import React from 'react'
import cl from './MyInput.module.scss'

export default function MyTime(props) {
  return (
    <input {...props} className={cl.myInput} type={'time'}/>
  )
}