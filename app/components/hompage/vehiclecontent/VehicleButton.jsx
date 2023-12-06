const VehicleButton = ({onClick, className, text, length}) => {
    return (
        <li>
        <button
             onClick={onClick}
             className={className}
         >
           {text} <span>({length})</span>
        </button>
    </li>
    );
}

export default VehicleButton;