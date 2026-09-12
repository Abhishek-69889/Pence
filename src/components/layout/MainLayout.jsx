import Dashboard from "../../pages/Dashboard"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"


const MainLayout = () => {
  return (
    <div className="w-full h-screen flex bg-[#e5e3db]">
      <aside className="w-1/7 h-full bg-[#121524]">
        <Sidebar/>
      </aside>
      <main className="w-6/7  ">
        <Navbar/>
        <Dashboard/>
      </main>
    </div>
  )
}

export default MainLayout
