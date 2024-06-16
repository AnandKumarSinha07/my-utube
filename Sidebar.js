import React from 'react'
import { useSelector } from 'react-redux'

export const Sidebar = () => {

  const selector=useSelector(store=>store.app.isMenuOpen);

  //Early return 
  if(!selector) return null;

  return (
    <div className='p-5 shadow-lg w-3/4 overflow-y-scroll pb-4' >
    
      <ul className='font-medium border-b-2 my-4 leading-8 '>
        <li>Home</li>
        <li>Shots</li>
        <li>subscription</li>
        <li>Library</li>
      </ul>

      <h1 className='font-extrabold text-xl pt-5 py-4'>Home</h1>
      <ul className='font-medium border-b-2 leading-9'>
        <li>Your channel</li>
        <li>History</li>
        <li>your videos</li>
        <li>watch later</li>
      </ul>

      <h1 className='font-extrabold text-xl pt-5 py-4'>Explore</h1>
      <ul className='font-medium leading-9'>
        <li>Trending</li>
        <li>shopping</li>
        <li>Films</li>
        <li>Live</li>
        <li>Gaming</li>
        <li>News</li>
        <li>sport</li>
        <li>courses</li>

      </ul>
    </div>
  )
}
