import React from "react";
import { Typography, Container, Box } from "@mui/material";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}>
          <Typography variant='h3' component='h2' gutterBottom>
            About Me
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          <Typography variant='body1' paragraph>
            I'm a skilled web developer with experience in React, TypeScript,
            and various modern web technologies. I love creating responsive and
            user-friendly applications that solve real-world problems.
          </Typography>
        </motion.div>
      </Box>
    </Container>
  );
};

export default About;
