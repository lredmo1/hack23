import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoTeachingDisplay from '../components/VideoTeachingDisplay';
import DiscussionThreads from './DiscussionThreads';
import "../stylesheets/Lesson.scss";

function Lesson() {

	const { id } = useParams();
	const[lesson, setLesson] = useState([]);

	useEffect(() => {

		// Fetch threads
		fetch(`http://localhost:3000/video_uploads/${id}`)
			.then((resp) => resp.json())
			.then((resp) => {
			console.log('aloha', resp)
			setLesson(resp);
			});

	}, []);

	return (
		<div className="container">
			<div className="video-display">
				<VideoTeachingDisplay
					caption={lesson.caption}
					video={lesson.video}
					id={lesson.id}></VideoTeachingDisplay>
			</div>
			<div>
				<DiscussionThreads lessonId={id}/>
			</div>
		</div>
	);

};

export default Lesson;
