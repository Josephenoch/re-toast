// module imports
import React,{FC, useCallback, useEffect, useState} from 'react'
import { v4 as uuidv4 } from 'uuid';

// local component/data imports
import Alert from './Alert'

// interfaces and types import
import { IIcons , IDetails, IColors} from './interfaces'
import { defaultIcons, defaultBGColors, defaultColors } from './data';

import styles from "./styles/alert-container.module.scss"

interface IDetailsWithID extends IDetails {
  id: string
}

interface IProps{
  icons?: IIcons
  colors?: IColors
  bgColors?: IColors
}

const AlertContainer:FC<IProps> = ({icons=defaultIcons, bgColors=defaultBGColors, colors=defaultColors}) => {
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
    <div id={styles.container}>
      {
        alerts.map(alertItem=>
          <Alert 
            key = {alertItem.id}
            duration = {alertItem.duration} 
            id = {alertItem.id} 
            destroy = {destroy} 
            type= { alertItem.type} 
            message = {alertItem.message}
            icon = {icons[alertItem.type]}
            color =   {colors[alertItem.type]}
            bgColor = {bgColors[alertItem.type]}
          />)
      }
      
    </div>
  )
}

export default AlertContainer


