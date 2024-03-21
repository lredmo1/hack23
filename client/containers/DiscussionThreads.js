import React, {useState, useEffect} from 'react';
import ThreadCard from '../components/ThreadCard';
import { Card, Button , FormGroup, Label, Input, Row, Col} from 'reactstrap';
// import "../stylesheets/DiscussionThreads.scss";

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
		// userId: "654c51830aef36adde42f0a0",
		video_upload_id: lessonId,
	})
	const [csrfToken, setCsrfToken] = useState('');

  useEffect(() => {
    // Fetch the CSRF token from your Rails backend
    fetch('http://localhost:3000/csrf_token')
      .then(response => response.json())
      .then(data => {
        setCsrfToken(data.csrf_token);
      })
      .catch(error => {
        console.error('Error fetching CSRF token:', error);
      });
  }, []);

	const handleChange = (e) => {
		let key = e.target.name
        let value = e.target.value
        setFormData({...formData, [key]: value})
	}

	function handleSubmit(e) {
		console.log('hi')
        e.preventDefault()
        fetch(`http://localhost:3000/video_uploads/${lessonId}/comments`, {
            method: "POST",
            headers: {
				"Content-Type":"application/json",
				'X-CSRF-Token': csrfToken
			},
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
		<Card className="thread-container p-4 m-4" color="light">
			<FormGroup class="pb-4" onSubmit={handleSubmit}>
				<Label tag="h4">
					{'Leave A Comment: '}
				</Label>
				<Input 
					name="content" 
					type="textarea" 
					value={formData.content} 
					onChange={handleChange} 
					placeholder="Comment here..." required>
				</Input>
        	</FormGroup>
			<div className=' d-flex justify-content-center mb-5'>
            	<Button className='submit buttons mx-1' type="submit">{'Submit'}</Button>
			</div>
			{threadCards}
		</Card>
	);

};

export default DiscussionThreads;