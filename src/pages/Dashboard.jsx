import {CalendarPlus2 } from "lucide-react"
import ApplicationOverview from "../components/dashboard/ApplicationOverview"
import RecentApplications from "../components/dashboard/RecentApplications"
import StatCard from "../components/dashboard/StatCard"


const Dashboard = () => {
  const currentDate = new Date();
  return (
    <>
      <header>
        <div>
          <h1>Hello Abhishek Tiwari!</h1>
          <p>Here's an overview of your applications.</p>
        </div>
        <div>
          <p><CalendarPlus2 /> {currentDate.toLocaleDateString()}</p>
        </div>
      </header>

      <div>
        <StatCard/>
      </div>


      <div>
        <ApplicationOverview/>
        <RecentApplications/>
      </div>
    </>
  )
}

export default Dashboard
