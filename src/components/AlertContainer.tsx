// module imports
import React,{CSSProperties, FC, useCallback, useEffect, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Error, Done, Dangerous, Info }from '@mui/icons-material';


// local component/data imports
import Alert from './Alert'

// interfaces and types import
import { IIcons , IDetails, IColors} from './interfaces'
import { defaultBGColors, defaultColors } from './data';
import IconWrapper from './IconWrapper';


import { defualtContainerStyle, defaultAlertStyle } from "./data"

interface IDetailsWithID extends IDetails {
  id: string
}

interface IProps{
  icons?: IIcons
  colors?: IColors
  bgColors?: IColors
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

  const defaultIcons:IIcons = {
    success: <IconWrapper colors={colors} type="success"><Done htmlColor="white"/></IconWrapper>,
    error: <IconWrapper colors={colors} type="error"><Dangerous htmlColor="white"/></IconWrapper>,
    warn: <IconWrapper colors={colors} type="warn"><Error htmlColor="white"/></IconWrapper>,
    info: <IconWrapper colors={colors} type="info"><Info htmlColor="white"/></IconWrapper>
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
            duration = {alertItem.duration} 
            id = {alertItem.id} 
            destroy = {destroy} 
            type= { alertItem.type} 
            message = {alertItem.message}
            icon = {chosenIcons[alertItem.type]}
            color =   {colors[alertItem.type]}
            bgColor = {bgColors[alertItem.type]}
            alertStyle={alertStyle}
          />)
      }
      
    </div>
  )
}

export default AlertContainer


