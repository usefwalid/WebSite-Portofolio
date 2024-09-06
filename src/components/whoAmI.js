import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { Typography, Paper, Box, Link} from '@mui/material';
import React  from 'react';

import img2 from './face.png';

const WhoAmI = () => {
  

    return (
    <div>
      <Paper
        elevation={9}
        sx={{
          marginTop: {xs:"5%",lg:"1%",xl:"2%"}, 
          color: "#F7F7F8",
          marginLeft: { xs: "65%", sm: "75%", md: "80%", lg: "80%" },
          maxWidth: { xs: "25%", sm: "18%", md: "11%", lg: "9%", xl: "7%" },
          padding: "0.7%",
          backgroundColor: "#3A1078",
          transition: "transform 0.6s ease",
          '&:hover': {
            color: '#ECDFCC',
            transform: "scale(1.04)"
          },
        }}  
      >
        
        <Link href="mailto:usefwalid718@gmail.com" color="inherit"  sx={{ textDecoration: "none" }}>
        <Typography
            sx={{ fontSize: {xs:"0.8rem",sm:"1.5rem",md:"1.5rem",lg:"1.5rem",xl:"1rem"}} }
        >
         Contact Me <FontAwesomeIcon icon={faMessage}/>
        </Typography>
        </Link>

        
      </Paper>

      <Box
        sx={{
          marginTop: {xs:"20%",md:"5%",lg:"7%",xl:"7%"},
          maxWidth: "100%",
          display: {lg:"flex",xl:"flex"},
          marginLeft: {xs:"0%",sm:"0%",lg:"10%",xl:"3%"},
        }}
      >
    <Typography 
      sx={{ 
        color:"#3A1078",
        marginLeft: {xs:"20%",sm:"29%",md:"22%",lg:"1.5%",xl:"2%"},
        letterSpacing: 1,
        paddingRight: {xs: "1%", sm: "40%", md: "0%", xl: "0%"},
        fontSize: {xs: "2rem", sm: "2rem", md: "3rem", lg: "2.7rem", xl: "3.3rem"}, 
        width: { sm:"60%",lg: "30%",xl:"40%"},
      }} 
    >
       Hi, my name is <strong style={{ fontWeight: 'bold' }}>Youssef</strong>.
      

    </Typography>
      
    <Box
        sx={{
          marginLeft: {xs:"18%",md:"33%",lg:"0%",xl:"0%"},
          marginRight: {xs:"0%",lg:"0%",xl:"2%"},
          marginTop: {xs:"7%",md:"2%",lg:"3%"},
          width: { xs: "60%", md:"30%",lg:"27%",xl: "30%" },  
          height: { xs: "60%", sm: "15%", md: "30%",lg:"27%", xl: "30%" }, 
          transition: "transform 0.8s ease",
          '&:hover': {
            color: '#ECDFCC',
            transform: "scale(1.04)"
          },
        }}
      >
        <img
          src={img2}
          alt="Man Sleeping"
          style={{
            width: "100%",    
          }}
        />
    </Box>
      
        <Typography 
          sx={{ 
            color: "#3A1078",
            letterSpacing: 0,
            fontSize: {xs:"1.4rem",md:"2rem",lg:"1.8rem",xl:"2.1rem"}, 
            marginTop: {xs:"5%",lg:"26%",xl:"24.5%"},
            marginLeft: {xs:"20%",md:"30%",lg:"5%",xl:"5%"},
            marginRight: {lg:"0%"}, 
            width: { xl: "40%"},
          }} 
        >
          I am a <strong style={{ fontWeight: 'bold' }}>software engineer.</strong>
        </Typography>
      </Box>
      
    </div>
  );
}

export default WhoAmI;
