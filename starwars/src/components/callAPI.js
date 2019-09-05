
import axios from "axios";

export default function(apiURL, setter) {

	axios
		.get(apiURL)
		.then(res => {
			setter(res.data);
		})
		.catch(err => console.log(err));

}
