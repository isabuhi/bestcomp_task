import * as React from 'react';
import { DataGrid} from '@mui/x-data-grid';
import {Stack, Button} from '@mui/material'
import {Link, useNavigate} from "react-router-dom"
import { FetchProfile, UpdateProfile, DeleteProfile } from "../queryHooks";







export default function DataTable(props) {
    const deleteProfile = DeleteProfile()
    let navigate = useNavigate()
    const columns= [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'name', headerName: 'First and Last name', width: 200 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'phone', headerName: 'Phone Number', type: 'number', width: 200,},
        { width: 300, renderCell: (data)=>{
          return ( 
              <Stack key={data.id} spacing={2} direction="row">
                  <Button variant="contained" onClick={()=>navigate(`edit/${data.id}`)}>Edit</Button>
                  <Button 
                    variant="outlined"
                    onClick={
                        ()=>{
                            deleteProfile.mutate(data.id)
                            }
                    }>
                     Delete
                  </Button>
              </Stack>
          )
        }},
      ];


  return (
    <div style={{ height: "calc(100vh - 60px)", width: 'calc(100% - 60px)', padding: "30px", background:"#f8f8f8"}}>
      <div><Button style={{margin: "0 0 20px"}} variant="contained" onClick={()=>navigate("/create")}>Create</Button></div>
      <DataGrid
        style={{background: "white"}}
        rows={props.data.data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
      />
    </div>
  );
}