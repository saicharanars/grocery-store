import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Getposts from "./components/Getposts";
import axios from "axios";
import Addproduct from "./components/Addproduct";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CssBaseline from '@mui/material/CssBaseline';


function App() {
  return (
    <>

      <Grid container rowSpacing={1} columnSpacing={2}  width={1} >
        <Grid sx={{ p:2 }} item xs={12} md={4}>
          <Addproduct />
        </Grid>
        <Grid sx={{ p:2 }} item xs={12} md={8}>
          <Getposts />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
