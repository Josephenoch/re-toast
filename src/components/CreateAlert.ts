// interface imports
import { DetailsType } from './types';

const CreateAlert= (detail:DetailsType) =>{
	window.dispatchEvent(
		new CustomEvent("CreateAlert", {
			detail
		})
	)
}

export default CreateAlert