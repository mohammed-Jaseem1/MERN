import React from 'react'
import { AppBar,  Toolbar ,Button} from '@mui/material'

import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
          
            <AppBar>
            
                    <Toolbar>

                    
                    <Link to={'/'}>
                       <Button variant='contained'>add</Button>
                    </Link> &nbsp;
                    <Link to={'/view'}>
                        <Button variant='contained'>View</Button>
                    </Link> &nbsp;
                   

                    </Toolbar>

                </AppBar>
            <br></br><br></br><br></br><br></br>

        </div>
    )
}

export default Nav
