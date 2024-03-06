import React from "react";
import { Card, CardActionArea, CardContent, CardMedia, Typography,} from "@mui/material";
import { useNavigate } from "react-router-dom";

function LessonVideo({ caption, video, id }) {

	const navigate = useNavigate();

// TODO update to go to vide lesson display
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
						<video
						controls
						style={{ width: "100%", height: "100%", objectFit: "cover" }}
						>
						<source src={video} type="video/mp4" />
						Your browser does not support the video tag.
						</video>
					</CardMedia>

					<CardContent>

						<Typography variant="body2" color="text.secondary">
							{/* <Link to={`/video-lesson/${id}`}> */}
								{caption}
								{/* </Link> */}
						</Typography>

					</CardContent>

				</CardActionArea>

			</Card>
		
		</>

	);

}

export default LessonVideo;
