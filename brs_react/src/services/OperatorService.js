import axios from "axios"

const OPERATOR_API_BASE_URL = "http://localhost:8080/operator/"
class OperatorService {

    getBookingListByOperator(id) {
        return axios.get(OPERATOR_API_BASE_URL + `getBookingByOperator?operator=${id}`)
    }

    addBus({ name, src, dst, fare, seat, dptime, artime, operator }) {
        axios.post(OPERATOR_API_BASE_URL + "addBus", { name, src, dst, fare, seat, dptime, artime, operator }).then((res) => { console.log(res.status) })
    }

    async operatorLogin(name, phone) {
        return await axios.get(OPERATOR_API_BASE_URL + `getOperatorByNameAndPhone?name=${name}&phone=${phone}`)
    }

}

export default new OperatorService()