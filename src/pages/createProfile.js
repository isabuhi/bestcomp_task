import React, {useEffect,useState} from "react";
import { CreateProfile} from "../queryHooks";
import {useParams, useNavigate} from "react-router-dom"
import { FormGroup, Grid, Container } from "@mui/material";
import {Stack, Button, TextField} from '@mui/material'


const Createprofile = ()=>{
    const navigate = useNavigate()
    const [dataState, setDataState] = useState()

    const create = CreateProfile()
    
    
    return (
        <>
        {
            
            <div>
                <Button style={{margin: "20px"}} variant="contained" onClick={()=>navigate("/")}>Home</Button>
                <Container maxWidth="md">
                <h2>Edit Profile</h2>
                <Grid container spacing={2} >
                <Grid item xs={6}>
                <FormGroup>
                    <TextField
                        label="Name"
                        onChange={(e)=>{setDataState({...dataState, name: e.value})}}
                    />
                    </FormGroup>
                </Grid>
                <Grid item xs={6}>
                    <FormGroup>
                        <TextField
                            label="Email"
                            onChange={(e)=>{setDataState({...dataState, email: e.target.value})}}
                        />
                    </FormGroup>
                    
                </Grid>
                <Grid item xs={6}>
                    <FormGroup>
                        <TextField
                            label="Phone"
                            onChange={(e)=>{setDataState({...dataState, phone: e.target.value})}}
                        />
                    </FormGroup>
                    
                </Grid>
                <Grid item xs={12}>
                    <Stack spacing={2} direction="row">
                        <Button variant="contained" 
                                onClick={
                                    ()=>{
                                        create.mutate(
                                            {name: dataState.name, phone: dataState.phone, email: dataState.email}
                                        )
                                    }
                                    }
                                    >
                                        Create
                            </Button>
                    </Stack>
                </Grid>
                
                </Grid>
                </Container>
            </div>
        }
          
        </>
    )
}

export default Createprofile