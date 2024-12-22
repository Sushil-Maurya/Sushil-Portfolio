import { BrowserRouter } from "react-router-dom";
import AllPages from "./AllPages";
import Navbar from "./components/Navbar/Navbar";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
import Footer from "./components/Pages/Footer";

function App() {
  console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID);
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const handleChange = () => {
    setDarkMode(!darkMode);
  };
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Navbar click={handleChange} mode={darkMode}>
          <AllPages />
        </Navbar>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
