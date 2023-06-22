import "./App.css";
import Navbar from "./components/Navbar";
import { Container, Toolbar } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";
import MainForm from "./components/MainForm";

const App = () =>{
  const [darkMode, setDarkMode] = useState(false);

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        light: '##25c365',
        main: '#25c365',
        dark: '#34e97e',
        contrastText: '#fff',
      }
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Toolbar />
        <main>
          <Container>
            <MainForm />
          </Container>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
