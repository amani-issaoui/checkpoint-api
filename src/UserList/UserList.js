import React from 'react'
import axios from'axios'
import {useEffect,useState} from 'react'
import User from '../User/User'
import './userlist.css'

function UserList() {
    const [users, setUsers] = useState([])
    //const [error, setError] = useState(null)
useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(res=>setUsers(res.data)).catch(err=>console.log(err))
}, [])
    return (
        <div className='userlist'>
    {users.map((el)=><User key={el.id} el={el}/>)}
        </div>
    )
}

export default UserList
