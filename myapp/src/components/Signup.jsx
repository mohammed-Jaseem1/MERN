import React from 'react'
import { TextField } from '@mui/material'
const Signup = () => {
  return (
      <div> 
        <div className="signup">  
          <h1>signup</h1> 
          <TextField id="name" label="username" variant="outlined" />
          <br></br><br></br>
          <TextField id="e-mail" label="e-mail" variant="outlined" />
          <br></br><br></br>
          <TextField id="password" label="password" variant="outlined" />
          <br></br><br></br>
          <TextField id="number" label="number" variant="outlined" />
          <br></br><br></br>
          <button>signup</button>
          </div>
          
          
    </div>
  )
}

export default Signup
