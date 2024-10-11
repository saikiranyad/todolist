import React, { useState } from 'react'
import axios from 'axios'

const Create = () => {
    const [task,setTask] = useState();
    const handleclick = ()=>{
        axios.post('http://localhost:3001/add',{task:task}).then(result => {location.reload()}).catch(err=>console.log(err))

    }
  return (
    <div>
      <input type='text' name='' id='' onChange={(e)=>setTask(e.target.value)}/>
      <button type='button' onClick={handleclick} >Add</button>
    </div>
  )
}

export default Create
