import React,{useState, useEffect} from 'react';
import axiosAuth from '../axios';
import './Users.scss';

function Users(){
    const [users, setUsers] = useState([])

    useEffect(()=>{
        axiosAuth().get('http://localhost:5000/api/users')
        .then(res => {
            setUsers(res.data)
        })
        .catch(err => {
            alert(err.message)
        })
    }, [])

    
    return (
        <div className='users'>
            {users.map(user => (
                <div className='user'>
                    <h2>Name: {user.username}</h2>
                    <h2>Department: {user.department}</h2>
                </div>
            ))}
        </div>
    )
}

export default Users;