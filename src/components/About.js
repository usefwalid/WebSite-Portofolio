import { Typography,Box } from "@mui/material";

const  About = () => {
    return (
        <div>
            <Typography
                sx={{ 
                    
                    fontSize:{xs:"2rem",sm:"2rem",md:"2rem",lg:"3.8",xl:"3.7rem"} ,
                    marginLeft: {xs:"5%",sm:"5%",md:"5%",lg:"5%",xl:"5%"} ,
                    marginTop: {xs:"25%",sm:"5%",md:"5%",lg:"5%",xl:"10%"},
                    color:"#3A1078",
                }}
                
                
            >
                <strong>About Me</strong>
            </Typography>            
            <Box
                sx={{
                    margin:' 0 auto ',
                    justifyContent: 'center',
                    maxWidth: "90%",
                    marginTop: "5%",
                    linespacing: "4",
                    lineHeight: {xs:"1.5",sm:"1.5",md:"1.5",lg:"1.5",xl:"1.5"},
                    fontSize: {xs:"1.3rem",sm:"1.5rem",md:"1.7rem",lg:"2rem",xl:"2.2rem"},
                    color: "#4E31AA",

                }}
            >
            I am always eager to learn new technologies, solve complex problems, and take on challenging projects. I am open to opportunities where I can contribute my skills and passion for software development to create impactful solutions.
            </Box>
            
        </div>
    );
}

export default About;