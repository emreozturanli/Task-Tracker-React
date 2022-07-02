import { useState } from "react";
export const Button = ({handleVisibility}) => {
    const [isClose, setIsClose] = useState(false);

    const handleClick = () =>{
        setIsClose(!isClose);
        handleVisibility(isClose);
    }
    
  return (
    <button className="btn-lg" onClick={handleClick}>{isClose ? 'Show Add Task Bar' : 'Close Add Task Bar' }</button>
  )
}