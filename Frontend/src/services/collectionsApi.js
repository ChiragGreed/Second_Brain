import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:9000/api/collections',
    withCredentials: true
})

export const getCollectionsApi = async () => {
    const response = await api.get(`/getCollections`);
    return response.data;
}

