import React from 'react';
import { useNavigate } from 'react-router-dom';
function Header(){
    const navigate = useNavigate();
    const clickHandler =(path)=>{
        navigate(path);
    }
    return (
        <div className="flex justify-between p-8 h-16 top-0 w-full bg-white font-sans md:font-serif">
        
        <div className='header-left'> 
        <span className='flex space-x-4 items-center'>
        <a href="#" className=" rounded-full w-5 h-5 bg-orange-400 flex"></a>
        <a className="text-lg font-bold" href="#"> Happy Yadav</a>
        <p className="text-base text-sm"> Software Developer </p> 
        </span></div>
        <div className='header-right'> 
    <nav className="header-right-a">
        <ul className="flex space-x-4">
           <li><a href="#" className="hover:underline" onClick={()=>clickHandler('./MainPage')}>Home</a>  <span> |</span></li>
           <li><a href="https://drive.google.com/drive/folders/1FaRPq_-BXLOqErxHa_JSQCBWRhVS0umW?usp=sharing" className="hover:underline" target="_blank">Resume</a>  <span> |</span></li>
           <li><a href="https://github.com/Happyyadav007" className="hover:underline" target="_blank">Projects</a>  <span> |</span></li>
           <li><a href="#" className="hover:underline" onClick={()=>clickHandler('./Contact')}>Contact</a></li>
         </ul>
    </nav>
        </div>
        </div>
    );
}
export default Header;