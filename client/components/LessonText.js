import React from 'react';
import { Card, CardBody, CardImg, CardTitle, CardSubtitle } from 'reactstrap';

function LessonText({title, desc, id}) {

	// TODO update to go to text lesson display
    const handleClickLesson = (evt) => {
        console.log('go to lesson: '+ id);
    }
    return(
	
        <>

        <Card 
			className="lesson-text" 
			onClick={handleClickLesson}
			style={{
				width: '12rem'
			  }}>

			<CardBody>

                <CardImg
                    alt="piano"
                    height="140"
                    src="https://upload.wikimedia.org/wikipedia/commons/5/50/Piano.svg" />

				<CardTitle>
					{title}
				</CardTitle>
				<CardSubtitle 
					className="mb-2 text-muted"
					tag="h6">
					{desc}
				</CardSubtitle>

             </CardBody>

        </Card>

        </>

    )

}

export default LessonText