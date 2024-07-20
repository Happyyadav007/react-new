import React from 'react';

function Contact() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-start p-4 bg-white text-2xl">
      <div className="pt-10 lg:pt-40 lg:pr-8 w-full lg:w-1/2 pl-40">
        <h1 className="text-4xl mb-4 text-center lg:text-left">Contact</h1>
        <p className="mb-4 text-center lg:text-left">Looking forward to hearing from you</p>
        <div className="mb-4">
          <p className="font-bold">Phone:</p>
          <p>+918299007827</p>
        </div>
        <div className="mb-4">
          <p className="font-bold">Email:</p>
          <a href="mailto:hy249796@gmail.com" className="text-blue-500 underline">hy249796@gmail.com</a>
        </div>
      </div>
      <div className="flex justify-center p-4 w-full lg:w-1/2">
        <form className="w-full max-w-lg p-4 bg-white shadow-md rounded">
          <div className="mb-4">
            <label htmlFor="fname" className="block text-gray-700 mb-2">First Name</label>
            <input type="text" name="fname" id="fname" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="lname" className="block text-gray-700 mb-2">Last Name</label>
            <input type="text" name="lname" id="lname" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
            <input type="email" name="email" id="email" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-gray-700 mb-2">Subject</label>
            <input type="text" name="subject" id="subject" className="w-full p-2 border rounded" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
            <textarea name="message" id="message" className="w-full p-2 border rounded" rows="4"></textarea>
          </div>
          <div className="flex justify-center">
            <button type="submit" className="p-4 bg-yellow-400 w-32 h-32 text-black hover:bg-white transition duration-500 hover:scale-75 border-solid border-2 border-black rounded-full">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
