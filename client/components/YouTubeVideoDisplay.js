import React from "react";
import YouTube from 'react-youtube';

const YouTubeVideoDisplay = ({ video, videoDisplayHeight, videoDisplayWidth }) => {

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

	const opts = {
		height: videoDisplayHeight,
		width: videoDisplayWidth,
		playerVars: {
		  // https://developers.google.com/youtube/player_parameters
		  autoplay: 0,
		},
	}

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

    <YouTube
		videoId={videoID}
		apiKey="AIzaSyBg-bs6dpGzQo6MOA-v1oX1jdi5FhKGN1o"
		opts={opts}
		onReady={onReady}
		onPlay={onPlay}
		onPause={onPause}
		onEnd={onEnd}
		onError={onError} />

  );

};

export default YouTubeVideoDisplay;