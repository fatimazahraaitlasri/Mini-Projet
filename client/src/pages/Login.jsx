import React from 'react'
import axios from 'axios';
import { useState } from 'react';
function Login() {
const [password,setpassword] = useState('')
const [email,setemail] = useState('')
const handleSubmit = async (e) => {
  e.preventDefault();
  // console.log('test')
  const fomrData = new FormData()
 
  fomrData.append("email", email)
  fomrData.append("password", password)

   axios.post('http://localhost:5000/login', fomrData,{
    headers : {
      'Content-Type': 'multipart/form-data'
    }
   }
   ).then((res)=> console.log("successs" + res))
    .catch((err)=>console.log(err,"it has an error")) 
  // console.log(img)
}

const handlePassword = (event) => {
  const password = document.getElementById("password").value
  setpassword(password)
  }
  const handleEmailUser = () => {
    const email = document.getElementById("email").value
    setemail(email)
    console.log(email)
    } 
  

  return (
    <div className='w-3/5  flex justify-center items-center mx-72 my-40 '>
      
    <form action=""  onSubmit={handleSubmit} className="flex flex-col justify-center items-center mt-8 mb-5 w-4/5 rounded border py-8 gap-7 ">
   	<div className="flex flex-col justify-center items-center mt-8 mb-5 w-4/5 rounded border py-8 gap-7 ">
      <p className='text-2xl bold'>Login</p>
   		<div className="relative w-4/5">
   		  <input type="text" x-model="email" id='email' name="email" className="w-full px-4 mb-3 rounded border py-2" onChange={() => handleEmailUser()}/>
   		</div>
   	  <div class="relative items-center w-4/5"> 
   			<input type="show ? 'text' : 'password'   " id='password' x-model="password" name="password" class="w-full px-4 mb-5 rounded border py-2  " onChange={() => handlePassword()}/>
   			
	       </div>
           <button type="submit" class="py-1 mb-3 px-3 rounded text-white bg-blue-500 shadow-lg shadow-blue-500/50">Login</button>
   		
   	</div>
     </form>
   </div>
    
  )
}

export default Login
