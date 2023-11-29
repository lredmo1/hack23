import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./stylesheets/App.scss";
import Home from "./containers/Home";
import UserProfile from "./containers/UserProfile";
import DiscussionThreads from "./containers/DiscussionThreads";
import AllLessons from "./containers/AllLessons";
import Lesson from "./containers/Lesson";
import UploadContent from "./containers/UploadContent";

import About from "./containers/About";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import OneTeachingText from "./components/OneTeachingText";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar></NavBar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/threads" element={<DiscussionThreads />} />
        {/* <Route path="/lesson" element={<LessonPost />} /> */}
        <Route path="/teaching" element={<Lesson />} />
        {/* <Route path="/uploadContent" element={<UploadContent />} /> */}
        <Route path="/teach" element={<UploadContent />} />
        <Route path="/learn" element={<AllLessons />} />
        <Route path="/about" element={<About />} />
        <Route path="/singlelesson" element={<OneTeachingText />} />
		<Route path="/learn/:id" element={<Lesson />} />
      </Routes>

      <Footer></Footer>
    </BrowserRouter>
  );
};

export default App;
