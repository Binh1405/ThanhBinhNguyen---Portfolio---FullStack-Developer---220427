import "./App.css";
import { Container, Grid } from "@mui/material";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PortfolioPage from "./pages/portfolio/PortfolioPage";
import ResumePage from "./pages/resume/ResumePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Container className="top_60">
      <Grid container>
        <Grid item xs={12} sm={12} md={4} lg={3}>
          <Profile />
        </Grid>
        <Grid item xs>
          <Router>
            <div className="main-content container_shadow">
              <Header />
              <Routes>
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/" element={<ResumePage />} />
              </Routes>
            </div>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
