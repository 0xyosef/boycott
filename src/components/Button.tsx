import React from "react";
import clsx from "clsx";


type Props={
    children:React.ReactNode
    classname?:string
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;}

export default function Button({children,classname,onClick}:Props){
    return <button
            onClick={onClick}
             className={clsx("dark:text-white text-black mx-1 text-sm ",
                 classname)
             }> 
            {children}
        </button>
}