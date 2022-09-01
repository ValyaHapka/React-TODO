import React, { useEffect, useRef } from 'react'
import cl from './MyInput.module.css'

export default function MyInput(props) {
  const ref = useRef('TODO')
  useEffect(() => {
    ref.current.focus();
  }, [])
  return (
    <input {...props} className={cl.myInput} ref={ref}/>
  )
}