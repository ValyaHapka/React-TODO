import React, { useState } from 'react'
import MyButton from './UI/buttons/MyButton'
import MyInput from './UI/inputs/MyInput'


export default function TODOCreate({create}) {

  const [todo, setTodo] = useState({value: '', time: ''})

  function addNewTODO(e) {
    e.preventDefault()
    const newPost = {
        ...todo,
        id: Date.now(),
        done: false
    }
    create(newPost)
    setTodo({title: '', body: ''})
  }

  return (
    <form className='header'>
      <MyInput 
        placeholder={'TODO'}
        type={'text'}
        value={todo.value}
        onChange={e => setTodo({...todo, value: e.target.value})}
      />
      <MyInput 
        placeholder={'Time'}
        type={'time'}
        value={todo.time}
        onChange={e => setTodo({...todo, time: e.target.value})}
      />
      <MyButton onClick={addNewTODO}>Add</MyButton>
    </form>
  )
}
