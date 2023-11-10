import React, { useEffect, useState } from 'react';
// import DiscussionThreads from './DiscussionThreads';

function TeachingContainer() {
	const[lessons, setLessons] = useState([]);
	useEffect(() => {

		// Fetch threads
		fetch("http://localhost:3000/api/teaching-texts/")
			.then((resp) =>
			resp.json())
			.then((value) => {
				console.log(value);
				setLessons(value);
			});

			// fetch("http://localhost:3000/api/threads/?lessonId=${lessonId}")
			// .then((resp) => resp.json())
			// .then(setThreads)

	}, []);
	// const threadCards = threads.map((thread) => <div><p>{thread.content}</p></div>)
	const lessonLinks = lessons.map((lesson)=> <div><p>{lesson.title}</p></div>)
	return (
		<div>
			{lessonLinks}
			{/* teaching content component here */}
			{/* <DiscussionThreads lessonId={lessonId}/> */}
		</div>
	);

};

export default TeachingContainer;
