import React from "react";
import { FetchProfiles } from "../queryHooks";
import DataTable from "../Components/DataTable";
import { Grid,  Circles, Watch} from "react-loader-spinner";



const Home = ()=>{
    const {isLoading, data} = FetchProfiles()
     console.log(data)


     
    return (
    <div>
        {
            isLoading ?
            <div 
            style={{width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}
            >
                <Watch/>
            </div> : 
            data.status === 200 ? <DataTable data={data}/>: <h2>Error!</h2>
        }
    </div>
    )
}

export default Home