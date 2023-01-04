import React from 'react'
import { Link } from 'react-router-dom'
function navbar() {
  return (
    <div>
      <div class="shadow bg-white">
  <div class="h-16 mx-auto px-5 flex items-center justify-between">
      <a class="text-2xl hover:text-cyan-500 transition-colors cursor-pointer">Logo</a>
      
      <ul class="flex items-center gap-5">
        {/* <li><Link to="/about">About</Link></li> */}
        <li><a class="hover:text-cyan-500 transition-colors" href="/login">login</a></li>
        <li><a class="hover:text-cyan-500 transition-colors" href="/register">sign Up</a></li>

      </ul>
  </div>
    </div>
    </div>
  )
}

export default navbar
