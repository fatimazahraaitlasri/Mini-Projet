import './App.css';
import axios from 'axios';
import { useEffect,useState } from 'react';

function App() {
  const [data,setData] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3000')
  })
  return (
    <div className="App">
      <header className="App-header">
        <p>
         hello world
        </p>
      </header>
    </div>
  );
}

export default App;
