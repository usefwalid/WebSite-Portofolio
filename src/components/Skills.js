import { Typography,Box, Paper } from "@mui/material";
import hoverSoundFile from './touch.mp3';
const Skills=()=>{
    const skills = [
        "C/C++",
        "Python",
        "Java",
        "GoLang",
        "JavaScript",
        "PHP",
        "HTML",
        "React.js",
        "Express.js",
        "Vue.js",
        "Node.js",
        "Laravel",
        "Flask",
        "SQL",
        "Socket.IO",
        "CSS",
        "Bootstrap",
        "Material-UI",
        "Bash Scripting"
      ];
      
        const hoverSound = new Audio(hoverSoundFile); // Replace with the path to your audio file

        // Function to play the audio
        const playAudio = () => {
            /*
            hoverSound.volume = 0.06; 
            hoverSound.currentTime = 0.3; // Reset the audio to the start
            hoverSound.play(); // Play the audio
            */
        };

      
    return(
        <>
            <Box
                sx={{marginTop: {xs:"5%",sm:"5%",md:"5%",lg:"5%",xl:"1%"}, marginLeft: {xs:"5%",sm:"5%",md:"5%",lg:"5%",xl:"5%"} }}
            >
                <Typography
                    sx={{fontSize:{xs:"2rem",sm:"2rem",md:"2rem",lg:"3.8",xl:"3.9rem"},color:"#3A1078"}}
                >
                   <strong>Skills</strong> 
                </Typography>
                <Box
                    sx={{
                        marginLeft:{xs:"4%",xl:"8%"},
                        maxWidth: {xs:"95%",xl:"87%"}, 
                        display: "flex", 
                        flexWrap: "wrap", 
                        marginTop:"1.2rem",
                        justifyContent:"center",

                    }}
                    >
                    {skills.map((skill, index) => (
                        <Paper
                        onMouseEnter={playAudio}
                        key={index}
                        sx={{ 
                            marginLeft: "2%",
                            marginBottom: {xs:"0.7rem",xl:"1rem"}, 
                            padding:"1rem",
                            borderRadius:"1rem",
                            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                            transition: "transform 0.3s ease",
                            '&:hover': {
                                transform: "scale(1.02)",
                                backgroundColor: "#3795BD",
                            }
                        }}
                        >
                        <Typography sx={{ fontSize:{xs:"1rem",sm:"1.7rem",md:"1.9rem",lg:"2.1rem",xl:"2.3rem"} }} >{skill}</Typography>
                        </Paper>
                    ))}
                </Box>



            </Box>

        </>
    )
}
export default Skills;