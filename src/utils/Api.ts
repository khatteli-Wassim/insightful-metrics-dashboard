import axios from 'axios';

export const fetchData = async (endpoint: string) => {
    return await axios.get(endpoint);
};
