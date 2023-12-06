import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom";
import About from './pages/About';
import Home from './pages/Home';
import Notfound from './pages/Notfound';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/*' element={<Notfound />}/>
      </Routes>
    </div>
  );
}

export default App;
