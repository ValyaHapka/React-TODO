import { useState } from 'react';
import TODOCreate from './components/TODOCreate';
import TODOList from './components/TODOList';
import './styles/App.css';


function App() {

  const [TODOs, setTODOs] = useState([
    {value: 'Wake up', time: '9:10', id: 1, done: false},
    {value: 'Morning wash', time: '9:30', id: 2, done: false},
    {value: 'Breakfast', time: '9:45', id: 3, done: false},
    {value: 'Learn JS', time: '10:30', id: 4, done: false}
  ])

  function createTODO(newTODO) {
    setTODOs([...TODOs, newTODO])
  }

  function removeTODO(todo) {
    setTODOs(TODOs.filter(t => t.id !== todo.id))
  }

  function doneToggle(id) {
    setTODOs([
      ...TODOs.map((todo) => 
        todo.id === id ? {...todo, done: !todo.done} : {...todo}
      )
    ])
  }

  return (
    <div className="App">
      <TODOCreate create={createTODO}/>
      <TODOList TODOs={TODOs} remove={removeTODO} toggle={doneToggle}/>
    </div>
  );
}

export default App;
