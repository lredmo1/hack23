import React from "react";
import YouTube from 'react-youtube';
import { Card, CardActionArea, CardContent, CardMedia, Typography,} from "@mui/material";
import { useNavigate } from "react-router-dom";
import YouTubeVideoDisplay from "./YouTubeVideoDisplay";

function LessonVideo({ caption, video, id }) {

	const navigate = useNavigate();
	const videoDisplayHeight = '100%';
	const videoDisplayWidth = '100%';

  	const handleClickLesson = (evt) => {
    	navigate(`/video-lesson/${id}`);
  	};

	return (

		<>

			<Card sx={{ maxWidth: 345 }} className="lesson-video">

				<CardActionArea onClick={handleClickLesson}>

					<CardMedia
						component="div" // Use a div to create a custom container
						alt="piano"
						height="140"
						style={{ position: "relative" }} >
						<YouTubeVideoDisplay 
							video={video}
							videoDisplayHeight={videoDisplayHeight}
							videoDisplayWidth={videoDisplayWidth} />
					</CardMedia>

					<CardContent>

						<Typography variant="body2" color="text.secondary">
							{caption}
						</Typography>

					</CardContent>

				</CardActionArea>

			</Card>
		
		</>

	);

}

export default LessonVideo;
