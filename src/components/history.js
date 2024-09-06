import { Typography,Box } from "@mui/material";
import * as React from 'react';
import TimelineItemm  from "./timeline.js";

const historyData = [
    {
        year: "2016-2018",
        place: "Alexandria International School",
        jobDesc: "Studied the IGCSE curriculum and graduated with a score of 98.5%",
        current:false
    },
    {
        year: "2019 - 2024",
        place: "Faculty of Engineering",
        jobDesc: "Studied Computer and Communications and graduated with a GPA of 3.35",
        current:false
    },
    {
        year: "Summer 2022",
        place: "RMZtech Institute",
        jobDesc: "Learned Full Stack Web Development using Laravel",
        current:false
    },
    {
        year: "Summer 2023",
        place: "Bibliotheca Alexandrina",
        jobDesc: "Developed a web application to manage High-Performance Computing (HPC) requests, \
        leveraging Laravel for the backend and Vue.js 3 for the frontend.",
        current:false
    },
    {
        year: "2024-Present",
        place: "Ejada",
        jobDesc: "Software Engineer (Java Developer)",
        current:true
    }
    
]
const  History = () => {
    return (
        <>
            <Box
                sx={{marginLeft: "5%", marginTop: {xs:"13%",xl:"9%"}}}
            >
                <Typography sx={{
                    color:"#3A1078",
                    fontSize: {xs: "2.2rem", sm: "2rem", md: "2.5rem", lg: "3.1rem", xl: "3.86rem"}
                    }}>
                    <strong>History</strong>
                </Typography>
            
            </Box>
            <Box
                sx={{marginRight: { xl: "30%"},marginTop: "5%",width:"100%"}}
            >
                {historyData.map((item,index)=>{
                        return <TimelineItemm key={index} year={item.year} place={item.place} jobDesc={item.jobDesc} current={item.current}/>
                })}
            </Box>
        </>
    )
}

export default History;