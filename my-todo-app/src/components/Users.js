import React from 'react'
import './users.css'

export const Users = ({users}) => {

    console.log('users length users:::', users.length,users[3]?.completed)
    if (users.length === 0) return null

    const DataRow = (user,index) => {
        let urlCall = 'https://jsonplaceholder.typicode.com/todos/'+(index+1)
        return(
            <div>
            <div key = {index} className="table-item">
                <div className=''>{index + 1}</div>
                <div className='titles'><a className='title-link' href={urlCall}>{users[index].title}</a></div>
                <div className='complete-status'>{users[index].completed? "Yes" : "Nope"}</div>
            </div>
            <hr/>
            </div>
          )
    }

    const todoData = users.map((user,index) => DataRow(user,index))

    return(
        <div className="container">
            <h2>Todo Items:</h2>
            <div className="todo-heading">
                    <div >Todo Item No.</div>
                    <div className='title-heading'>Title</div>
                    <div>Completed</div>
            </div>
            <div className='todo-container'>
                {todoData}
            </div>
        </div>
    )
}