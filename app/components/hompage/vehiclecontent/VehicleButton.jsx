const VehicleButton = ({onClick, className, text, length, activeTab}) => {
    return (
        <li >
        <button
             onClick={onClick}
             className={`text-sm hover:text-blue-500 cursor-pointer flex justify-between items-center md:justify-start p-2 ${activeTab == text? 'text-blue-500' : ''}`}
         >
           {text} <span>({length})</span>
        </button>
    </li>
    );
}

export default VehicleButton;