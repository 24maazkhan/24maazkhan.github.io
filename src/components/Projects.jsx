import React from 'react'
import ProjectItem from '@/components/ProjectItem'
import MaazSiteImage from '@/assets/maaz-site.png'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus iste aliquid dignissimos possimus quidem optio vel autem, qui molestiae eius? Sed officia tempora dignissimos cum, dolores omnis impedit illum quasi.</p>
        <div className='grid sm:grid-cols-2 gap-12 p-10'>
            <ProjectItem img={MaazSiteImage} title="Placeholder" description="placeholder"/>
            <ProjectItem img={MaazSiteImage} title="Placeholder" description="placeholder"/>
            <ProjectItem img={MaazSiteImage} title="Placeholder" description="placeholder"/>
        </div>
    </div>
  )
}

export default Projects