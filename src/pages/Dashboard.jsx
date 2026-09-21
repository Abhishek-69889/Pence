import {CalendarPlus2 } from "lucide-react"
import ApplicationOverview from "../components/dashboard/ApplicationOverview"
import RecentApplications from "../components/dashboard/RecentApplications"
import StatCard from "../components/dashboard/StatCard"
import {File,Plus,Send,HeartX,NotebookPen,X,Wand} from 'lucide-react'

const Dashboard = () => {

  const StatCardData=[
    {
      icon:File,
      title:"Total Applications",
      count:"24",
      update:"+2 this week",
      iconColor:"text-blue-700",
      iconBgColor:"bg-blue-200"
    },
    {
      icon:Send,
      title:"Applied",
      count:"8",
      update:"+2% of the total",
      iconColor:"text-purple-700",
      iconBgColor:"bg-purple-200"
    },
    {
      icon:HeartX,
      title:"Shortlisted",
      count:"5",
      update:"+2% of total",
      iconColor:"text-yellow-700",
      iconBgColor:"bg-yellow-200"
    },
    {
      icon:NotebookPen,
      title:"Interview",
      count:"6",
      update:"+2% of total",
      iconColor:"text-green-700",
      iconBgColor:"bg-green-200"
    },
    {
      icon:X,
      title:"Rejected",
      count:"3",
      update:"-5% of total",
      iconColor:"text-red-700",
      iconBgColor:"bg-red-200"
    },
    {
      icon:Wand,
      title:"Selected",
      count:"2",
      update:"+3% of total",
      iconColor:"text-purple-700",
      iconBgColor:"bg-purple-200"
    },
  ]





  const today = new Date();

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const elegantDate = today.toLocaleDateString('en-US', options);
  
  return (
    <>
    <div className="">

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
        {
          StatCardData.map((card,index)=>{
            return (

              <StatCard key={index} cardData={card}/>
            )
          })
        }
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
