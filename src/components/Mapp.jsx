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

const Mapp = ({persondata,phone}) => {

  // using Props


  const[form,setForm]=useState({
    name:persondata.name,
    age:persondata.age,
    place:persondata.place
  ,
  
  phoneno:phone.phoneno
}
  )


//   const persons =[
//     {
//         name:"Tiya",
//         age:10,
//         place:"EKM"
//     },
//     {
//         name:"Maya",
//         age:20,
//         place:"TVM"
//     }, {
//         name:"Piya",
//         age:30,
//         place:"MVP"
//     }
// ]

  return (
<div>
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell >FirstName</TableCell>
          <TableCell >Email</TableCell>
          
        </TableRow>
      </TableHead>
      <TableBody>
      {/* {persons.map((item, index) => (
        <tr key={index}>
      <TableCell>{item.name}</TableCell>
      <TableCell>{item.age}</TableCell>
      <TableCell>{item.place}</TableCell> 
      </tr>
        ))} */}


 

      {/* props */}
     
      <TableRow> 
       
      <TableCell>{persondata.name}</TableCell>
      <TableCell>{persondata.age}</TableCell>
      <TableCell>{persondata.place}</TableCell>
      </TableRow>     
    
      </TableBody>
    </Table>
   
  </TableContainer>
  <br />
  {/* <h4>This is my phone number={phone.phoneno}</h4> */}
  </div>

 ) 
    }
    
  

export default Mapp;