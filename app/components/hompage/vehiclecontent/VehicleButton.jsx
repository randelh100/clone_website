const VehicleButton = ({onClick, className, text, length}) => {
    return (
        <li>
        <button
             onClick={onclick}
             className={className}
         >
           {text} <span>({length})</span>
        </button>
    </li>
    );
}

export default VehicleButton;