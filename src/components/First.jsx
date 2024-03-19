import React from 'react'
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const First = () => {
  return (
    <div>
<h1>Welcome React Session</h1>
<input type="text" placeholder='name' />
<br />
<br />
<button>Submit</button>
<br /><br /><br />


<Typography variant="h1">Welcome React Basics</Typography>

<TextField id="outlined-basic" label="Name" variant="outlined" />
{/* <TextField  label="Filled" variant="filled" />
<TextField id="standard-basic" label="Standard" variant="standard" /> */}
<br /><br />
<Button variant="contained"color='secondary'>Submit</Button>
{/* <Button disabled>Disabled</Button>
<Button href="#text-buttons">Link</Button> */}


    </div>
  )
}

export default First