import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./containers/Home";
import UserProfile from "./containers/UserProfile";
import AllLessons from "./components/AllLessons";
import CreateVideo from "./containers/CreateVideo";
import About from "./containers/About";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import OneTeachingText from "./components/OneTeachingText";
import Lesson from "./containers/Lesson";
import LessonVideo from "./components/LessonVideo";

import "./stylesheets/App.scss";

const App = () => {

	return (

		<BrowserRouter>

			<NavBar></NavBar>

			<Routes>

				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				{/* TODO login */}
				<Route path="/profile" element={<UserProfile />} />
				{/* TODO page for uploading written lesson */}
				<Route path="/create-video-lesson" element={<CreateVideo />} />
				{/* TODO view a written lesson text-lesson/:id */}
				<Route path="/singlelesson" element={<OneTeachingText />} />
				{/* TODO view a video lesson video-lesson/:id */}
				<Route path="/video-lesson/:id" element={<Lesson />} />
				{/* <Route path="/video-card" element={<LessonVideo />} /> */}

			</Routes>

			<Footer></Footer>

		</BrowserRouter>

	);

};

export default App;
