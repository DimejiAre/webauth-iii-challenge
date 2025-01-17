import React from 'react';
import {Formik, Form, Field} from 'formik';
import axios from 'axios';
import './RegisterForm.scss'

function RegisterForm(props){
    const register = (formValue, actions) => {
      debugger
        const newUser = {
          username: formValue.username,
          password: formValue.password,
          department: formValue.department
        }
        debugger
    
        axios.post('http://localhost:5000/api/auth/register', newUser)
        .then(res => {
          debugger
          localStorage.setItem('token', res.data.token)
          actions.resetForm();
          props.history.replace('/users')
        })
        .catch(err => {
          alert(err.message)
        })
      }

    const initialUser = {username: '', password: '', department: ''}
    return(
        <Formik 
        initialValues = {initialUser}
        onSubmit={register}
        render={props => {
            return(
                <Form className='form'>
                    <label htmlFor='username'>username</label>
                    <Field name='username' type='text' placeholder='username'/>
                    <label htmlFor='password'>password</label>
                    <Field name='password' type='password' placeholder='password'/>
                    <label htmlFor='department'>department</label>
                    <Field as="select" name="department">
                        <option value="" label="Select a department" />
                        <option value="finance">Finance</option>
                        <option value="sales">Sales</option>
                    </Field>
                    <button type='submit'>Register</button>
                </Form>
            )
        }}/>
    )

}

export default RegisterForm;