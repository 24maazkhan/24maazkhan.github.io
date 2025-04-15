import React from 'react';
import { AiOutlineMail, AiOutlinePhone, AiFillLinkedin } from 'react-icons/ai';

const Contact = () => {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Contact</h1>
      <p className="text-center py-8">
        Feel free to reach out through any of the methods below!
      </p>

      <div className="grid sm:grid-cols-3 gap-12 p-10 text-center">

          <a
            href="mailto:ma36khan@uwaterloo.ca"
            className="flex flex-col items-center space-y-2 text-gray-800 hover:text-[#001b5e]"
          >
            <AiOutlineMail size={40} />
            <span>ma36khan@uwaterloo.ca</span>
          </a>

          <div className="flex flex-col items-center space-y-2 text-gray-800">
            <AiOutlinePhone size={40} />
            <span>+1 (825) 712-9244</span>
          </div>

          <a
            href="https://www.linkedin.com/in/maazkhan4"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-2 text-gray-800 hover:text-[#001b5e]"
          >
            <AiFillLinkedin size={40} />
            <span>linkedin.com/in/maazkhan4</span>
          </a>

      </div>
    </div>
  );
};

export default Contact;
