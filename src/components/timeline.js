import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import Brightness1RoundedIcon from '@mui/icons-material/Brightness1Rounded';
import Box from '@mui/material/Box';
import HistoryItem from './historitem';
import CircleIcon from '@mui/icons-material/Circle';
import './history.css';

const TimelineItemm = ({ year, place, jobDesc ,current}) => {
    return (
        <Box
            
        >
            <TimelineItem
            sx={{width:{xs:"90%",xl:"90%"},right:{xs:"8.6%",xl:"7%"}}}
            >
                <TimelineOppositeContent
                    sx={{ mt: '7px' }}
                >
                    <Typography sx={{ fontSize: {xs:"1rem",xl:"1.9rem"}, color: "#3795BD" }}>
                        {year}
                    </Typography>
                </TimelineOppositeContent>
                
                <TimelineSeparator>
                    <TimelineDot color="primary" variant="contained">
                        <CircleIcon sx={{ fontSize: {xs:"0.4rem",sm:"2rem",xl:"2rem"} }} />
                    </TimelineDot>
                    {(!current) && <TimelineConnector />}
                </TimelineSeparator>
                <TimelineContent sx={{ lineHeight: 0,paddingBottom:"90px" }}>
                    <HistoryItem
                        place={place}
                        jobDesc={jobDesc}
                    />
                </TimelineContent>
            </TimelineItem>
        </Box>
    );
}

export default TimelineItemm;
