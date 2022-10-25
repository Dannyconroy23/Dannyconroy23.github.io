
import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home"
import Navbar from './Components/Navbar';
import Links from "./Components/Links"
import About from './Components/About';
import Blogs from './Components/Blogs';

function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route className="Navbar" path="/" element={<Navbar />}>
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Links" element={<Links />} />
        <Route path="/Blogs" element={<Blogs />} />
      </Route>
       </Routes>
    </BrowserRouter>
    
  );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
