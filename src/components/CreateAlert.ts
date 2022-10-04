// interface imports
import { IDetails } from './interfaces';

const CreateAlert= (detail:IDetails) =>{
	window.dispatchEvent(
		new CustomEvent("CreateAlert", {
			detail
		})
	)
}

export default CreateAlert