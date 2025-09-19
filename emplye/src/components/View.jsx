import React, { useState, useEffect } from 'react';
import {
    TableContainer,
    TableCell,
    TableHead,
    TableRow,
    Table,
    TableBody,
    Button,
    Paper,
} from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const View = () => {
    const [emp, setEmp] = useState([]);
    var navigate=useNavigate()
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        axios.get("http://localhost:3004/view")
            .then((res) => {
                setEmp(res.data);
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
            });
    };

    const Del = (id) => {
        axios.delete(`http://localhost:3004/remove/${id}`)
            .then((res) => {
                console.log("Deleted:", res);
                fetchData(); 
            })
            .catch((err) => {
                console.error("Error deleting data:", err);
            });
    };
    const upd = (val) => {
        navigate("/", {state:{ val } })
    }

    return (
        <div>
            <TableContainer component={Paper} sx={{ width: 800, margin: "auto", marginTop: 4 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Dept</TableCell>
                            <TableCell>Sal</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {emp.map((val) => (
                            <TableRow key={val._id}>
                                <TableCell>{val.Name}</TableCell>
                                <TableCell>{val.Age}</TableCell>
                                <TableCell>{val.Dept}</TableCell>
                                <TableCell>{val.sal}</TableCell>
                                <TableCell>
                                    <Button
                                        variant="contained"
                                        color="error"
                                        onClick={() => Del(val._id)}
                                    >
                                        Delete
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="success"
                                        onClick={()=>upd(val)}
                                        
                                    >
                                        Update
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default View;
