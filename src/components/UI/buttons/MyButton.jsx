import React from 'react'
import cl from './MyButton.module.scss'

export default function MyButton({children, ...props}) {
  return (
    <button {...props} className={cl.myButton}>
        {children}
    </button>
  )
}
