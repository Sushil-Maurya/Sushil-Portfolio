import { BrowserRouter } from "react-router-dom";
import AllPages from "./AllPages";
import Navbar from "./components/Navbar/Navbar";
import { ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";

function App() {
  
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark': 'light'
    }
  })

  const handleChange = () => {
    setDarkMode(!darkMode)
  }
  return (
    <>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar click={handleChange} mode={darkMode}>
        <AllPages/>
        </Navbar>
      </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
