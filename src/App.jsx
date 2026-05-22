import { useState } from 'react'

import './App.css'

function App() {
  
  //We will default for phone screens, and then we will add media queries for larger screens
  //sm: for mobile devices
  //md: for tablets
  //lg: for laptops and desktops

  return (
    <>
      <div className=' lg:grid-cols-[30%_70%] grid h-screen w-screen grid-cols-8'>

        <div>
          <div className='h-[40px]'>
            Education
          </div>
          <div className=''>
            Projects
          </div>
          <div className=''>
            Experience
          </div>
          <div>
            Skills
          </div>
        </div>

      </div>
    </>
  )
}

export default App
