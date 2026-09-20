import React from 'react'

const ApplicationFilters = () => {
  return (
    <div>
            <header className='flex justify-between p-2'>
        <div className='flex gap-3'>
          <h2 className='py-1 text-md flex items-center font-medium cursor-pointer hover:bg-gray-300 bg-white px-3 rounded-md'>All Status</h2>


          <h2 className='py-1 flex items-center text-md font-medium cursor-pointer hover:bg-gray-300 bg-white px-3 rounded-md'>All Positions</h2>


          <h2 className='py-1 flex items-center text-md font-medium cursor-pointer hover:bg-gray-300 bg-white px-3 rounded-md'>Newest Form</h2>

        </div>
        <div>
          <button className='p-2 flex items-center bg-blue-800 text-white font-medium rounded-md cursor-pointer hover:bg-blue-900'>Add Applications</button>
        </div>
      </header>
    </div>
  )
}

export default ApplicationFilters
