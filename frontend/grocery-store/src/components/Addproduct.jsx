import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useRef } from "react";
import axios from "axios";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const Addproduct = () => {
  const productRef = useRef();
  const imageRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();
  const categoryRef = useRef();
  const [product, setProduct] = useState({
    name: "",
    image: "",
    description: "",
    price: "",
    category: "",
  });
  const [added,setAdded] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault();
    const productValue = productRef.current.value;
    const imageValue = imageRef.current.value;
    const descriptionValue = descriptionRef.current.value;
    const priceValue = priceRef.current.value;
    const categoryValue = categoryRef.current.value;
    const body = {
      name: productValue,
      image: imageValue,
      description: descriptionValue,
      price: priceValue,
      category: categoryValue,
    };

    // Function to fetch posts from the API
    const add = async () => {
      try {
        console.log(body);
        const response = await axios.post("http://localhost:4000/add", body);

        console.log(response.data);
        if(response.data){
            setAdded(true)
            setTimeout(()=>{

                setAdded(false)
            },1000)
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    // Call the add function when the component mounts
    add();
  };

  return (
    <Grid container>
      <form onSubmit={submitHandler}>
        <Grid
          item
          sx={{
            p: 10,
          }}
        >
          <Stack spacing={2}>
            <Typography variant="h6" gutterBottom>
              Add Product
            </Typography>

            <TextField label="Product Name" inputRef={productRef} />
            <TextField label="Description" inputRef={descriptionRef} />
            <TextField label="Image" inputRef={imageRef} />
            <TextField label="Price" type="number" inputRef={priceRef} />
            <TextField label="Category" inputRef={categoryRef} />
            <Button type="submit" variant="contained">
              Submit
            </Button>
            {added && <p>added successfully</p>}
          </Stack>
        </Grid>
      </form>
    </Grid>
  );
};

export default Addproduct;
