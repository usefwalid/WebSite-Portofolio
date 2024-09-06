import { Typography, Box } from "@mui/material";
import './historitem.css';
const HistoryItem = ({ place, jobDesc }) => {
    return (
        <Box
            sx={{

                padding: {xs:"8px",sm:"10px",md:"12px",lg:"16px",xl:"20px"},
                backgroundColor: "#f5f5f5",
                width: {xs:"150%",sm:"180%",md:"100%",lg:"100%",xl:"90%"},
                borderRadius: "8px",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease",
                '&:hover': {
                    transform: "scale(1.02)",
                    backgroundColor: "#3795BD",
                }
            }}
        >
            <Typography  sx={{ color: "#3A1078", fontSize:{xs:"1rem",xl:"2rem"},marginBottom: "8px" }}>
                {place}
            </Typography>
            <Typography  sx={{ color: "#333" ,fontSize:{xs:"0.9rem",xl:"1.1rem"} }}>
                {jobDesc}
            </Typography>
        </Box>
    );
}

export default HistoryItem;
