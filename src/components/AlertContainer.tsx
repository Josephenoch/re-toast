// module imports
import React,{CSSProperties, FC, useCallback, useEffect, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
// import "./index.css"

// local component/data imports
import Alert from './Alert'

// interfaces and types import
import { IconsType , DetailsType, ColorsType} from './types'
import { defaultBGColors, defaultColors } from './data';


import { defaultAlertStyle } from "./data"
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
  alertStyle = defaultAlertStyle
}) => {

  const defaultIcons:IconsType = {
    success: <CheckIcon className="w-10 h-10"/>,
    error: <WarnIcon className="w-10 h-10"/>,
    warn: <WarnIcon className="w-10 h-10"/>,
    info: <InfoIcon className="w-10 h-10"/>
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
      className="absolute top-4 right-12"
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


