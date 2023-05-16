import React, { FC, useEffect, memo, ReactElement, CSSProperties} from 'react'
import {DetailsType} from './types'

interface IAlertProps extends DetailsType {
  destroy: (id:string)=>void
  id:string
  icon: ReactElement
  color: string
  bgColor: string,
  index: number,
  alertStyle : CSSProperties
}

const Alert:FC<IAlertProps> = ({
  id,
  icon,
  duration,
  message,
  destroy,
  color,
  bgColor,
  index,
  alertStyle
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
        ...alertStyle
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