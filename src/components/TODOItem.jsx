import React from 'react'
import MyButton from './UI/buttons/MyButton'
import MyCheckbox from './UI/inputs/MyCheckbox'

export default function TODOItem({done, toggle, setDone,  ...props}) {

  return (
    <div 
      className={props.todo.done ? "item done" : "item"}
      onChange={() => toggle(props.todo.id)}  
    >
      <MyCheckbox/>
      <h2>{props.todo.value}</h2>
      <h2>{props.todo.time}</h2>
      <MyButton onClick={() => props.remove(props.todo)}>
        <span className='delete-btn'>Delete</span>
      </MyButton>
    </div>
  )
}
