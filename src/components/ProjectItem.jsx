import React, { useState } from 'react';

const ProjectItem = ({ img, title, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <div className="relative flex items-center justify-center h-auto w-full rounded-xl shadow-xl shadow-gray-400 group hover:bg-[#001b5e] hover:opacity-60">
        <img src={img} alt={title} className="rounded-xl group-hover:opacity-10" />
        <div className="hidden group-hover:flex flex-col items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-center">
          <h3 className="text-2xl font-bold text-white tracking-wider">{title}</h3>
          <p className="pb-4 pt-2 text-white">{description}</p>
          <button onClick={() => setIsModalOpen(true)} className="mt-2 px-4 py-2 bg-white text-[#001b5e] rounded hover:bg-gray-200 text-sm font-semibold">
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
