import React from "react";
import YouTube from 'react-youtube';
import { Card, CardActionArea, CardContent, CardMedia, Typography,} from "@mui/material";
import { useNavigate } from "react-router-dom";

function LessonVideo({ caption, video, id }) {

	function getYouTubeVideoId(url) {
		const regex = /[?&]v=([^&]+)/;
		const match = url.match(regex);
		
		if (match && match[1]) {
		  return match[1]; 
		} else {
		  return null; 
		}
	  }

	const videoID = getYouTubeVideoId(video)

	const navigate = useNavigate();
	const opts = {
		height: '100%',
		width: '100%',
		playerVars: {
		  // https://developers.google.com/youtube/player_parameters
		  autoplay: 0,
		},
	}

// TODO update to go to vide lesson display
  const handleClickLesson = (evt) => {
    navigate(`/video-lesson/${id}`);
  };

  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  const onPlay = (event) => {
    console.log('Video is playing');
  }

  const onPause = (event) => {
    console.log('Video is paused');
  }

  const onEnd = (event) => {
    console.log('Video has ended');
  }

  const onError = (event) => {
    console.error('Error occurred:', event.data);
  }

	return (

		<>

			<Card sx={{ maxWidth: 345 }} className="lesson-video">

				<CardActionArea onClick={handleClickLesson}>

					<CardMedia
						component="div" // Use a div to create a custom container
						alt="piano"
						height="140"
						style={{ position: "relative" }} >
						<YouTube
							videoId={videoID}
							apiKey="AIzaSyBg-bs6dpGzQo6MOA-v1oX1jdi5FhKGN1o"
							opts={opts}
							onReady={onReady}
							onPlay={onPlay}
							onPause={onPause}
							onEnd={onEnd}
							onError={onError} />
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
