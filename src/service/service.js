
import axios from 'axios'

const API_URL = 'http://localhost:8080'
const MESSAGES = 'messages'
const USERS = 'users'

class Service {

    getMessages() {
        return axios.get(`${API_URL}/${MESSAGES}`)
    }

    save(message) {
        return axios.post(`${API_URL}/${MESSAGES}`, message)
    }

    update(id, message) {
        return axios.put(`${API_URL}/${MESSAGES}/${id}`, message)
    }

    delete(id) {
        return axios.delete(`${API_URL}/${MESSAGES}/${id}`)
    }

    getUsers() {
        return axios.get(`${API_URL}/${USERS}`)
    }

    verifyPassword(name, password) {
        return axios.get(`${API_URL}/${USERS}/${name}/${password}`)
    }

    registration(name, password, gender, email) {
        return axios.post(`${API_URL}/${USERS}/${name}/${password}/${gender}/${email}`)
    }
}

export default new Service()