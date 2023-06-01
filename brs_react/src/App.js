import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import styles from "./App.module.css"

import Header from "./components/TestHeader"
import Footer from "./components/TestFooter"
import SearchBus from "./components/SeachBus"
import BookTicket from "./components/BookTicket"
import MyBooking from "./components/MyBooking"
import Dashboard from './components/Dashboard';
import CustomerList from './components/CustomerList';
import OperatorDashboard from './components/OperatorDashboard'
import ViewBooking from './components/ViewBooking'
import AddBus from './components/AddBus'
import OperatorLoginPage from './components/OperatorLogin';
import AdminLogin from './components/AdminLogin';
import ContactUs from './components/ContactUs'


function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Header />
        <div className={styles.contentWrap}>
          <Routes>

            <Route path='/' element={<SearchBus />} />
            <Route path='/bookTicket' element={<BookTicket />} />
            <Route path='/myBooking' element={<MyBooking />} />

            <Route path='/adminLogin' element={<AdminLogin />} />
            <Route path='/welcomeAdmin' element={<Dashboard />} />
            <Route path='/customerControl' element={<CustomerList name="Customer" />} />
            <Route path='/operatorControl' element={<CustomerList name="Operator" />} />

            <Route path='/operatorLogin' element={<OperatorLoginPage />} />
            <Route path='/welcomeOperator' element={<OperatorDashboard />} />
            <Route path='/addBus' element={<AddBus />} />
            <Route path='/viewBooking' element={<ViewBooking />} />

            <Route path='/contactUs' element={<ContactUs />} />


          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
