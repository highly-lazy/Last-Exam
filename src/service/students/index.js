import api from "../axios";

const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`
};

const studentApi = {
    getAllStudent: () => api.get('/student', {headers})
}

export default studentApi;