import React, { useState } from 'react'
import { TableContainer,TableCell,TableHead,TableRow,Table,TableBody } from '@mui/material'
import axios from 'axios'

const Gettables = () => {
  var [user, userset]=useState([])
  axios.get("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
    console.log(res.data)
    userset(res.data)

    })
  return (
    <div>
      <TableContainer sx={{ width: 800 }}>
        <Table border="2px" >
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>username</TableCell>
              <TableCell>city</TableCell>
              <TableCell>e-mail</TableCell>
            </TableRow>
          </TableHead>
            <TableBody>
            {user.map((val) => {
              return (
                <TableRow>
                  <TableCell>{val.name}</TableCell>
                  <TableCell>{val.username}</TableCell>
                  <TableCell>{val.address.city}</TableCell>
                  <TableCell>{val.email}</TableCell>
                </TableRow>
                
              )
            })}
            </TableBody>
    
        </Table>
      </TableContainer>
          
    </div>
  )
}


export default Gettables
