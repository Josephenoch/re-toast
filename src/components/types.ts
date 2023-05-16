// interface and types import

import { ReactElement } from "react"

export type IIcons  ={
	success: ReactElement,
	error: ReactElement,
	info: ReactElement,
	warn: ReactElement
}

export type IColors = {
	success: string,
	error: string,
	info: string,
	warn: string
}

export type IDetails = {
	type: "success" | "error" | "warn" | "info",
	message: string,
	duration: number 

}
