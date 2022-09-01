import React, { useState } from 'react'
import TODOItem from './TODOItem'


export default function TODOList({TODOs, remove, toggle}) {
  const [doneTODO, setDoneTODO] = useState(false)
  
  return (
    <section className='list'>
      {TODOs.map((todo) => 
        <TODOItem
          toggle = {toggle}
          setDone={setDoneTODO} 
          done={doneTODO}
          todo={todo} 
          remove={remove} 
          key={todo.id}
        />
      )}
    </section>
  )
}
