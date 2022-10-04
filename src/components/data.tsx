// Icons import
import { Error, Done, Dangerous, Info }from '@mui/icons-material';

// local components import
import IconWrapper from './IconWrapper';

// Interface imports
import { IIcons , IColors} from './interfaces'

export const defaultIcons:IIcons = {
  success: <IconWrapper type="success"><Done htmlColor="white"/></IconWrapper>,
  error: <IconWrapper type="error"><Dangerous htmlColor="white"/></IconWrapper>,
  warn: <IconWrapper type="warn"><Error htmlColor="white"/></IconWrapper>,
  info: <IconWrapper type="info"><Info htmlColor="white"/></IconWrapper>
}
  
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