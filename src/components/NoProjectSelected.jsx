import React from 'react'
import noProject from "../assets/no-projects.png"
import Button from './Button'
export default function NoProjectSelected({onStartAddProject}) {
  return (
    <div className='mt-2 text-center w-2/3 '>
        <img src={noProject} alt="An empty task " className='w-16 h-16 object-contain mx-auto mt-[8rem]'/>
        <h2 className='text-xl font-bold text-stone-500 my-4  '>No Project Selected </h2>
        <p className='text-stone-400 mb-4 '>Select project or get started with new project </p>
        <Button onClick={onStartAddProject}>Create New Project </Button>
    </div>
  )
}
