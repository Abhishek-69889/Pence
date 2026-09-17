import React from 'react'

const RecentApplicationList = (props) => {
    console.log(props.application);
    

  return (
    <div className='bg-gray-100 cursor-pointer hover:bg-gray-200 flex items-center justify-between  mt-2 p-2'>
        <div className='flex gap-5 items-center'>
          <img src={props.application.companyLogo} 
          className='w-8 h-8 rounded-full'
          alt="logo" />
          <div className='flex gap-10'>
            <h3>{props.application.companyName}</h3>
            <p className='text-gray-500'>{props.application.role}</p>
          </div>
        </div>
        <div className='flex gap-5 items-center'>
          <p>{props.application.status}</p>
          <p className='text-gray-500'>{props.application.dateOfApply}</p>
        </div>
      </div>
  )
}

export default RecentApplicationList
