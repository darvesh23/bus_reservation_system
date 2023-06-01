package com.pgs.brs.controller;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pgs.brs.entity.Booking;
import com.pgs.brs.entity.BookingId;
import com.pgs.brs.entity.Bus;
import com.pgs.brs.service.BookingService;
import com.pgs.brs.service.BusService;
import com.pgs.brs.service.CustomerService;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/customer")
public class CustomerController {
	@Autowired
	private BusService busService;
	@Autowired
	private BookingService bookingService;
	@Autowired
	private CustomerService customerService;
	
	
	@GetMapping("/getAllBus")
	public List<Bus> getAllBus(){
		return busService.viewAllBus();
	}
	
	@GetMapping("/getBusById")
	public Optional<Bus> getBusById(@RequestParam Integer id) {
		return busService.getBusById(id);
	}
	

	@GetMapping("/getBusBetweenSrcAndDst")
	public List<Bus> getAllBusBetweenSrcAndDst(@RequestParam String src,@RequestParam String dst) {
		return busService.getAllBusBetweenSrcAndDst(src, dst);
	}
	
	@GetMapping("/getBusBySrcDstDate")
	public List<Bus> getBusBySrcDstDate(@RequestParam String src,@RequestParam String dst,@RequestParam Date date) {
		return busService.getBusBySrcDstDate(src, dst,date);
	}
	
	@GetMapping("/getSeats")
	public Integer getSeatsById(@RequestParam Integer id) {
		return busService.getSeatsById(id);
	}
	
	@GetMapping("/viewMyBooking")
	public List<Booking> viewMyBooking(@RequestParam String name,@RequestParam String phone){
		return customerService.getAllBooking(name, phone);
	}
	
	@PostMapping("/bookTicket")
	public Booking bookTicket(@RequestBody Booking booking) {
//		return booking;
//      bid,cId,seat,dob
		return bookingService.bookTicket(booking);
	}
	
	@DeleteMapping("/cancelBooking")
	public void cancelTicket(@RequestBody BookingId id){
//		return id;
//		bid,cid
//		System.out.println(id);
		bookingService.cancelTicket(id);
	}
	
}
