import React, {useEffect,useState} from "react";
import { FetchProfile, UpdateProfile, DeleteProfile } from "../queryHooks";
import {useParams, useNavigate} from "react-router-dom"
import { Input, FormGroup, Grid, Container } from "@mui/material";
import {Stack, Button, TextField} from '@mui/material'
import { Watch} from "react-loader-spinner";




const EditProfile = ()=>{
    const navigate = useNavigate()
    const [dataState, setDataState] = useState()

    const {id} = useParams()
    const updateProfile = UpdateProfile()
    const deleteProfile = DeleteProfile()
    const {isLoading, data} = FetchProfile(id)
    

    useEffect(()=>{
        // eslint-disable-next-line no-unused-expressions
        data ? setDataState(data.data): null
    },[data])
    return (
        <>
        {
            isLoading ? <div 
            style={{width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}
            >
                <Watch/>
            </div>  : data.status === 200 ? 
            <div>
                <Button style={{margin: "20px"}} variant="contained" onClick={()=>navigate("/")}>Home</Button>
                <Container maxWidth="md">
                <h2>Edit Profile</h2>
                <Grid container spacing={2} >
                <Grid item xs={6}>
                <FormGroup>
                    <TextField
                        label="Name"
                        value={dataState?.name}
                        onChange={(e)=>{setDataState({...dataState, name: e.value})}}
                    />
                    </FormGroup>
                </Grid>
                <Grid item xs={6}>
                    <FormGroup>
                        <TextField
                            label="Email"
                            value={dataState?.email}
                            onChange={(e)=>{setDataState({...dataState, email: e.target.value})}}
                        />
                    </FormGroup>
                    
                </Grid>
                <Grid item xs={6}>
                    <FormGroup>
                        <TextField
                            label="Phone"
                            value={dataState?.phone}
                            onChange={(e)=>{setDataState({...dataState, phone: e.target.value})}}
                        />
                    </FormGroup>
                    
                </Grid>
                <Grid item xs={12}>
                    <Stack spacing={2} direction="row">
                        <Button variant="contained" 
                                onClick={
                                    ()=>{
                                        updateProfile.mutate({
                                            param: id, 
                                            data: {name: dataState.name, phone: dataState.phone, email: dataState.email, id: dataState.id}
                                        })
                                    }
                                    }
                                    >
                                        Edit
                            </Button>
                        <Button 
                            variant="outlined" 
                            onClick={()=>{
                                deleteProfile.mutate(id)
                            }}
                        >
                            Delete
                        </Button>
                    </Stack>
                </Grid>
                
                </Grid>
                </Container>
            </div>: 
            <h2>Error!</h2>
        }
          
        </>
    )
}

export default EditProfile