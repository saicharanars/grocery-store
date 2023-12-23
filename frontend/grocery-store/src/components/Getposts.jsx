import React, { useState, useEffect } from "react";
import axios from "axios";
import Showpost from "../components/Showpost";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Getposts = () => {
  const [posts, setPosts] = useState([]);
  const [refresh,setRefresh] = useState(false)

  useEffect(() => {
    // Function to fetch posts from the API
    const fetchPosts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/get");

        setPosts(response.data.data);
        setRefresh(false)
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    // Call the fetchPosts function when the component mounts
    fetchPosts();
  }, [refresh]);
  const refreshPosts = async () => {
    setRefresh(true)
  };
  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{
          p: 10,
        }}
      >
        <Grid item xs={12} md={12}>
        <Stack direction={"row"} useFlexGap justifyContent="space-between"
  alignItems="center"
  spacing={2}>
          <Typography variant="h6" gutterBottom>
            
            Show Product
          </Typography>
          <Button onClick={refreshPosts} variant="outlined">
              Refresh products
            </Button>
        </Stack>
        </Grid>
        {posts.map((item) => (
          <Grid key={item._id} item xs={12} md={4}>
            <Showpost
              
              name={item.name}
              image={item.image}
              price={item.price}
              description={item.description}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Getposts;
