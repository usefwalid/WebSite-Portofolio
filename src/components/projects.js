import { Box, Typography } from "@mui/material";
const projects = [
    {
      title: "Graduate Project - Learnly: An Innovative Learning Management System",
      description: [
        "Developed a learning management system using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
        "Implemented live streaming through WebRTC and real-time chat functionality using Socket.io.",
        "Integrated seamlessly with other learning tools and ensured secure authentication with role-based access control."
      ]
    },
    {
      title: "Online Chess using React and Socket.io",
      description: [
        "Developed a real-time multiplayer online chess game using React for the front-end and Socket.IO for real-time communication between players.",
        "Implemented features like turn-based gameplay, chat functionality, and real-time board updates."
      ]
    },
    {
      title: "Speech Emotion Recognition",
      description: [
        "Used the CREMA dataset to create a feature space by calculating zero-crossing rate, energy, and Mel spectrogram.",
        "Built a model using a Convolutional Neural Network (CNN).",
        "The project is available on GitHub: Link."
      ]
    },
    {
      title: "Paint",
      description: [
        "Created a graphical desktop application using object-oriented programming concepts that allow the user to draw.",
        "Reduced the software’s complexity and enhanced code readability by applying six design patterns.",
        "Implemented OOP according to SOLID principles."
      ]
    },
    {
      title: "Facial Recognition",
      description: [
        "Classified ORL Dataset using PCA and LDA and compared the results."
      ]
    }
  ];
  
const Projects=()=>{
    return (
        <>
            <Box
                sx={{marginTop: {xs:"5%",sm:"5%",md:"5%",lg:"5%",xl:"1%"}, marginLeft: {xs:"5%",sm:"5%",md:"5%",lg:"5%",xl:"5%"} }}
            >
                <Typography
                    sx={{fontSize:{xs:"2rem",sm:"2rem",md:"2rem",lg:"3.8",xl:"3.7rem"},color:"#3A1078"}}
                >
                   <strong>Projects</strong> 
                </Typography>

                {projects.map((project, index) => (
                    <Box
                    key={index}
                    sx={{
                        padding: { xs: "8px", sm: "10px", md: "12px", lg: "16px", xl: "20px" },
                        backgroundColor: "#f5f5f5",
                        width: { xs: "90%", sm: "90%", md: "90%", lg: "90%", xl: "80%" },
                        borderRadius: "8px",
                        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                        transition: "transform 0.3s ease",
                        '&:hover': {
                        transform: "scale(1.02)",
                        backgroundColor: "#3795BD",
                        },
                        marginBottom: "16px"  // Adds some space between boxes
                    }}
                    >
                    <Typography sx={{ color: "#3A1078", fontSize: { xs: "0.9rem", xl: "1.5rem" }, marginBottom: "8px" }}>
                        {project.title}
                    </Typography>

                    {project.description.map((desc, descIndex) => (
                        <Typography key={descIndex} sx={{ color: "#333", fontSize: { xs: "0.7rem", xl: "1.2rem" }, marginBottom: "4px" }}>
                        {desc}
                        </Typography>
                    ))}
                    </Box>
                ))}
            </Box>
        </>
    )
}
export default Projects;