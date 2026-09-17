import {File,Plus,Send,HeartX,NotebookPen,X,Wand} from "lucide-react" 
const StatCard = (props) => {
  console.log(props.cardData.icon);
  const IconComponent = props.cardData.icon;
  
  return (
    <div className='bg-white w-45 h-44 rounded-xl p-2 flex flex-col gap-3 cursor-pointer hover:bg-[#E5F1ED]'>
      <p className={`${props.cardData.iconBgColor} w-10 p-2 rounded-2xl`}>
        <IconComponent
        className={`${props.cardData.iconColor}`}
        />
        
      </p>
      <h2 className="text-gray-700  text-xl font-bold whitespace-nowrap">{props.cardData.title}</h2>
      <h2 className="text-3xl font-semibold">{props.cardData.count}</h2>
      <h4 className="text-[20] font-semibold flex gap-1 align-bottom ">{props.cardData.update}</h4>
    </div>
  )
}

export default StatCard
