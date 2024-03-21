import React, {useState} from 'react';
import { Card, CardTitle, Button, Row, Col, FormGroup, Label, Input } from 'reactstrap';

function ThreadCard( {thread, setThreads, lessonId} ) {

	const [showReplyForm, setShowReplyForm] = useState(false)
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
			setShowReplyForm(false)
            setFormData({
				content: "",
            })
        });
    }

	const handleReply = () => {
		setShowReplyForm((current) => !current)
	}

	return (
		<>
			<Card className="mt-2">
				<Row>
					<Col sm="10">
						<CardTitle tag="h5" className='p-3'>
							{thread.content}
						</CardTitle>
					</Col>
					<Col>
						<div className='d-flex justify-content-end m-3'>
							<Button className="buttons" onClick={handleReply}>{showReplyForm ? 'Cancel' : 'Reply'}</Button>
						</div>
					</Col>
				</Row>
			</Card>
			<div>
				{showReplyForm ? 
					<FormGroup onSubmit={handleSubmit} className="">
						<Label className="mt-4" tag="h4">
							{'Reply: '}
						</Label>
						<Input 
							name="content" 
							type="textarea" 
							value={formData.content} 
							onChange={handleChange} 
							placeholder="Reply here..." required>
						</Input>
						<div className=' d-flex justify-content-center'>
            				<Button className='submit buttons m-4' type="submit">{'Submit'}</Button>
						</div>					
				</FormGroup> :
					null } 
			</div>
		</>
	);

};

export default ThreadCard;