import './CategoryBox.css'


const CategoryBox = ({label, iconUrl, isActive, onClick}) => {
  return (
    <div
      className={`flex flex-start items-center my-2 mr-6
      text-txt-primary_light
      hover:text-neutral-800 border-transparent text-neutral-500 
       hover:opacity-100 cursor-pointer dark:text-white dark:opacity-50 ${
        isActive ? "active-category" : "not-active"
      }`}
      onClick={onClick}
    >
      <div className='flex flex-col items-center gap-1'>
      <img className="w-5 h-5 dark:bg-slate-400 dark:text-white" src={iconUrl} alt="" />
      <div className="text-small7 text-txt-primary_light font-medium text-center">{label}</div>
      </div>
    </div>
  );
}

export default CategoryBox;