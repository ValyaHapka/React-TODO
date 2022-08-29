import React from 'react'
import cl from './MyCheckbox.module.css'

export default function MyCheckbox({type, ...props}) {
  return (
    <input {...props} type={'checkbox'} className={cl.myCheckbox}/>
  )
}