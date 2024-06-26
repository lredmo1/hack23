import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function LessonText({ title, desc, id }) {

	// TODO update to go to text lesson display
    const handleClickLesson = (evt) => {
        console.log('go to lesson: '+ id);
    }
    return(
	
		<>

			<Card sx={{ maxWidth: 345 }} className="lesson-text">

				<CardActionArea onClick={handleClickLesson}>

					<CardMedia
						component="img"
						alt="piano"
						height="140"
						image="https://upload.wikimedia.org/wikipedia/commons/5/50/Piano.svg" />

					<CardContent>

						<Typography gutterBottom variant="h5" component="div">
							{title}
						</Typography>

						<Typography variant="body2" color="text.secondary">
							<Link to={`/text-lesson/${id}`}>{desc}</Link>
						</Typography>

					</CardContent>

				</CardActionArea>

			</Card>

    	</>

    )

}

export default LessonText