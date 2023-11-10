import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import StandardHeader from "../components/common/StandardHeader";
import { Button, CircularProgress, Dialog, DialogContent, Grid, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function UploadContent() {
  const navigate = useNavigate(); // Initialize useNavigate

  const [formdata, setFormdata] = useState({
    caption: "",
    upload: "",
  });
  const[loading, setLoading] = useState(false);
const navigate = useNavigate();
  const handleChange = async (e) => {
    if (e.target.type === "file") {
      console.log(e.target.files);
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
    setLoading(true)
    try {
      const formData = new FormData();
      formData.append("video", formdata.upload);
      const response = await axios.post("/api/uploads", formData);

      const entryResponse = await axios.post("/api/video-uploads", {
        video: response.data.url,
        caption: formdata.caption,
      });

      // Redirect to "/learn" after successful submission
      navigate('/learn');

    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setLoading(false)
    }

  };

  return (
    <div
      elevation={3}
      style={{ padding: 16, marginTop: 24, backgroundColor: "white" }}
    >
     
        <Dialog open={loading} aria-labelledby="loading-dialog">
          <DialogContent>
            <CircularProgress />
          </DialogContent>
        </Dialog>
    
      <StandardHeader label={"Upload a Video with Caption"} />
      <form onSubmit={handleSubmit}>
        <Grid
          container
          spacing={3}
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          style={{
            border: "1px solid #ccc",
            padding: 16,
            marginTop: 16,
            borderRadius: 8,
          }}
        >
          <Grid item xs={12} md={6} marginVertical={20}>
            <TextField
              label="Caption"
              name="caption"
              type="text"
              fullWidth
              value={formdata.caption}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
              <video
                style={{ width: "100%", height: "200px" }}
                controls
                src={
                  formdata.upload === "" || formdata.upload === null
                    ? null
                    : URL.createObjectURL(formdata.upload)
                }
              />
            </div>
            <input
              style={{ display: "none" }}
              id="contained-button-file"
              type="file"
              accept="video/*"
              onChange={handleChange}
            />
            <label htmlFor="contained-button-file">
              <Button variant="contained" component="span">
                Upload File
              </Button>
            </label>
          </Grid>
        </Grid>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UploadContent;
