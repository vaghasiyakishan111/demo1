import logo from './logo.svg';
import './App.css';
import Aboutus from './Aboutus';
import { Routes, Route } from "react-router-dom"
import Home from './Home';

function App() {



  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />

      </Routes>

      
    </div>

  );
}

export default App;
