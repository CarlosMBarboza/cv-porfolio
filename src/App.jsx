import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBarAndFooter from './layout/navBarAndFooter/NavBarAndFooter';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact'; // Asegúrate de tener este componente

function App() {
  return (
    <Router>
    <NavBarAndFooter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </NavBarAndFooter>
    </Router>
  );
}

export default App;
