import './App.css';
import './index.css';
import axios from 'axios';
import { useEffect,useState } from 'react';

function App() {
  const [data,setData] = useState([])
  const [img,setImg] = useState(null)
  const [name,setName] = useState('')

 const handleImage = (event) => {
  setImg(event.target.files[0])
 }

 const handleName = () => {
  const name = document.getElementById("name").value
  setName(name)
 }

  const getImages = () => {
        axios.get('http://localhost:5000').then((res)=> setData(res.data)).catch((err)=>console.log(err,"it has an error"))
  }
  useEffect(()=>{
    getImages();
    // axios.get('http://localhost:5000').then((res)=> setData(res.data)).catch((err)=>console.log(err,"it has an error"))
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log('test')
    const fomrData = new FormData()
    fomrData.append("name", name)
    fomrData.append("testImage", img)
     axios.post('http://localhost:5000', fomrData,{
      headers : {
        'Content-Type': 'multipart/form-data'
      }
     }
     ).then((res)=> console.log("success" + res))
      .catch((err)=>console.log(err,"it has an error")) 
    // console.log(img)
  }



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
        <form  onSubmit={handleSubmit}>
     <div className="flex items-center justify-center w-full">
        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            Image
          </div>
          <input id="dropzone-file" type="file" className="hidden" onChange={(event) => handleImage(event)} name='img' />
        </label>
        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            Name
          </div>
          <input id='name' onChange={() => handleName()} className="hidden" name='name' />
        </label>
      </div>
      <button type='submit' >ok </button>
      </form>
      </div>
      </div>
    
    
  )}


export default App;
