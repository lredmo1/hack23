import React, { useEffect, useState } from 'react'

import LessonText from './LessonText';
import LessonVideo from './LessonVideo';

import "../stylesheets/AllLessons.scss";

function AllLessons() {
	
	const[textLessons, setTextLessons] = useState([]); 
	const [videoLessons, setVideoLessons] = useState([]); 

// 	TODO update with new back end
 useEffect(() => {
		// Fetch All lessons from DB
		// fetch("http://localhost:3000/api/teaching-texts/")
		// 	.then((resp) =>
		// 	resp.json())
		// 	.then((res) => {
        // const list = res.concat(res).concat(res); // not a lot of data to read right now so duplicating
			// 	setTextLessons(res);
			// });
      fetch("http://localhost:3000/video_uploads/")
        .then((resp) => resp.json())
        .then((resp) => {
		  console.log('these are the videos', resp)
          setVideoLessons(resp);
        });

	}, []);

	const fakeTextLessons = [
		{
			title: 'Text Lesson 1',
			description: 'This is a lesson description',
			_id: 123
		},
		{
			title: 'Text Lesson 2',
			description: 'This is a lesson description',
			_id: 123
		}
	]

	const fakeVideoLessons = [
		{
			caption: 'Video Lesson 1',
			video: 'This is a lesson description',
			id: 123
		},
		{
			caption: 'Video Lesson 1',
			video: 'This is a lesson description',
			id: 456
		}
	]

	return (

		<>

			<div className="all-lessons">

			<h1>Text Lessons</h1>

				<div className="lesson-cards">

					{fakeTextLessons.map((textLesson, index) => {
						return (
						// TODO update to link to display of text lessons
							<LessonText
								key={index}
								title={textLesson.title}
								desc={textLesson.description}
								id={textLesson._id}>
							</LessonText>
						);
					})}

				</div>

			<h1>Video Lessons</h1>

				<div className="lesson-cards">
					
					{videoLessons.map((videoLesson, index) => {
						return (
						// TODO update to link to display of video lessons
							<LessonVideo
								key={index}
								caption={videoLesson.caption}
								video={videoLesson.video}
								id={videoLesson._id}>
							</LessonVideo>
						);
					})}

				</div>

			</div>

		</>

	);

}

export default AllLessons