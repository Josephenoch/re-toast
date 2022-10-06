
import type { CSSProperties } from 'react';
// Icons import

// local components import

// Interface imports
import {IColors} from './interfaces'
  
export const defaultColors:IColors = {
  error:"#D5390D",
  success: "#629161",
  warn:"#F1D4AB",
  info: "#173DB9"
}

export const defaultBGColors:IColors ={
  success: "#EAF7EE",
  error: "#FCEDE9",
  warn: "#FEF7EA",
  info: "#E6EFFA"
}

export const defualtContainerStyle:CSSProperties = {
  position: "absolute",
  right: "3rem",
  top: "2rem"
}

export const defaultAlertStyle:CSSProperties = {
  display: "flex",
  padding: "10px 10px",
  alignItems: "center",
  borderRadius: "15px"
}