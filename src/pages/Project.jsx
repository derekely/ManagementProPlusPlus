import React from 'react';
import ProjectsList from '../components/ProjectsList';

function Project() {
  return (
    <div className='flex justify-center mt-6'>
      <div className='w-3/4'>
        <h1 className='text-3xl font-semibold ml-3 mb-4'>Your Projects</h1>
        <ProjectsList />
      </div>
    </div>
  );
}

export default Project;
