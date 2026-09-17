import {MoveRight} from 'lucide-react'
import RecentApplicationList from './RecentApplicationList'

const RecentApplications = () => {
  
const jobApplications = [
  {
    companyLogo: "https://cdn.simpleicons.org/google",
    companyName: "Google",
    role: "Frontend Engineer",
    dateOfApply: "2026-09-01",
    status: "Interview"
  },
  {
    companyLogo: "https://cdn.simpleicons.org/microsoft",
    companyName: "Microsoft",
    role: "Software Engineer II",
    dateOfApply: "2026-09-03",
    status: "Pending"
  },
  {
    companyLogo: "https://cdn.simpleicons.org/netflix",
    companyName: "Netflix",
    role: "Full Stack Developer",
    dateOfApply: "2026-09-05",
    status: "Rejected"
  },
  {
    companyLogo: "https://cdn.simpleicons.org/apple",
    companyName: "Apple",
    role: "iOS Engineer",
    dateOfApply: "2026-09-06",
    status: "Applied"
  },
  {
    companyLogo: "https://cdn.simpleicons.org/amazon",
    companyName: "Amazon",
    role: "Cloud Architect",
    dateOfApply: "2026-09-08",
    status: "Interview"
  },
  {
    companyLogo: "https://cdn.simpleicons.org/meta",
    companyName: "Meta",
    role: "Product Engineer",
    dateOfApply: "2026-09-10",
    status: "Pending"
  },
  {
    companyLogo: "https://cdn.simpleicons.org/stripe",
    companyName: "Stripe",
    role: "Backend Engineer",
    dateOfApply: "2026-09-11",
    status: "Applied"
  },
  {
    companyLogo: "https://cdn.simpleicons.org/airbnb",
    companyName: "Airbnb",
    role: "UI/UX Developer",
    dateOfApply: "2026-09-13",
    status: "Offer"
  },
  {
    companyLogo: "https://cdn.simpleicons.org/github",
    companyName: "GitHub",
    role: "DevOps Engineer",
    dateOfApply: "2026-09-14",
    status: "Rejected"
  },
  {
    companyLogo: "https://cdn.simpleicons.org/uber",
    companyName: "Uber",
    role: "Data Engineer",
    dateOfApply: "2026-09-16",
    status: "Pending"
  }
];



  return (
    <div className='w-[60%] h-96 bg-white rounded-lg overflow-y-scroll'>
      <div className='w-full flex items-center justify-between px-2 py-2'>
        <h1 className='font-bold'>Recent Applications</h1>
        <button className='flex gap-1 align-center text-[15px] font-semibold cursor-pointer py-1 px-2 bg-gray-200 rounded-sm hover:bg-gray-300 '>View all <span><MoveRight /></span></button>
      </div>

      <div className='w-full h-0.5 bg-gray-500'></div>

      <div className=''>
        {
          jobApplications.map((application,id)=>{
            return (
              <RecentApplicationList key={id} application={application}/>
            )
          })
        }
      
      </div>
    </div>
  )
}

export default RecentApplications
