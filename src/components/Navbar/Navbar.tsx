import { DarkMode, LightMode, Menu } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Tooltip,
  Typography,
  // useTheme,
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
const drawerWidth = 240;
const navItems = [
  "Home",
  "About",
  "Skills",
  "Projects",
  "Education",
  "Resume",
  "Contact",
];

function Navbar(props: any) {
  const navigate = useNavigate();
  const { window, children } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  // const theme = useTheme();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant='h6' sx={{ my: 2 }}>
        ME
      </Typography>
      <Divider />
      <List>
        {navItems.map((item, i) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => navigate(`/${item.toLowerCase()}`)}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <Box display='flex'>
        <CssBaseline />
        <AppBar component='nav' color='transparent'>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}>
              <Menu />
            </IconButton>
            <Typography
              variant='h6'
              component='div'
              sx={{
                flexGrow: 1,
                maxWidth: "20%",
                textAlign: "center",
                display: { xs: "none", sm: "block" },
              }}>
              <Tooltip title='Sushil'>
                <IconButton
                  // onClick={handleOpenUserMenu}
                  sx={{ p: 0 }}>
                  <Avatar
                    alt='sushil'
                    src='https://i.pinimg.com/736x/f3/10/25/f31025f697c37e0fafaa3fffdf221103.jpg'
                  />
                </IconButton>
              </Tooltip>
            </Typography>
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                textAlign: "center",
                margin: "0 0 0 auto",
              }}
              gap={4}>
              {navItems.map((item, i) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}>
                  <Button
                    color='inherit'
                    onClick={() => navigate(`/${item.toLowerCase()}`)}>
                    {item}
                  </Button>
                </motion.div>
              ))}
            </Box>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              style={{ margin: "auto", maxWidth: "5%" }}>
              <Button color='inherit' onClick={props.click}>
                {props.mode ? <LightMode /> : <DarkMode />}
              </Button>
            </motion.div>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
            container={container}
            variant='temporary'
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}>
            {drawer}
          </Drawer>
        </nav>
        <Box component='main' sx={{ p: 3, textAlign: "justify" }}>
          <Toolbar />
          {children}
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
