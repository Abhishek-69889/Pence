import {Summary} from 'lucide-react'
import { PieChart } from '@mui/x-charts/PieChart';

const ApplicationOverview = () => {
  const data = [
  { label: 'Group A', value: 400, color: '#0088FE' },
  { label: 'Group B', value: 300, color: '#00C49F' },
  { label: 'Group C', value: 300, color: '#FFBB28' },
  { label: 'Group D', value: 200, color: '#FF8042' },
  { label: 'Group D', value: 200, color: '#FF8042' },
  { label: 'Group D', value: 200, color: '#FF8042' },
];

const settings = {
  margin: { right: 5 },
  width: 200,
  height: 200,
  hideLegend: true,
};


  return (
    <div className='w-[40%] h-max p-2 bg-white rounded-lg'>
      <div className='flex font-bold gap-2 px-1 items-center border-b-2 border-gray-600'>
        <Summary className='text-gray-800'/>
        <h1 className='text-[20px] text-gray-800'>Application Status Overview</h1>
      </div>


      <div className='flex justify-between gap-4 p-2 '>
        <div className='w-2/3 h-50'>
          <PieChart
          series={[{ innerRadius: 50, outerRadius: 100, data, arcLabel: 'value' }]}
          {...settings}
          />
        </div>

        <div className='flex flex-col p-2 gap-5'>
          <div className='flex gap-10 items-center'>
            <div className='flex items-center gap-2'>
              <div className={`w-5 h-5 bg-blue-900 rounded-xl`}></div>
              <h2 className='font-semibold'>Applied</h2>
            </div>
            <div>
              <p className='text-gray-500 '>33%</p>
            </div>
          </div>
          <div className='flex gap-10 items-center'>
            <div className='flex items-center gap-2'>
              <div className='w-5 h-5 bg-blue-900 rounded-xl'></div>
              <h2 className='font-semibold'>Applied</h2>
            </div>
            <div>
              <p className='text-gray-500 '>33%</p>
            </div>
          </div>
          <div className='flex gap-10 items-center'>
            <div className='flex items-center gap-2'>
              <div className='w-5 h-5 bg-blue-900 rounded-xl'></div>
              <h2 className='font-semibold'>Applied</h2>
            </div>
            <div>
              <p className='text-gray-500 '>33%</p>
            </div>
          </div>
          <div className='flex gap-10 items-center'>
            <div className='flex items-center gap-2'>
              <div className='w-5 h-5 bg-blue-900 rounded-xl'></div>
              <h2 className='font-semibold'>Applied</h2>
            </div>
            <div>
              <p className='text-gray-500 '>33%</p>
            </div>
          </div>
          <div className='flex gap-10 items-center'>
            <div className='flex items-center gap-2'>
              <div className='w-5 h-5 bg-blue-900 rounded-xl'></div>
              <h2 className='font-semibold'>Applied</h2>
            </div>
            <div>
              <p className='text-gray-500 '>33%</p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default ApplicationOverview
