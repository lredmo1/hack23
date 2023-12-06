import React from 'react';
import { Link } from "react-router-dom";

import logo_no_border from "../public/images/logo_no_border.png"


function About() {

	return (

		<div className="about">

			<img alt="sodoto-logo" src={logo_no_border} className="logo" />

			<p>Here at Sodoto we know that true mastery of a subject comes with that ability to teach a skill to others. Based on the “see one, do one, teach one” philosophy, Sodoto is platform where learners of all types can both teach and learn from each other.</p>
		
			<h1>How It Works</h1>

			<div className="about-section">

				<h3>If you are here to learn…</h3>

				<p>Search by topic on the home page. Find a subject that interests you and click to view a teaching demonstration.</p>
						
				<p>View the teaching video or read through the teaching content. Be sure to leave feedback or ask question in the comments!</p>

				<p>

					<Link to="/">

						<button className="button">Start Learning</button>

					</Link>

				</p>

			</div>

			<div className="about-section">	

				<h3>If you are here to teach...</h3>

				<p>Click to create a text or video lesson on the home page.</p>

				<p>Add your content by uploading or linking a video or creating a blog-style text description of your content.</p>

				<p>Be on the look out for questions and feedback in the comments! Help viewers learn by answering their questions and continued teaching through discussion.</p>
	
				<p>
					<Link to="/create-video-lesson">

						<button className="button">Start Teaching</button>

					</Link>
				
				</p>

			</div>
		
		</div> 

	);

};

export default About;
