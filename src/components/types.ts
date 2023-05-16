// interface and types import

import { ReactElement } from "react"

export type IconsType  ={
	success: ReactElement,
	error: ReactElement,
	info: ReactElement,
	warn: ReactElement
}

export type ColorsType = {
	success: string,
	error: string,
	info: string,
	warn: string
}

export type DetailsType = {
	type: AlertType
	message: string,
	duration: number 
}

export type AlertType = "success" | "error" | "warn" | "info"