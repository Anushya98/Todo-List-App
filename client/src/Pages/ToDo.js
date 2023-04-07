import './ToDo.css'
import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
const ToDo =({text,updateMode,deleteToDo}) => {
return (
    <div className='Todo '>
        <div className='text'>{text}</div>
        <div className='icons'>
        <EditIcon className = 'edit' onClick ={updateMode}/>
        <CloseIcon className = 'close' onClick = {deleteToDo}/>
        </div>
        
 </div>
  )
}
export default ToDo