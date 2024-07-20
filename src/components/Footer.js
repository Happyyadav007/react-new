import React from 'react'; 
function footer(){
    return (
        <>
        <hr></hr>
            <div className='footer flex flex-col md:flex-row p-8 h-auto md:h-16 bottom-0 justify-between w-full bg-white items-center md:items-start mt-6 mb-20 font-serif'>
            <div className="mb-4 md:mb-0">
                <p className="font-bold xl">Phone </p>
                <p className="pt-2 font-normal text-sm text-gray-500 font-sans">+918299007827</p>
                </div>
                <div className="mb-4 md:mb-0">
                <p className="font-bold text-xl">Email : </p>
                <a className="pt-2 font-normal text-sm text-gray-500 font-sans" href="mailto:hy249796@gmail.com"> hy249796@gmail.com</a>
                </div>
                <div className="mb-4 md:mb-0">
                <p className="font-bold text-xl">Follow me</p> 
                <div className="flex space-x-4 pt-2">
                <a href="https://www.linkedin.com/in/happyyadav/" className="hover: transition duration-500 hover:scale-150 inline-block"> <img src="./images/linkedin.png" className='h-6 w-6'/></a>
                <a href="https://x.com/HappyYa59012634" className="hover: transition duration-500 hover:scale-150 inline-block "> <img src="./images/twitter.png" className='h-6 w-6'/></a>
                <a href="https://github.com/Happyyadav007" className="hover: transition duration-500 hover:scale-150 inline-block "> <img src="./images/github.png" className='h-6 w-6'/></a>
                <a href="https://www.instagram.com/yadav_happy077/" className="hover: transition duration-500 hover:scale-150  inline-block "> <img src="./images/instagram.png" className='h-6 w-6'/> </a>
                </div>
               </div>
                <div className='text-sm text-center md:text-left text-gray-500 font-sans'>&copy; 2024 Happy Yadav<br /> Powered and Secured by React
                </div>
                </div>
        </>
    );
}
export default footer;