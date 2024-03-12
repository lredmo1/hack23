import React, {useState, useEffect} from 'react';
import ThreadCard from '../components/ThreadCard';
import "../stylesheets/DiscussionThreads.scss";

function DiscussionThreads( {lessonId} ) {

	// const fakeThreads = [
	// 	{
	// 		id: 123,
	// 		user: {
	// 			name: 'Lisa'
	// 		},
	// 		content: 'Test thread one',
	// 		replies: [
	// 			{
	// 				id: 246,
	// 				user: {
	// 					name: 'Jay'
	// 				},
	// 				content: 'Test reply one',
	// 			},
	// 			{
	// 				id: 122,
	// 				user: {
	// 					name: 'Bey'
	// 				},
	// 				content: 'Test reply two',
	// 			}
	// 		]
	// 	},
	// 	{
	// 		id: 456,
	// 		user: {
	// 			name: 'Mark'
	// 		},
	// 		content: 'Test thread two',
	// 		replies: [
	// 			{
	// 				id: 789,
	// 				user: {
	// 					name: 'Jay'
	// 				},
	// 				content: 'Test reply three',
	// 			},
	// 			{
	// 				id: 135,
	// 				user: {
	// 					name: 'Bey'
	// 				},
	// 				content: 'Test reply four',
	// 			}
	// 		]

	// 	}
	// ]

	const [threads, setThreads] = useState([]);
	const [formData, setFormData] = useState({ 
		content: "",
		userId: "654c51830aef36adde42f0a0",
		teachingtext: lessonId,
	})

	const handleChange = (e) => {
		let key = e.target.name
        let value = e.target.value
        setFormData({...formData, [key]: value})
	}

	function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:3000/thread", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(formData)
        })
        .then(resp => resp.json())
        .then(data => {
            setThreads(current => [data, ...current])
            setFormData({
				content: "",
            })
        });
    }


	useEffect(() => {

		// Fetch threads
		// fetch("http://localhost:3000/threads/")
		// 	.then((resp) => resp.json())
		// 	.then(setThreads)

		fetch(`http://localhost:3000/video_uploads/${lessonId}/comments`)
			.then((resp) => resp.json())
			.then(setThreads)

	}, [lessonId]);
// 
	const threadCards = threads.map((thread, index) => <ThreadCard thread={thread} key={index} setThreads={setThreads} lessonId={lessonId}/>)

	return (
		<div className="thread-container">
			<form onSubmit={handleSubmit}>
            <label>{'Leave a Comment: '}
				<input 
					name="content" 
					type="text" 
					value={formData.content} 
					onChange={handleChange} 
					placeholder="Comment here..." required>
				</input>
			</label>
            <button className='submit buttons' type="submit">{'Submit'}</button>
        	</form>
			{threadCards}
		</div>
	);

};

export default DiscussionThreads;