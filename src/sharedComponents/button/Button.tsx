import React from 'react'
interface Props{
    theme?:"primary" | "secondary"
    title:string;
}

const Button : React.FC<Props>= ({title,theme})=> {
    const bgColor=(theme==="primary")?"bg-primary-dark hover:bg-primary-lite":"bg-secondary-dark hover:bg-secondary-lite";
    return (
        <div>
                            
            <button className={`${bgColor} hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full`}>{title}</button>                
        </div>
    )
}
export default Button;