import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, CircularProgress, Dialog, DialogContent, Grid, TextField } from "@mui/material";
import axios from "axios";

import "../stylesheets/CreateVideo.scss";


function CreateVideo() {
  const navigate = useNavigate();
  const [formdata, setFormdata] = useState({
    caption: "",
    upload: null,
  });
  const [loading, setLoading] = useState(false);

  const handleChange = async (e) => {
    if (e.target.type === "file") {
      setFormdata({
        ...formdata,
        upload: e.target.files[0],
      });
    } else {
      setFormdata({ ...formdata, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("video", formdata.upload);
      const response = await axios.post("/api/uploads", formData);

      const entryResponse = await axios.post("/api/video-uploads", {
        video: response.data.url,
        caption: formdata.caption,
      });

      navigate("/learn");
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setLoading(false);
    }
  };

  return (

    <div className="upload-content" >

	console.log('test')
		<h1>Upload a Video with Caption</h1>
      
		<form onSubmit={handleSubmit}>

		<div className="caption-input">

			<label>{'Caption: '}

				<input 
					name="caption" 
					type="text" 
					value={formdata.caption} 
					onChange={handleChange} 
					placeholder="In this video you will learn..." required>
				</input>

			</label>
			
		</div>			

		<div className="video-preview">

			<video
				style={{ width: "100%", height: "300px" }}
				controls
				src={formdata.upload ? URL.createObjectURL(formdata.upload) : null} />

		</div>

		<input
			style={{ display: "none" }}
			id="contained-button-file"
			type="file"
			accept="video/*"
			onChange={handleChange} />

		<label
			htmlFor="contained-button-file"
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}>

				<button
					variant="contained"
					component="span"
					className="button">
						Upload File
				</button>

				<button
					type="submit"
					variant="contained"
					className="button">
						Submit
				</button>

			</label>

    	</form>

    	<Dialog open={loading} aria-labelledby="loading-dialog">

			<DialogContent>

				<CircularProgress />

			</DialogContent>

    	</Dialog>

    </div>

  );
}

export default CreateVideo;
