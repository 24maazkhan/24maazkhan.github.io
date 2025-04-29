import React from 'react';
import ProjectItem from '@/components/ProjectItem';
import MaazSiteImage from '@/assets/maaz-site.png';
import airplaneCAD from '@/assets/project-images/airplane-cad.png'; 
import droneGearCAD from '@/assets/project-images/drone-gear-cad.png';
import escCaseCAD from '@/assets/project-images/esc-case-cad.png';
import groupPuzzleCAD from '@/assets/project-images/group-puzzle-cad.png';
import steelJigCAD from '@/assets/project-images/steel-jig-cad.png';
import MacroplannerSoftware from '@/assets/project-images/macroplanner-software.png';
import EAMobile from '@/assets/project-images/ea-mobile.png';
import EAWeb from '@/assets/project-images/ea-web.png';
import DocumentScanner from '@/assets/project-images/document-scanner.png';

const Projects = () => {
  return (
<div id='projects' className='max-w-[1040px] m-auto md:pl-20 py-16'>
  <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
  <p className='text-center py-8'>
    A collection of my personal and professional projects, ranging from web development to mechanical modeling, utilizing a variety of tools.
  </p>
  <div className='pb-6'>
    <h2 className='text-2xl font-semibold text-left text-[rgb(0,27,94)] mb-4'>Software Projects</h2>
    <div className='grid sm:grid-cols-2 gap-12 p-4'>
      <ProjectItem img={MacroplannerSoftware} title="AI-Powered Weekly Macro Planner" description="React/NextJS, FastAPI/Python, AWS" />
      <ProjectItem img={DocumentScanner} title="Computer Vision Document Scanner" description="OpenCV, PyTesseract, React/NextJS, Flask" />
      <ProjectItem img={EAWeb} title="Earning Alpha Web App" description="React/NextJS, Flask/Python, AWS, PostgreSQL" />
      <ProjectItem img={EAMobile} title="Earning Alpha Mobile Web App" description="React/NextJS, Flask/Python, AWS, TailwindCSS" />
      
    </div>
  </div>
  <div>
    <h2 className='text-2xl font-semibold text-left text-[#001b5e] mb-4'>Mechanical Projects</h2>
    <div className='grid sm:grid-cols-2 gap-12 p-4'>
      <ProjectItem img={droneGearCAD} title="UWARG Competition Drone Landing Gear" description="SolidWorks" />
      <ProjectItem img={escCaseCAD} title="UWARG ESC Case" description="SolidWorks" />
      <ProjectItem img={airplaneCAD} title="SR-71 Blackbird Airplane" description="SolidWorks (Drafting + Assembly)" />
      <ProjectItem img={steelJigCAD} title="Steel Jig Machining Guide" description="SolidWorks (Drafting)" />
      <ProjectItem img={groupPuzzleCAD} title="Collaborative 3D Design and Manufacturing Project" description="SolidWorks, 3D Printing" />

    </div>
  </div>
</div>
  )
}

export default Projects