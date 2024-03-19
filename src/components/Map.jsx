import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import axios from 'axios';


// https://dummyjson.com/users-----external API

const Map = () => { 

const[dataset,setData]=useState([]);
useEffect(()=>{
axios.get('https://dummyjson.com/users').then((res)=>{

setData(res.data.users);
})
},[])
  return (
<div>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell >FirstName</TableCell>
          <TableCell >Email</TableCell>
          <TableCell >Gender</TableCell>
          
        </TableRow>
      </TableHead>
      <TableBody>
      
 {dataset.map((item, index) => (
        <TableRow key={index} style={{backgroundColor:item.gender==='male' ? 'yellow':'lightgreen'}}>
      <TableCell>{item.id}</TableCell>
      <TableCell>{item.firstName}</TableCell>
      <TableCell>{item.email}</TableCell> 
      <TableCell>{item.gender}</TableCell> 
      </TableRow>
        ))}  
         
      </TableBody>
    </Table>
   
  </TableContainer>

  </div>

 ) 
    }
    
  

export default Map