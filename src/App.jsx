import { Route, Routes } from 'react-router-dom'

import Navbar from './components/layout/Navbar'
import Sidebar from './components/layout/Sidebar'
import Dashboard from './pages/Dashboard'
import Applications from './pages/Applications'

function App() {

  return (
    <>
      <div className="w-full min-h-screen flex ">
        <aside className="w-1/7 h-full bg-[#121524] fixed">
        <Sidebar/>
        </aside>
      <main className="w-6/7 h-full absolute top-0 left-1/7 ">
        <Navbar/>
        <div className='w-full overflow-hidden  px-5  absolute top-16 z-0 bg-[#e5e3db]'>

      <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/applications' element={<Applications/>}/>
      </Routes>
        </div>
        
      </main>
    </div>
    </>
  )
}

export default App
