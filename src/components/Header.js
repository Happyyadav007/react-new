import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css'
function Header(){
    const [isOpen, setIsopen] = useState(false);
    const navigate = useNavigate();
    const clickHandler =(path)=>{
        navigate(path);
    }
    const hamburgerHandle = ()=>{
        setIsopen(isOpen=>!isOpen);

    }
    return (
        <div className="flex flex-col md:flex-row justify-between items-center p-4 md:p-8 h-auto md:h-16 top-0 w-full bg-white font-sans md:font-serif shadow-md ">
    
        <div className='header-left mb-4 md:mb-0'> 
        <span className='flex flex-col md:flex-row space:y-2 md:spaxe-y-0 md:space-x-4 items-center'>
        <a href="#" className=" rounded-full w-8 h-8 bg-orange-400  flex items-center justify-center"></a>
        <div className="text-center md:text-left">
        <a className="text-lg font-bold" href="#"> Happy Yadav</a>
        <p className="text-sm text-gray-600"> Software Developer </p> 
        </div>
        </span>
        </div>
        <div className='header-right'> 
        <button onClick={hamburgerHandle}  className="md:hidden flex items-center justify-center p-2 text-gray-800 ">Button</button>
    <nav className={`md:flex md:items-center ${isOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
           <li><a href="#" className="hover:underline" onClick={()=>clickHandler('./MainPage')}>Home</a>  <span className="hidden md:inline">|</span></li>
           <li><a href="./happy-yadav-resume.pdf"  rel="noopener noreferrer" className="hover:underline" target="_blank">Resume</a> <span className="hidden md:inline">|</span></li>
           <li><a href="https://github.com/Happyyadav007" className="hover:underline" target="_blank">Projects</a>  <span className="hidden md:inline">|</span></li>
           <li><a href="#" className="hover:underline" onClick={()=>clickHandler('./Contact')}>Contact</a></li>
         </ul>
    </nav>
        </div>
        </div>
    );
}
export default Header;