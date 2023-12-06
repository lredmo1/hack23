import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';

import AllLessons from "../components/AllLessons";
import logo_no_border from "../public/images/logo_no_border.png"

const Home = () => {

	return (

      <div className="home">

		<img src={logo_no_border} className="logo" />

		<div>

			<Link to="/create-video-lesson">
				<Button className="button">
					Create a Text Lesson
				</Button>
			</Link>
			
			{/* TODO create text content upload form */}
			<Link to="/create-video-lesson">
				<Button className="button">
					Create a Video Lesson
				</Button>
			</Link>

		</div>

		<AllLessons />
        
      </div>
 

  );
};

export default Home;
