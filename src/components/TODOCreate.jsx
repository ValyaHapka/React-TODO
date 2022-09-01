import React, { useState } from 'react'
import MyButton from './UI/buttons/MyButton'
import MyInput from './UI/inputs/MyInput'
import MyTime from './UI/inputs/MyTimeInp'


export default function TODOCreate({create}) {

  const [todo, setTodo] = useState({value: '', time: ''})

  function addNewTODO(e) {
    e.preventDefault()
    if (todo.value !== '' && todo.time !== '') {
      const newPost = {
        ...todo,
        id: Date.now(),
        done: false
      }
      create(newPost)
      setTodo({title: '', body: ''})
    }
  }

  return (
    <form className='header'>
      <MyInput 
        placeholder={'TODO'}
        value={todo.value}
        onChange={e => setTodo({...todo, value: e.target.value})}
      />
      <MyTime 
        placeholder={'Time'}
        value={todo.time}
        onChange={e => setTodo({...todo, time: e.target.value})}
      />
      <MyButton onClick={addNewTODO}>Add</MyButton>
    </form>
  )
}
