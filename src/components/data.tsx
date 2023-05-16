
import type { CSSProperties } from 'react';
// Icons import

// local components import

// Interface imports
import {ColorsType} from './types'
  
export const defaultColors:ColorsType = {
  error:"#D5390D",
  success: "#629161",
  warn:"#F1D4AB",
  info: "#173DB9"
}

export const defaultBGColors:ColorsType ={
  success: "#EAF7EE",
  error: "#FCEDE9",
  warn: "#FEF7EA",
  info: "#E6EFFA"
}



export const defaultAlertStyle:CSSProperties = {
  display: "flex",
  padding: "10px 10px",
  alignItems: "center",
  borderRadius: "15px"
}