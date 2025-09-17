import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

const State = () => {
    var [a, seta] = useState("welcome");
    var [b, setb] = useState(""); 

    const change = (e) => {
        setb(e.target.value); 
    };

    const handleClick = () => {
        seta(b); 
    };

    return (
        <div>
            <h1>Hello {a}</h1>
            <TextField
                variant="outlined"
                onChange={change}
                value={b} 
            />
            <Button
                variant="contained"
                onClick={handleClick}
            >
                Update
            </Button>
        </div>
    );
};

export default State;
