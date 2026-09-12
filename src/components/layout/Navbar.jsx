import { Bell,Search } from 'lucide-react';


const Navbar = () => {
  return (
    <nav className='w-full bg-white py-4 px-10 flex justify-between items-center'>


      <div className='w-120 h-8  bg-[#e5e3db] flex items-center rounded-2xl px-1'>
        
        <input 
        type="text" 
        name="" 
        id="" 
        placeholder='Search company, role...'
        className='w-full h-full p-1 rounded-2xl outline-0 text-gray-700 '
        />
        <button>
          <Search 
          className='text-gray-600 cursor-pointer'
          />
        </button>
      </div>


      <div className='flex gap-3 items-center'>
        <Bell 
        className='cursor-pointer'
        />
        <img 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfgCMpGDEkMYtZ3pLYsSSgmq-_dZzTWGJV8c71_2sjNQ&s=10"
        alt="profile" 
        className='w-8 h-8 bg-black rounded-2xl overflow-hidden object-cover cursor-pointer'
        />
        <h3 className='text-xl whitespace-nowrap font-bold'>Abhishek Tiwari</h3>
      </div>


    </nav>
  )
}

export default Navbar
