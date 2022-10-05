import React, { FC, useEffect, memo, ReactElement} from 'react'
import {IDetails} from './interfaces'

interface IAlertProps extends IDetails {
  destroy: (id:string)=>void
  id:string
  icon: ReactElement
  color: string
  bgColor: string,
  index: number
}

const Alert:FC<IAlertProps> = ({
  id,
  icon,
  duration,
  message,
  destroy,
  color,
  bgColor,
  index
}) => {
  
  
  useEffect(()=>{
    const myTimeOut = setTimeout(()=>destroy(id), duration)

    return () => clearTimeout(myTimeOut)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div
      style={{
        backgroundColor: bgColor,
        border: `${color} solid 0.5px`,
        marginTop: index === 0 ? "0px" :  "10px",
        display: "flex",
        padding: "10px 10px",
        alignItems: "center",
        borderRadius: "15px"
      }}
    >
        {icon}
        <span
          style={{
            marginLeft: "10px",
            color:"#323C46"
          }}
        >{message}</span>
    </div>
  )
}

export default memo(Alert)