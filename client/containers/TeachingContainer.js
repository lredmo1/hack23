import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import VideoPost from '../components/VideoPost';
import DiscussionThreads from './DiscussionThreads';

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

	return (
		<div>
			<VideoPost
				caption={lesson.caption}
				video={lesson.video}
				id={lesson._id} />
			<DiscussionThreads lessonId={id}/>
		</div>
	);

};

export default TeachingContainer;
