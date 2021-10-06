import axios from "axios";

const fetchApiRandom = async () => {
    const results = await axios.get('https://randomuser.me/api/?results=50', )
        .then(data => data.data.results)
        .catch(err => console.log('fetchApi', err.message));

        return results;
}

export default fetchApiRandom;
