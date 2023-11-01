import api from "../axios"

const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`
}

const courseApi = {
    getAll: () => api.get('/course')
}

export default courseApi;              