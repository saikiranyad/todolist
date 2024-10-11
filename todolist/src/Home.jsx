import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios'


const Home = () => {
    const [todos, setTodods] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/get').then(res => setTodods(res.data)).catch(err => console.log(err))
    }, [])
    const handleedit = (id)=>{
          axios.put('http://localhost:3001/update/'+id).then(result=>console.log(result)).catch(err=>console.log(err))
          location.reload()
    }

    const handledelete = (id)=>{
        axios.delete('http://localhost:3001/delete/'+id).then(result=>{location.reload()}).catch(err=>console.log(err))

    }

    return (
        <div>
            <h2>TodoList</h2>
            <Create />
            {
                todos.length === 0 ? (<div><h2>No Record</h2></div>) :
                    (todos.map((todo, idx) => (
                        <div key={idx}>
                            <div className="checkbox" onClick={()=>handleedit(todo._id)}>
                                {
                                    todo.done? (<a href=''> ppp</a>):(<a href="" className='icon'>.</a>)
                                }
                                
                                <p className={todo.done?"line_through":""}>{todo.task}</p>
                            </div>
                            <div>
                                <span><a href="" onClick={()=>handledelete(todo._id)}>O</a></span>
                            </div>
                            
                        </div>
                        
                    )
                    ))
            }

        </div>
    )
}

export default Home
