// Module imports
import React, {FC, ReactElement} from 'react'

// components/data imports
import { IColors } from './types'

interface IIconContainerProps {
  children: ReactElement
  type: "success" | "error" | "info" | "warn",
  colors:IColors
}

const IconWrapper:FC<IIconContainerProps> = ({children, type, colors}) =>{
   return(
    <div
      style={{
        backgroundColor: colors[type],
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