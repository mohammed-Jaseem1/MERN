import React, { useState,useEffect } from 'react'
import { TextField } from '@mui/material'
import Button from '@mui/material/Button';
import axios from 'axios'
import { useNavigate,useLocation } from 'react-router-dom'

const Add = () => {
  var [input, setinput] = useState({ Name: "", Age: "", Dept: "", sal: "" })
  var navigate = useNavigate()
  var loc = useLocation()
  console.log(loc.state)

  var inputHandler = (e) => {
    setinput({ ...input,[e.target.name]:e.target.value })
    console.log(input)
  }
  const Adde = () => {
    if (loc.state !== null) {
      axios.put(`http://localhost:3004/update/` + loc.state.val._id, input)
        .then((res) => {
          alert(res.data)
          navigate('/view')
        })
     
    } else {
      axios.post(`http://localhost:3004/add`, input)
        .then((res) => {
          alert(res.data)
          navigate('/view')
        })
    }
  }

  useEffect(() => {
    if(loc.state?.val)
    setinput({
      ...input, Name:loc.state.val.Name,
      Age:loc.state.val.Age,
      Dept:loc.state.val.Dept,
      sal:loc.state.val.sal
    })
  }, [])
  
  return (
      <div>
      <TextField id="outlined-basic" label="name" variant="outlined" name='Name' value={input.Name} onChange={ inputHandler} /><br />
      <TextField id="outlined-basic" label="Age" variant="outlined" name='Age' value={input.Age} onChange={inputHandler} /><br />
      <TextField id="outlined-basic" label="Dept" variant="outlined" name='Dept' value={input.Dept} onChange={inputHandler} /><br />
      <TextField id="outlined-basic" label="salary" variant="outlined" name='sal' value={input.sal} onChange={inputHandler} /><br />
      <Button variant="contained" onClick={ Adde}>Submit</Button>
    </div>
  )
}

export default Add
