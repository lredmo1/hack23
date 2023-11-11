import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoPost from '../components/VideoPost';
import DiscussionThreads from './DiscussionThreads';
import "../stylesheets/TeachingContainer.scss";

function TeachingContainer() {

	const { id } = useParams();
	const[lesson, setLesson] = useState([]);

	useEffect(() => {

		// Fetch threads
		fetch(`http://localhost:3000/api/teaching-videos/${id}`)
			.then((resp) =>
			resp.json())
			.then((value) => {
				console.log(value);
				setLesson(value);
			});

	}, [id]);

	console.log(id)
	return (
		<div className="container">
			<div className="video-display">
				<VideoPost
					caption={lesson.caption}
					video={lesson.video}
					id={lesson._id} />
			</div>
			<div>
				<DiscussionThreads lessonId={id}/>
			</div>
		</div>
	);

};

export default TeachingContainer;
