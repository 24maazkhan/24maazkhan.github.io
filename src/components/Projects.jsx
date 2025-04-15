import React from 'react';
import ProjectItem from '@/components/ProjectItem';
import MaazSiteImage from '@/assets/maaz-site.png';
import airplaneCAD from '@/assets/project-images/airplane-cad.png'; 
import droneGearCAD from '@/assets/project-images/drone-gear-cad.png';
import escCaseCAD from '@/assets/project-images/esc-case-cad.png';
import groupPuzzleCAD from '@/assets/project-images/group-puzzle-cad.png';
import steelJigCAD from '@/assets/project-images/steel-jig-cad.png';

const Projects = () => {
  return (
<div id='projects' className='max-w-[1040px] m-auto md:pl-20 py-16'>
  <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
  <p className='text-center py-8'>
    A collection of my personal and professional projects, ranging from web development to mechanical modeling, utilizing a variety of tools.
  </p>
  <div className='pb-6'>
    <h2 className='text-2xl font-semibold text-left text-[#001b5e] mb-4'>Software Projects</h2>
    <div className='grid sm:grid-cols-2 gap-12 p-4'>
      <ProjectItem img={MaazSiteImage} title="Placeholder" description="placeholder" />
      <ProjectItem img={MaazSiteImage} title="Placeholder" description="placeholder" />
    </div>
  </div>
  <div>
    <h2 className='text-2xl font-semibold text-left text-[#001b5e] mb-4'>Mechanical Projects</h2>
    <div className='grid sm:grid-cols-2 gap-12 p-4'>
      <ProjectItem img={droneGearCAD} title="Placeholder" description="placeholder" />
      <ProjectItem img={escCaseCAD} title="Placeholder" description="placeholder" />
      <ProjectItem img={airplaneCAD} title="Placeholder" description="placeholder" />
      <ProjectItem img={steelJigCAD} title="Placeholder" description="placeholder" />
      <ProjectItem img={groupPuzzleCAD} title="Placeholder" description="placeholder" />

    </div>
  </div>
</div>
  )
}

export default Projects