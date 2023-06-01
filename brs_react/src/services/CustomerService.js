import axios from "axios";

const CUSTOMER_API_BASE_URL = "http://localhost:8080/customer/"
const ADMIN_API_BASE_URL = "http://localhost:8080/admin/"

class CustomerService {

    getAllBus() {
        return axios.get(CUSTOMER_API_BASE_URL + "getAllBus")
    }

    async getBusBySrcAndDst(src, dst) {
        return await axios.get(CUSTOMER_API_BASE_URL + `getBusBetweenSrcAndDst?src=${src}&dst=${dst}`)
    }

    async getBusBySrcDstDate(src, dst, date) {
        return await axios.get(CUSTOMER_API_BASE_URL + `getBusBySrcDstDate?src=${src}&dst=${dst}&date=${date}`)
    }

    async bookTicket(booking) {
        console.log(booking);
        var cId = null;
        await axios.post(ADMIN_API_BASE_URL + "addCustomer", { name: booking.name, phone: booking.phone }).then((res) => {
            console.log(res.data)
            cId = res.data.id;
        })

        await axios.post(CUSTOMER_API_BASE_URL + "bookTicket", { bid: booking.busDetails.id, cId, seat: booking.seats, dob: booking.date }).then((res) => { console.log(res.data); })
    }

    async viewMyBooking(name, phone) {
        return await axios.get(CUSTOMER_API_BASE_URL + `viewMyBooking?name=${name}&phone=${phone}`)
    }

    async getBusById(id) {
        return await axios.get(CUSTOMER_API_BASE_URL + `getBusById?id=${id}`)
    }

    async getCustomerById(id) {
        return await axios.get(ADMIN_API_BASE_URL + `getCustomerById?id=${id}`)
    }

    async cancelTicket(bid, cid) {
        await axios.delete(CUSTOMER_API_BASE_URL + "cancelBooking", { data: { bid: bid, cid: cid } })
    }

}

export default new CustomerService();