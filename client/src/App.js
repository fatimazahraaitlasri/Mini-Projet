import './App.css';
import './index.css';
import Register from './pages/RegisterUser'
import Login from './pages/Login';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from './component/navbar';


function App() {
  return(
    <div>
      <Navbar/>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    );
    </div>
)}


export default App;
