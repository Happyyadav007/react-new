import "./MainPage.css";
import React from 'react';
function MainPage(){
    return(
        <>
                <div className="flex flex-col md:flex-row mt-16 mb-16 p-4 items-center md:items-start space-y-8 space-y-0 md-:space-x-8 font-sans md:font-serif bg-white justify-center transition-transform duration-300 ease-in-out transform hover:scale-105">
                <div className="flex flex-col p-2 w-full md:w-1/2"> <img className="hover:transition duration-500 hover:scale-75 object-cover w-full h-auto" src='./images/happy.png' alt="Happy-yadav-pic"/> </div>
                <div className=" flex flex-col space-y-4 w-full md:w-1/2 p-4 text-center md:text-left">
                <div className="mb-8"><h1 className="text-8xl md:text-6xl lg:text-8xl font-bold mb-4"> Hello </h1>
                <h2 className="text-2xl md:text-4xl font-semibold mt-4">A bit about me</h2>
                <p className="mt-4 ">
                Hello, I'm Happy Yadav, a Computer Applications graduate from<br></br>the prestigious Greater Noida Institute of Technology. 
                Tech Enthusiast<br></br> Proficient in C, Core Java, DSA, MySQL, and AWS. <br></br>
                </p>
                </div>
                <div className="flex justify-center md:justify-between mt-8">
                <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 border-black">
                   <li><a href="#" className="hover:bg-white transition duration-500 hover:scale-75 w-24 h-24 md:w-32 md:h-32 bg-sky-300 text-black  text-xl md:text-xl font-bold flex items-center justify-center rounded-full border-solid border-2 border-black">Resume</a></li>
                   <li><a href="#" className="hover:bg-white transition duration-500 hover:scale-75 w-24 h-24 md:w-32 md:h-32 bg-red-500 text-black text-xl md:text-xl font-bold flex items-center justify-center rounded-full border-solid border-2 border-black">Projects</a></li>
                   <li><a href="#" className="hover:bg-white transition duration-500 hover:scale-75 w-24 h-24 md:w-32 md:h-32 bg-yellow-400 text-black text-xl md:text-xl font-bold flex items-center justify-center rounded-full border-solid border-2 border-black">Contact</a></li>
                 </ul>
                 </div>
                </div>
                </div>

        </>
    );
}
export default MainPage;