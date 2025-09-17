import React, { useState } from 'react'
import { Button } from '@mui/material'
const Message = () => {
  var [a, seta] = useState()

   
  const react = () => {
    seta("react")
  }
  const angular = () => {
    seta("angular")
  }
  const nest = () => {
    seta("nest")
  }

  return (
    <div>
      <h1>hello {a}</h1>
      <Button variant="contained" onClick={react}>react</Button>
      <Button variant="contained" onClick={angular}>angular</Button>
      <Button variant="contained" onClick={nest}>nest</Button>
      
    </div>
  )
}

export default Message
