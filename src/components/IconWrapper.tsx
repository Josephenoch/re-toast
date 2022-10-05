// Module imports
import React, {FC, ReactElement} from 'react'

// components/data imports
import { defaultColors } from "./data"

interface IIconContainerProps {
  children: ReactElement
  type: "success" | "error" | "info" | "warn"
}

const IconWrapper:FC<IIconContainerProps> = ({children, type}) =>{
   return(
    <div
      style={{
        backgroundColor: defaultColors[type],
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: "35px",
        height: "35px",
        borderRadius: "50px",
      }}
    >
      {children}
    </div>
  )
}

export default IconWrapper