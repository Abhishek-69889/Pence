import {MoveRight} from 'lucide-react'

const RecentApplications = () => {
  return (
    <div className='w-[60%] bg-white h-96 rounded-lg'>
      <div className='w-full flex justify-between px-2 py-2'>
        <h1>Recent Applications</h1>
        <button className='flex gap-1 align-center text-[15px]'>View all <span><MoveRight size={20}/></span></button>
      </div>

      <div className='w-full h-0.5 bg-gray-500'></div>

      <div>
        <div>
          <img src="" alt="logo" />
          <div>
            <h3>Google</h3>
            <p>Frontend Developer</p>
          </div>
        </div>
        <div>
          <p>Interview</p>
          <p>10 Sep 2025</p>
        </div>
      </div>
    </div>
  )
}

export default RecentApplications
