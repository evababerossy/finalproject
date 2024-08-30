import React from 'react'

const Skills = () => {
  return (
    <div className='px-4 py-12 space-y-8'>
    <h2 className='text-center font-semibold text-3xl'>SKILLS</h2>
     <div className='gridgrid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
      <div className='border p-7 rounded-lg bg-blue-800/50'>
      <h3 className='font-bold text-2xl border text-center p-7 text-white'>HTML 5</h3>
      </div>
      <div className=''>
      <div className='border p-7 rounded-lg bg-blue-800/50'>
      <h3 className='font-bold text-2xl border text-center p-7 text-white'>CSS 3</h3>
      </div>
     </div>
     <div className=''>
      <div className='border p-7 rounded-lg bg-blue-800/50'>
      <h3 className='font-bold text-2xl border text-center p-7 text-white'>Next.js</h3>
      </div>
     </div>
     <div className=''>
      <div className='border p-7 rounded-lg bg-blue-800/50'>
      <h3 className='font-bold text-2xl border text-center p-7 text-white'>TailwindCSS</h3>
      </div>
     </div>
     </div>
   
    </div>
  )
}

export default Skills