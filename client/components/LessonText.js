import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

function LessonText({title, desc, id}) {

    // const[lesson, setLesson] 

    const handleClickLesson = (evt) => {
        console.log('go to lesson: '+ id);
    }
    return(
        <>
        <Card sx={{ maxWidth: 345 }} className="lessonText">
            <CardActionArea onClick={handleClickLesson}>
                {/* <CardMedia
                    component="img"
                    alt="piano"
                    height="140"
                    image="https://upload.wikimedia.org/wikipedia/commons/5/50/Piano.svg"
                /> */}
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                       {desc}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </>
    )
}

export default LessonText