// interface imports
import { IDetails } from './types';

const CreateAlert= (detail:IDetails) =>{
	window.dispatchEvent(
		new CustomEvent("CreateAlert", {
			detail
		})
	)
}

export default CreateAlert