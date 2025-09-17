import React, { useState } from 'react'
import { Button } from '@mui/material';

const Count = () => {
    var [a, b] = useState(0)
    
    const plus = () => {
        b(a+1)
    }
    const sub = () => {
        b(a - 1)
    }
  return (
      <div>
          <h2>count{ a}</h2>
          
          <Button variant="contained" onClick={plus}>add</Button>
          <Button variant="contained" onClick={sub}>sub</Button>
    
    </div>
  )
}

export default Count
