import React from "react";
import { Typography, Container, Box } from "@mui/material";
import { motion } from "framer-motion";
import StarWrapper from "../hoc/SelectionWrapper";

const HomeView = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <Typography variant='h2' component='h1' gutterBottom>
            Welcome to My Portfolio
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          <Typography variant='h5' component='h2' gutterBottom>
            I'm a passionate developer creating amazing web experiences.
          </Typography>
        </motion.div>
      </Box>
    </Container>
  );
};

const Home = StarWrapper(HomeView, "home");
export default Home;
