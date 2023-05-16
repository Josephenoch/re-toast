// Module imports
import React, {FC, ReactElement} from 'react'

// components/data imports
import { ColorsType } from './types'

type PropsType = {
  children: ReactElement
  type: "success" | "error" | "info" | "warn",
  colors:ColorsType
}

const IconWrapper:FC<PropsType> = ({children, type, colors}) =>{
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