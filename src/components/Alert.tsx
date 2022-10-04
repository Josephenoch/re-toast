import React, { FC, useEffect, memo, ReactElement} from 'react'
import {IDetails} from './interfaces'

import styles from "./styles/alert.module.scss"

interface IAlertProps extends IDetails {
  destroy: (id:string)=>void
  id:string
  icon: ReactElement
  color: string
  bgColor: string
}

const Alert:FC<IAlertProps> = ({
  id,
  icon,
  duration,
  message,
  destroy,
  color,
  bgColor

}) => {
  
  
  useEffect(()=>{
    const myTimeOut = setTimeout(()=>destroy(id), duration)

    return () => clearTimeout(myTimeOut)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div
      id={styles.container}
      style={{
        backgroundColor: bgColor,
        border: `${color} solid 0.5px`
      }}
    >
        {icon}
        <span id={styles.text}>{message}</span>
    </div>
  )
}

export default memo(Alert)