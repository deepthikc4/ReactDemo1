import { Button, TextField } from '@mui/material'
import axios from 'axios';
import React, { useState } from 'react'

const SignUp = ({signupdata}) => {
    const [form,setForm]=useState({
        name:signupdata.name,
        email:signupdata.email,
        password:signupdata.password,
        phoneno:signupdata.phoneno
       })
       function capvalue()
       {
       console.log(form);
         axios.post('https://dummyjson.com/users/add',form).then((res=>{
          console.log(res);
          alert(`datais posted to the backend with id ${res.data.id}`)
         }))

       }
         
  return (
    <div style={{margin:50} }>
        <h4>Create an account</h4>
       
        <br />
        <TextField id="filled-basic" label="name" variant="filled" value={form.name}  onChange={(e)=>{
          setForm({...form,name:e.target.value})
        }}/> 
        <TextField id="filled-basic" label="email" variant="filled" value={form.email} onChange={(e)=>{
          setForm({...form,email:e.target.value})
        }}/>
        <br />
        <TextField id="filled-basic" label="password" variant="filled"value={form.password}  onChange={(e)=>{
          setForm({...form,password:e.target.value})
        }}/>
        <TextField id="filled-basic" label="phoneno" variant="filled" value={form.phoneno} onChange={(e)=>{
          setForm({...form,phoneno:e.target.value})
        }}/>
        <br /><br />
        <Button variant="contained"color='secondary' onClick={capvalue} >SignUp</Button>
    </div>
  )
}

export default SignUp