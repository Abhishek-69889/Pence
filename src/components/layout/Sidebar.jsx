
import { House , NotebookTabs,LayersPlus,CalendarPlus2,ChartSpline,Settings } from "lucide-react"
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <aside className='w-full h-full text-white flex flex-col justify-between items-center px-2 py-4'>

      <div>
        <ul className='flex flex-col gap-7'>
          <li 
          className="flex gap-3 cursor-pointer list-none items-center">
            <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv-F7UhjBmJvJeRvJfZAF345RSYiZ-aVMBfFtj5qU63nHYYRVxKFhshjjd&s=10" 
            alt="" 
            className='w-12 h-12 rounded-2xl'
            />
            <h2 className="text-3xl font-bold text-gray-500">Pence</h2>
          </li>
          <li>
            <Link
            className="flex gap-5 cursor-pointer list-none items-center hover:bg-gray-500  p-2 rounded-2xl"
            to="/"
            >
            
            <House  />
            <h2>Dashboard</h2>
            </Link>
          </li>
          <li 
          >
            <Link
            to="/applications"
            className="flex gap-3 cursor-pointer list-none items-center hover:bg-gray-500 p-2 rounded-2xl"
            
            >
            
            <NotebookTabs  />
            <h2>Application</h2>
            </Link>
          </li>
          <li> 
          <Link
          to="/add_application"
          className="flex gap-3 cursor-pointer list-none items-center hover:bg-gray-500 p-2 rounded-2xl">
            <LayersPlus />
            <h2>Add Application</h2>
          </Link>
          </li>
          <li 
          className="flex gap-3 cursor-pointer list-none items-center hover:bg-gray-500 p-2 rounded-2xl">
            <CalendarPlus2 />
            <h2>Calendar</h2>
          </li>
          <li 
          className="flex gap-3 cursor-pointer list-none items-center hover:bg-gray-500 p-2 rounded-2xl">
            <ChartSpline />
            <h2>Analytics</h2>
          </li>
          <li 
          className="flex gap-3 cursor-pointer list-none items-center hover:bg-gray-500 p-2 rounded-2xl">
            <Settings />
            <h2>Settings</h2>
          </li>
        </ul>


      </div>


      <div className="bg-gray-950 p-2 rounded-md">
        <h4>Keep Going!</h4>
        <p className="text-gray-600">Every application brings you closer to your dream job.</p>
      </div>
    </aside>
  )
}

export default Sidebar
