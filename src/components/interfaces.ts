// interface and types import
import { TIcon } from "./types";

export interface IIcons {
	success: TIcon,
	error: TIcon,
	info: TIcon,
	warn: TIcon
}

export interface IColors {
	success: string,
	error: string,
	info: string,
	warn: string
}

export interface IDetails {
	type: "success" | "error" | "warn" | "info",
	message: string,
	duration: number 

}
