import axios from "axios";

const ADMIN_API_BASE_URL = "http://localhost:8080/admin/"

class AdminService {

    async getAllCustomer() {
        return await axios.get(ADMIN_API_BASE_URL + "getAllCustomer")
    }

    async addCustomer(name, phone) {
        return await axios.post(ADMIN_API_BASE_URL + "addCustomer", { name, phone })
    }

    async deleteCustomer(id) {
        await axios.delete(ADMIN_API_BASE_URL + `deleteCustomer?id=${id}`).then((res) => { console.log(res.status) })
    }

    async getAllOperator() {
        return await axios.get(ADMIN_API_BASE_URL + 'getAllOperator')
    }

    async addOperator(name, phone) {
        return await axios.post(ADMIN_API_BASE_URL + "addOperator", { name, phone })
    }

    async deleteOperator(id) {
        await axios.delete(ADMIN_API_BASE_URL + `deleteOperator?id=${id}`).then((res) => { console.log(res.status) })
    }

}

export default new AdminService()