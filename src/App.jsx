import { Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CreatePage from "./Pages/CreatePage";
import Navbar from "./components/Navbar";
import NoPage from "./Pages/NoPage";
import Pricing from "./Pages/Pricing";
import About from "./Pages/About";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./App.css";

function App() {

  const theme = createTheme({
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});


  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Container maxWidth="md">
          <Routes>
            <Route index path="/home" element={<HomePage />} />
            <Route path="/taxis" element={<CreatePage />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
