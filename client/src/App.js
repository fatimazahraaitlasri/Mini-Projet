import './App.css';
import axios from 'axios';
import { useEffect,useState } from 'react';

function App() {
  const [data,setData] = useState([])
  const [img,setImg] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:5000').then((res)=> setData(res.data)).catch((err)=>console.log(err,"it has an error"))   
  })
  const addImage = ()=>{}
  return (
    <div className="App">
      <header className="App-header">
        <p>
         hello world
        </p>
        <h1>
         hello world
        </h1>
        <div>
      {data?.map((singleData)=>{
        const base64String = btoa (
          String.fromCharCode(...new Uint8Array((singleData.img.data.data))));
         return <img src={`data:image/png;base64,${base64String}`} width="300"/>
      })}
     </div>

      </header>
      <div>
     <div className="flex items-center justify-center w-full">
        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>
      </div>
      </div>
    
    
  )}


export default App;
