import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
   
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" align="left" component="div" sx={{ flexGrow: 1 }}>
            React App
          </Typography>
          <Button color="inherit">
            <Link to={"/"} style={{textDecoration:"none",color:"white"}}>
              First
          </Link>
          </Button>
          <Button color="inherit">
            <Link to={"/l"} style={{textDecoration:"none",color:"white"}}>
              Loginn
          </Link>
          </Button>
          <Button color="inherit">
            <Link to={"/m"} style={{textDecoration:"none",color:"white"}}>
              Map
          </Link>
          </Button>
          <Button color="inherit">
            <Link to={"/s"} style={{textDecoration:"none",color:"white"}}>
            SignUp
          </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>       
       
  )
}

export default Navbar