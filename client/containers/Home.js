import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import DiscussionThreads from "./DiscussionThreads";
import HomePage from "./HomePage";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import UserAvatar from "../components/common/UserAvatar";

const Home = () => {
  const [intro, updateIntro] = useState("insert text here");
  const imageUrl =
    "https://res.cloudinary.com/dsioshcio/image/upload/v1699583151/image_5_hpfwic.png";

  return (
    <div id="app">
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        spacing={2}
      >
        <img src={imageUrl} alt="logo" />

        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          spacing={2}
        >
          <Link to="/profile" style={{color:"white", textDecoration:"none"}}>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
              <UserAvatar name={"user"} />
              <div>Profile</div>
            </div>
          </Link>
        </Stack>
      </Stack>
      <p>{intro}</p>

      {/* Button with color EBCD54 */}
      <Button
        variant="primary"
        style={{ backgroundColor: "#EBCD54", width: "200px", height: "200px" }}
      >
        LEARN
      </Button>

      {/* Button with color #273D0E */}
      <Button
        variant="secondary"
        style={{ backgroundColor: "#273D0E", width: "200px", height: "200px" }}
      >
        TEACH
      </Button>

      <HomePage></HomePage>
    </div>
  );
};

export default Home;
