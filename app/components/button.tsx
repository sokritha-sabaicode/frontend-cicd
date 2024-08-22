
import React from 'react';

interface ButtonProp{
    title:string,
    color:"primary"|"red"|"green"
    size:"small"|"medium" | "large";
    textColor:"black"|"white",
    onclick:()=>void
}
const Button:React.FC<ButtonProp> = ({ 
    title="default",
    color="primary",
    size="small",
    textColor="black",
  
}) => {
    const colorObj:any={
        primary:'bg-blue-500',
        red:'bg-red-500',
        green:'bg-green-500',
    }
    const sizeObj:any={
        small:'text-sm p-1',
        medium:'text-md p-2',
        large:'text-lg p-3',
    }
    const textColorObj:any={
        black:'text-black',
        white:'text-white',
    }
    const buttonColor=colorObj[color]
    const buttonSize=sizeObj[size]
    return (
        <button className={`${buttonColor} ${buttonSize} ${textColorObj[textColor]}`}>
           {title}
        </button>
    );
};

export default Button;
