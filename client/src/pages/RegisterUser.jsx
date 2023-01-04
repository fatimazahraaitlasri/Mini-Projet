import React from 'react'
import axios from 'axios';
import { useEffect,useState } from 'react';
import navbar from '../component/navbar';

function RegisterUser() {

const [data,setData] = useState([])
const [img,setImg] = useState(null)
const [name,setName] = useState('')
const [fullName,setfullName] = useState('')
const [email,setemail] = useState('')
const [password,setpassword] = useState('')

const handleImage = (event) => {
setImg(event.target.files[0]) 
}

const handleName = () => {
const name = document.getElementById("name").value
setName(name)
}

const handleNameUser = () => {
const fullName = document.getElementById("fullName").value
setfullName(fullName)
console.log(fullName)
}

const handleEmailUser = () => {
const email = document.getElementById("email").value
setemail(email)
console.log(email)
}
const handlePassword = () => {
const password = document.getElementById("password").value
setpassword(password)

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
  fomrData.append("fullName", fullName)
  fomrData.append("email", email)
  fomrData.append("name", name)
  fomrData.append("testImage", img)
  fomrData.append("password", password)

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
    <div>
      
      <header className="">
     
     {/* <div className='flex justify-center items-center gap-8 bg-slate-200 h-72 p-40 rounded-lg mx-24'>
   {data?.map((singleData)=>{
     const base64String = btoa (
       String.fromCharCode(...new Uint8Array((singleData.img.data.data))));
      return <img src={`data:image/png;base64,${base64String}`} className='w-60 h-60 rounded-lg' />
   })}
  </div> */}

   </header>
   <div>
     {/* <form  onSubmit={handleSubmit}>
  <div className="flex flex-col gap-2 items-center justify-center w-full">
     <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-1/5 h-18 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
       
         Image
     </label>  
       <input id="dropzone-file" type="file" className="bg-gray-800" onChange={(event) => handleImage(event)} name='img' />
  
     <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center  w-1/5 h-18 border-2 border-red-400 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
       
         Name
     </label>
       <input id='name' onChange={() => handleName()} className="bg-gray-800" name='name' />
   </div>
   <button type='submit' >ok </button>
   </form> */}


   
   </div>  







   <div class="flex items-center justify-center p-12">
   
{/* <!-- Author: FormBold Team -->
<!-- Learn More: https://formbold.com --> */}
<div class="mx-auto w-full max-w-[550px]">
 <form action="https://formbold.com/s/FORM_ID" method="POST"  onSubmit={handleSubmit}>
   <div class="mb-5">
     <label
       for="name"
       class="mb-3 block text-base font-medium text-[#07074D]"
     >
       Full Name
     </label>
     <input
       type="text"
       name="fullName"
       id="fullName"
       placeholder="Full Name"
       class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
       onChange={() => handleNameUser() }
     />  
   </div>          

   <div class="mb-5">
     <label
       for="subject"
       class="mb-3 block text-base font-medium text-[#07074D]"
     >
       email 
     </label>
     <input
     id='email' onChange={() => handleEmailUser()} className="bg-gray-800" name='email' type='email' placeholder="example@domain.com"
       class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
     />
   </div> 

   <div class="mb-5">
     <label
       for="subject"
       class="mb-3 block text-base font-medium text-[#07074D]"
     >
       password 
     </label>
     <input
     id='password' onChange={() => handlePassword()} className="bg-gray-800" name='email' type='password' placeholder="**********"
       class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
     />
   </div>
    <div class="mb-5">
     <label
       for="subject"
       class="mb-3 block text-base font-medium text-[#07074D]"
     >
       name Image
     </label>
     <input
     id='name' onChange={() => handleName()} className="bg-gray-800" name='name' type='text'
       class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
     />
   </div>
   <div class="mb-5">
     <label
       for="subject"
       class="mb-3 block text-base font-medium text-[#07074D]"
     >
       Image
     </label>
     <input
       type="file"
       id="subject"
       placeholder="Enter your subject"
       onChange={(event) => handleImage(event)} 
       name='img' 
       class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
     />
   </div>
   <div>
     <button
       class="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-base font-semibold text-white outline-none"
       type='submit'
     >
       Submit
     </button>
   </div>
 <navbar/>
 </form>

</div>
</div>















    </div>
  )
}

export default RegisterUser





























    