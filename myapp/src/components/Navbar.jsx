import React from 'react'
import { AppBar, Toolbar, Button } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
          <AppBar>
              <Toolbar>
                  <IconButton
                      size="large"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      sx={{ mr: 2 }}
                  >
                      <MenuIcon />
                  </IconButton>
                  <h3>myapp</h3> &nbsp;
                 
                      <Button variant='contained'>home</Button> &nbsp;
                  <Link to="/login">
                      <Button variant='contained'>login</Button> &nbsp;
                  </Link>
                  <Link to="/">
                      <Button variant='contained'>signup</Button> &nbsp;
                  </Link>
                  <Link to="/Gettable">
                      <Button variant='contained'>Gettable</Button> &nbsp;
                  </Link>
                  <Link to="/state">
                      <Button variant='contained'>state</Button> &nbsp;
                  </Link>
                  <Link to="/count">
                      <Button variant='contained'>count</Button> &nbsp;
                  </Link>
                  <Link to="/message">
                      <Button variant='contained'>message</Button> &nbsp;
                  </Link>
                  <Link to="/product">
                      <Button variant='contained'>product</Button> &nbsp;
                  </Link>
              </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
