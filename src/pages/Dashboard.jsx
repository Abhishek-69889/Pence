import {CalendarPlus2 } from "lucide-react"
import ApplicationOverview from "../components/dashboard/ApplicationOverview"
import RecentApplications from "../components/dashboard/RecentApplications"
import StatCard from "../components/dashboard/StatCard"


const Dashboard = () => {
  const today = new Date();

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const elegantDate = today.toLocaleDateString('en-US', options);
  return (
    <>
    <div className="w-full h-full px-5  absolute top-16 z-0 bg-[#e5e3db]">

      <header className=" flex justify-between  py-5 items-center">
        <div>
          <h1 className="text-2xl font-bold">Hello Abhishek Tiwari!</h1>
          <p className="text-gray-500">Here's an overview of your applications.</p>
        </div>
        <div className="flex gap-3 items-center text-gray-500 text-[15px]">
          <CalendarPlus2 /> 
          <p>{elegantDate}</p>
        </div>
      </header>

      <div className="flex gap-2">
        <StatCard/>
        <StatCard/>
        <StatCard/>
        <StatCard/>
        <StatCard/>
        <StatCard/>
      </div>


      <div className="flex gap-3 py-5">
        <ApplicationOverview/>
        <RecentApplications/>
      </div>
    </div>
    </>
  )
}

export default Dashboard
