// Module imports
import React, {FC, ReactElement} from 'react'

// components/data imports
import { defaultColors } from "./data"

// style imports
import styles from "./styles/icon-container.module.scss"

interface IIconContainerProps {
  children: ReactElement
  type: "success" | "error" | "info" | "warn"
}

const IconWrapper:FC<IIconContainerProps> = ({children, type}) =>{
   return(
    <div
      id={styles.container}
      style={{
        backgroundColor: defaultColors[type]
      }}
    >
      {children}
    </div>
  )
}

export default IconWrapper