'use client'

import { useState } from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import { AiFillLinkedin, AiFillGithub ,AiFillWechat} from "react-icons/ai"
import Image  from 'next/image'
import deved from '../public/dev-ed-wave.png'
import design from '../public/design.png'
import code from '../public/code.png'
import {RiNetflixFill} from 'react-icons/ri'
import {FcGenericSortingAsc} from 'react-icons/fc'


export default function Home() {
  const [darkMode , setdarkMode] = useState(false)
  const  openlinkedin =()=>{
    // window.location("https://www.linkedin.com/in/dhruv-gaur-609142241");
    window.location.href = "https://www.linkedin.com/in/dhruv-gaur-609142241";
  }
  const opengithub =()=>{
    window.location.href = "https://github.com/dhruvgaur15";
  }
  return (
    
  <div className={darkMode ? "dark":""}>
    <main className='bg-white px-10 md:px-40 dark:bg-gray-900'>
      <section className="  min-h-screen">
        <nav className='py-10 mb-12 flex justify-between'>
          <h1 className=' text-xl font-burtons dark:text-white' >PRESENCE </h1>
         <ul className=' flex items-center'>
          <li> <BsFillMoonStarsFill onClick={()=> setdarkMode(!darkMode)} className='cursor-pointer dark:text-gray-100' 
          /></li>
          <li><a className=' bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a></li>
         </ul>
        </nav>
        <div className='text-center p-10 py-10'>
          <h2 className='text-5xl text-teal-600 font-medium md:text-6xl'>DHRUV GAUR</h2>
          <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>DEVELOPER AND DESIGNER</h3>
          <p className='text-medium py-5 leading-8 text-gray-800 md:text-xl dark:text-white'>HI! I AM A DEVELOPER.</p>
        </div>
        <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
          <AiFillGithub onClick={opengithub} className=" cursor-pointer"/>
          <AiFillLinkedin onClick={openlinkedin} className=" cursor-pointer"/>
        </div>
        <div className='relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:width-96' >
          <Image src={deved} alt='deved' layout='fill' objectFit='cover' />
        </div>
      </section>
      <br />
      <section>
        <div className='  text-center'>
          <h3 className='text-3xl py-1 dark:text-gray-500'>Services I Offer</h3>
          <p className='text-medium py-5 leading-8 text-gray-800 mx-w-xl mx-auto dark:text-white'>I am proficient with Data Structures and Algorithms and worked with languages 
            like <span className='text-teal-500'>C , C++ & Python</span> Working with <span className='text-teal-500'>WEB DEVELOPMENT</span> for about a year
            Its just a starting  <span className='text-teal-500'>LEARNING NEVER STOPS</span></p>        
        </div>
        <div className='lg:grid grid-cols-2 gap-10 mx-auto '>
          <div className='text-center  p-10 rounded-xl my-10 shadow-2xl hover:-translate-y-6 transition-transform-2s dark:bg-white'>
            <Image src={design} alt='design' width={200} height={200} className='m-auto'/>
            <h3 className='text-lg font-medium pt-8 pb-2'>Elegant Coding</h3>
            <p className='py-2'>I design and Develop elegant code for <br /> your start ups and businesses</p>
            <h4 className='py-4 text-teal-600'>Development Tools I Use</h4>
             <p >HTML, CSS, Js</p>
             <p >React-JS</p>
             <p >Next-Js</p>          
             <p >Tailwind-Css</p>
          </div>
          <div className='text-center  p-10 rounded-xl my-10 shadow-2xl hover:-translate-y-6 dark:bg-white'>
            <Image src={code} alt='code' width={200} height={200} className='m-auto'/>
            <h3 className='text-lg font-medium pt-8 pb-2'>Language Proficiency</h3>
            <p className='py-2'>Languages which I've learned and worked upon</p>
            <h4 className='py-4 text-teal-600'>Languages I Use</h4>
             <p >C</p>
             <p >C++</p>
             <p >Python</p>          
             
          </div>
        </div>
        </section>
       <section>
        <div className='text-center'>
          <h3 className='text-3xl py-1 dark:text-gray-500'>Project Experience</h3>
          <div className='lg:grid grid-cols-3 gap-10 mx-auto'>
          <div className='text-center  p-10 rounded-xl my-10 shadow-2xl hover:-translate-y-6 dark:bg-white'>
          <p className='text-medium py-5 leading-8 text-gray-800 '> <span className='text-teal-500'><RiNetflixFill className="mx-auto"/>Netflix Clone</span><br /> 
           Developed a responsive streaming platform replica using react and Tailwind
           leveraged firebase for database management & cloud storage.
           </p> 
           </div>
          <div className='text-center  p-10 rounded-xl my-10 shadow-2xl hover:-translate-y-6 dark:bg-white'>
          <p className='text-medium py-5 leading-8 text-gray-800'>  <span className='text-teal-800'><AiFillWechat className="mx-auto" />Chat-App</span><br /> 
          Designed a real time chat application using React and chakra uI and integrated
          with firebase for backend service and for instant message synchronization.
           </p> 
           </div>
          <div className='text-center  p-10 rounded-xl my-10 shadow-2xl hover:-translate-y-6 dark:bg-white'>
          <p className='text-medium py-5 leading-8 text-gray-800'> <span className=' text-red-300 '> <FcGenericSortingAsc class="mx-auto"/>Sorting Visualizer</span><br /> 
           Developed interactive & visualized demonstration of all the sorting methods
           using HTML , CSS , Javascript and integrated with animation functions.
           </p> 
           </div>
           </div>
        </div>

       </section>
       
    </main>
    </div>
  )
}
