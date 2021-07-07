import axios from 'axios';
const KEY = 'AIzaSyB1wevbuIjQ_Pwzxl8WoT7dZOiYEXUsyfg';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 5,
		key: KEY
	}
});
