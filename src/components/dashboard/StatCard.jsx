import {File,Plus} from "lucide-react" 

const StatCard = () => {
  return (
    <div className='bg-white w-48 h-48 rounded-xl p-2 flex flex-col gap-3 cursor-pointer'>
      <p className="bg-green-300 w-10 p-2 rounded-2xl">
        <File 
        className="text-green-700"
        />
      </p>
      <h2 className="text-gray-700 text-xl font-bold whitespace-nowrap">Total Applications</h2>
      <h2 className="text-3xl font-semibold">24</h2>
      <h4 className="text-[20] font-semibold flex gap-1 align-bottom "><span><Plus /></span>2 this week</h4>
    </div>
  )
}

export default StatCard
