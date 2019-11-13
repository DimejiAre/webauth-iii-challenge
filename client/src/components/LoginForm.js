import React from 'react';
import {Formik, Form, Field} from 'formik';
import axios from 'axios';
import './LoginForm.scss';

function LoginForm(props){
    const login = (formValue, actions) => {
        const newUser = {
          username: formValue.username,
          password: formValue.password,
        }
    
        axios.post('http://localhost:5000/api/auth/login', newUser)
        .then(res => {
          localStorage.setItem('token', res.data.token)
          actions.resetForm();
          props.history.replace('/users')
        })
        .catch(err => {
          alert(err.message)
        })
      }

    const initialUser = {username: '', password: ''}
    return(
        <Formik 
        initialValues = {initialUser}
        onSubmit={login}
        render={props => {
            return(
                <Form className='form'>
                    <label htmlFor='username'>username</label>
                    <Field name='username' type='text' placeholder='username'/>
                    <label htmlFor='password'>password</label>
                    <Field name='password' type='password' placeholder='password'/>
                    <button type='submit'>Log In</button>
                </Form>
            )
        }}/>
    )

}

export default LoginForm;