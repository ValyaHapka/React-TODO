import React from 'react'

export default function MyCheckbox({type, ...props}) {
  return (
    <input {...props} type={'checkbox'}/>
  )
}