import React, { useState,useEffect } from 'react'
import ToDo from './Pages/ToDo'
import {addToDo, getAllToDo,updateToDo,deleteToDo } from './Pages/HandleApp'
function App() {
  const [todo,setToDo] = useState([])
  const [text, setText] = useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoId] = useState("")
  useEffect(() => {
    getAllToDo(setToDo)
  }, [])
 
  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setToDoId(_id)
  }
  return (
    <div>
      <h1>TODO LIST</h1>
      <div className="top">
          <input
            type="text"
            placeholder="Create Task..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <div
            className="add"
            onClick={isUpdating ?
              () => updateToDo(toDoId, text, setToDo, setText, setIsUpdating)
              : () => addToDo(text, setText, setToDo)}>
            {isUpdating ? "Update" : "Add Task"}
          </div>

        </div>
      <div className='list'>
      {todo.map((item) => <ToDo
          key={item._id} 
          text={item.text}
          updateMode = {() => updateMode(item._id, item.text)}
          deleteToDo = {() => deleteToDo(item._id, setToDo)} />)}

  
      </div>
    </div>
  )
}

export default App