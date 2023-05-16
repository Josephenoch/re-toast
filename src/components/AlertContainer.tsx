// module imports
import React,{CSSProperties, FC, useCallback, useEffect, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';


// local component/data imports
import Alert from './Alert'

// interfaces and types import
import { IconsType , DetailsType, ColorsType} from './types'
import { defaultBGColors, defaultColors } from './data';


import { defualtContainerStyle, defaultAlertStyle } from "./data"
import { CheckIcon, InfoIcon, WarnIcon } from './svg';

interface IDetailsWithID extends DetailsType {
  id: string
}

interface IProps{
  icons?: IconsType
  colors?: ColorsType
  bgColors?: ColorsType
  containerStyle?: CSSProperties
  alertStyle?: CSSProperties
}

const AlertContainer:FC<IProps> = ({
  icons, 
  bgColors = defaultBGColors, 
  colors = defaultColors,
  containerStyle = defualtContainerStyle,
  alertStyle = defaultAlertStyle
}) => {

  const defaultIcons:IconsType = {
    success: <CheckIcon/>,
    error: <WarnIcon/>,
    warn: <WarnIcon/>,
    info: <InfoIcon/>
  }
  
  const chosenIcons = icons ? icons : defaultIcons

  const [alerts, setAlerts] = useState<IDetailsWithID[]>([])

  const handleAlertEvent = useCallback(
    (event:CustomEvent<IDetailsWithID>)=>{
      const { detail } = event
      setAlerts(prevState=>{
        const id = uuidv4()
        return [...prevState, {...detail, id}]
      })
    },[])

  const destroy = useCallback(
    (id:string) =>{
      setAlerts(prevState=>{
        const oldAlerts = [...prevState]
        const newAlerts = oldAlerts.filter(item=> item.id !== id)
        return [...newAlerts]
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect(()=>{
    window.addEventListener("CreateAlert", handleAlertEvent as any)

    return ()=> window.removeEventListener("CreateAlert", handleAlertEvent as any)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div
      style={{
          ...containerStyle
      }}
    >
      {
        alerts.map((alertItem, idx)=>
          <Alert 
            key = {alertItem.id}
            index={idx}
            destroy = {destroy} 
            icon = {chosenIcons[alertItem.type]}
            color =   {colors[alertItem.type]}
            bgColor = {bgColors[alertItem.type]}
            {...alertItem}
            alertStyle={alertStyle}
          />)
      }
      
    </div>
  )
}

export default AlertContainer


