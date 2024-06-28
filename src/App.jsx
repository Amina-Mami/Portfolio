import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./pages/Home";
import About from "./pages/About/About";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
