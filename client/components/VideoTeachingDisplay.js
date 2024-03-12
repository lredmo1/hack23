import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import YouTubeVideoDisplay from "./YouTubeVideoDisplay";

function VideoTeachingDisplay({ caption, video, videoDisplayHeight, videoDisplayWidth}) {

	if (!video) {
		return null
	}

  return (
    <>
      <Card sx={{ maxWidth: 1000 }} >
          <CardMedia
            component="div" // Use a div to create a custom container
            alt="youtube-video">
            <YouTubeVideoDisplay 
				video={video}
				videoDisplayHeight={videoDisplayHeight}
				videoDisplayWidth={videoDisplayWidth}/>
          </CardMedia>
          <CardContent>
            <Typography variant="body2" color="text.secondary">
				{caption}
            </Typography>
          </CardContent>
      </Card>
    </>
  );
}

export default VideoTeachingDisplay;
