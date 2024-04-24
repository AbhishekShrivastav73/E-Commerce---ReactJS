import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { IoCartOutline } from "react-icons/io5";
import { IoMenuOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

function Navbar() {

    const [isOpen, setIsOpen] =  useState(false);
    const toggleMenu = () =>{
        setIsOpen(!isOpen);
        
    }

  return (
    <div className='flex items-center justify-between px-4 py-3 border-b-4 '>
        <h1 className='font-bold text-2xl w-[30%]'>Shopify</h1>
        <div className=' items-center gap-4  justify-center px-6 hidden md:flex'>
        {[{
            menu : 'Home', route : '/home'
        },{menu : 'Contact',route : '/contact'},{menu :"About", route : "/about"},{menu : 'Sign Up', route : "/signup"}].map(function(elem,index){
            return (
                <Link key={index} to={elem.route} className='font-semibold'>{elem.menu}</Link>
            )
        })}
        </div>
        <div className='flex items-center gap-4'>
            <div className='hidden md:flex bg-gray-200 rounded-sm  items-center relative w-64 h-8 justify-end '>
            <input className='bg-transparent placeholder-gray-600 absolute top-0 w-full h-full p-3' type="text" placeholder='What are you looking for?' />
            <CiSearch className='mr-2' />
            </div>
            <GoHeart className='text-xl' />
            <IoCartOutline className='text-xl'/>
            <IoMenuOutline onClick={toggleMenu} className='text-xl md:hidden' />
        </div>
        {
            isOpen && (
                <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-50'>
                    <div className='absolute top-0 left-0 w-[60%] h-full bg-white p-8 '>
                    <IoClose onClick={toggleMenu} className='absolute right-10 top-10 text-2xl' />
                        <h1 className='font-bold text-3xl w-[30%] mb-8 '>Shopify</h1>
                        <div className='flex flex-col gap-4'>
                        {[{
            menu : 'Home', route : '/home'
        },{menu : 'Contact',route : '/contact'},{menu :"About", route : "/about"},{menu : 'Sign Up', route : "/signup"}].map(function(elem,index){
            return (
                <Link key={index} to={elem.route} className='font-semibold text-xl'>{elem.menu}</Link>
            )
        })}
                        </div>
                    </div>
                    </div>
                    )
        }
    </div>
  )
}

export default Navbar