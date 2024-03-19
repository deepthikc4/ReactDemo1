import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

const Loginn = ({person}) => {
  // const [fname,setName]=useState('Deepthi');
  // const [counter, setCounter] = useState(0);
  
//  const [form,setForm]=useState({
//   username:'',
//   password:''
//  })
// Props

 const [form,setForm]=useState({
  username:person.username,
  password:person.password
 })
 
 function capvalue()
 {
  console.log(form);
  axios.post('https://dummyjson.com/users/add',form).then((res)=>{
    console.log(res);
    alert(`posted ${res.data.id}`);
  })

 }
  return (
    <div>
      {/* <h4>Welcome {fname}  to React Learning</h4> */}
        <Typography variant="h6">Login to Your Account </Typography>
        <br /> <br />

        {/* <TextField  label="User Name" variant="outlined"onChange={(e)=>{
          setName(e.target.value);
        }}/> */}

        <TextField  label="User Name" variant="outlined" value={form.username} onChange={(e)=>{
          setForm({...form,username:e.target.value})
        }}/>
        <br /><br />
        <TextField label="Password" variant="outlined" value={form.password} onChange={(e)=>{
          setForm({...form,password:e.target.value})
        }}/>
        <br /><br />
        {/* <Button variant="contained"color='secondary' onClick={(e)=>{
         
         setCounter(counter + 1);       
        }}>Login</Button> */}
         <Button variant="contained"color='secondary' onClick={capvalue} >Login</Button>
        {/* <h4>Login button clicked {counter}  times</h4> */}
       </div>
  )
}

export default Loginn