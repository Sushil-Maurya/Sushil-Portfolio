import React from "react";
import { Typography, Container, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box component='footer' sx={{ bgcolor: "background.paper", py: 6 }}>
      <Container maxWidth='lg'>
        <Typography variant='body2' color='textSecondary' align='center'>
          © {new Date().getFullYear()} My Portfolio. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
