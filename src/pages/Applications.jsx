import React from 'react'
import RecentApplicationList from '../components/dashboard/RecentApplicationList'
import ApplicationFilters from '../components/applications/ApplicationFilters';


const Applications = () => {

  const jobApplications = [
  {
    companyLogo: "https://cdn.simpleicons.org/google",
    companyName: "Google",
    role: "Frontend Engineer",
    dateOfApply: "2026-09-01",
    status: "Interview"
  },
  {
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEJANb0XItp3xw1MB-dF4ccHxxCtgDc7auj-nAXlk-vw&s=10",
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
    companyLogo: "https://cdn.simpleicons.org/google",
    companyName: "Google",
    role: "Frontend Engineer",
    dateOfApply: "2026-09-01",
    status: "Interview"
  },
  {
    companyLogo: "https://cdn.simpleicons.org/apple",
    companyName: "Apple",
    role: "iOS Engineer",
    dateOfApply: "2026-09-06",
    status: "Applied"
  },
  {
    companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgEqbuwqCKDd0lXCnz4xhJuy_yarJ3IhsdXlqowMPNFw&s=10",
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
    <div>
      <ApplicationFilters/>

      <main className='py-4'>
        <h1 className='text-xl font-semibold'>All Applications({jobApplications.length})</h1>
        <div className='py-2'>

        {
          jobApplications.map((application,id)=>{
            return (
              <RecentApplicationList key={id} application={application}/>
            )
          })
        }
        </div>
      </main>
    </div>
  )
}

export default Applications
