import React, { useState } from 'react';

const ProjectItem = ({ img, title, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className="relative w-full rounded-xl shadow-xl shadow-gray-400 overflow-hidden group">
        <img src={img} alt={title} className="rounded-xl w-full h-auto group-hover:opacity-10 transition-opacity duration-300" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 group-hover:opacity-100 bg-[#001b5e]/90 px-4 transition-opacity duration-300">
          <h3 className="text-2xl font-bold text-white tracking-wider break-words">{title}</h3>
          <p className="pb-4 pt-2 text-white break-words">{description}</p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-2 px-4 py-2 bg-white text-[#001b5e] rounded hover:bg-gray-200 text-sm font-semibold"
          >
            Enlarge Image
          </button>
        </div>
      </div>


      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center">
          <button className="absolute top-16 right-6 text-white text-3xl font-bold hover:text-red-400 p-3 rounded-full transition-colors duration-150" onClick={() => setIsModalOpen(false)}>
            ×
          </button>
          <img
            src={img}
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-lg border-4 border-white"
          />
        </div>
      )}
    </div>
  );
};

export default ProjectItem;
