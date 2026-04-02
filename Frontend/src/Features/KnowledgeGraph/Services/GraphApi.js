import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:9000/api/knowledgeGraph',
    withCredentials: true
})

export const getGraphApi = async () => {
    const response = await api.get(`/getGraph`);
    return response.data;
}
