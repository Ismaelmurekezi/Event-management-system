import React from 'react'

const HeaderSection = () => {
  return (
    <div className='flex flex-wrap gap-16 px-10 mt-3'>
      <div className='flex flex-col flex-1 pt-16'>
        <h2 className='text-3xl font-bold pb-7'>WELCOME TO EVENTA</h2>
        <p className='text-xl'>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries,
        </p>
      </div>
      <img src="https://img.freepik.com/free-photo/people-taking-part-high-protocol-event_23-2150951243.jpg"  className='flex-1 max-h-[400px] rounded-lg'/>
    </div>
  );
}

export default HeaderSection