import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Support from './pages/Support';
import Events from './pages/Events';
// import News from './pages/News';
import Contact from './pages/Contact';
import Notfound from './pages/Notfound';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />
        <Route path="/events" element={<Events />} />
        {/* <Route path="/news" element={<News />} /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path='/*' element={<Notfound />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
