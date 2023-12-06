import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import Contact from './pages/Contact';
import Support from './pages/Support';
import Events from './pages/Events';
import News from './pages/News';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="/events" element={<Events />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/*' element={<Notfound />}/>
      </Routes>
    </div>
  );
}

export default App;
