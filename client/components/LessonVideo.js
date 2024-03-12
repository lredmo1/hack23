import React from "react";
import YouTube from 'react-youtube';
import { Card, CardActionArea, CardContent, CardMedia, Typography,} from "@mui/material";
import { useNavigate } from "react-router-dom";

function LessonVideo({ caption, video, id }) {

	const navigate = useNavigate();
	const opts = {
		// height: '360',
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
								videoId="62MOCMyPce0"
								opts={opts}
								onReady={onReady}
								onPlay={onPlay}
								onPause={onPause}
								onEnd={onEnd}
								onError={onError} />
						{/* <iframe 
							width="100%"
							// padding-bottom="56.25"
							src={'https://vimeo.com/846814754/0322669bee'}
							frameborder="0"
							title="video for the lesson"
							allowfullscreen>
						</iframe>	 */}
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
