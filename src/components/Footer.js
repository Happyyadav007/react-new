import React from 'react'; 
function footer(){
    return (
        <>
        <hr></hr>
            <div className='footer flex p-8 h-16 bottom-0 justify-between w-full bg-white mt-6 mb-20 font-serif'>
                <p className="font-bold 2xl">Phone <p className="flex pt-2 font-normal text-sm text-gray-500 font-sans">+918299007827</p></p>
                <p className="font-bold 2xl">Email : <br></br> <a className="flex pt-2 font-normal text-sm text-gray-500 font-sans" href="mailto:hy249796@gmail.com">hy249796@gmail.com</a></p>
                <p className="font-bold 2xl">Follow me<br></br> 
                <a href="https://www.linkedin.com/in/happyyadav/" className="hover: transition duration-500 hover:scale-150 inline-block pt-2"> <img src="./images/linkedin.png" className='h-6 w-6'/></a>
                <a href="https://x.com/HappyYa59012634" className="hover: transition duration-500 hover:scale-150 inline-block "> <img src="./images/twitter.png" className='h-6 w-6'/></a>
                <a href="https://github.com/Happyyadav007" className="hover: transition duration-500 hover:scale-150 inline-block "> <img src="./images/github.png" className='h-6 w-6'/></a>
                <a href="https://www.instagram.com/yadav_happy077/" className="hover: transition duration-500 hover:scale-150  inline-block "> <img src="./images/instagram.png" className='h-6 w-6'/> </a>
                 </p>
                <p className='text-sm text-gray-500 font-sans'>&copy; 2024 Happy Yadav<br></br> Powered and Secured by React</p>
                </div>
        </>
    );
}
export default footer;