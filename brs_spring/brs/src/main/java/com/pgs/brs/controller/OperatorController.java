package com.pgs.brs.controller;

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
import com.pgs.brs.entity.Operator;
import com.pgs.brs.service.BookingService;
import com.pgs.brs.service.BusService;
import com.pgs.brs.service.OperatorService;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/operator")
public class OperatorController {
	@Autowired
	private BookingService bookingService;
	
	@Autowired
	private BusService busService;
	
	@Autowired
	private OperatorService operatorService;
	
	@PostMapping("/addBus")
	public Bus addBus(@RequestBody Bus bus) {
		System.out.println( bus);
		return busService.addBus(bus);
	}
	
	@GetMapping("/getOperatorByNameAndPhone")
	public Optional<Operator> getOperatorByNameAndPhone(@RequestParam String name,@RequestParam String phone){
		return operatorService.getOperatorByNameAndPhone(name,phone);
	}
	
	@GetMapping("/getBookingByBookingId")
	public Optional<Booking> getBookingByBookingId(@RequestParam Integer bid,@RequestParam Integer cid) {
		return bookingService.getBookingByBookingId(new BookingId(bid,cid));
	}
	
	@GetMapping("/getBookingByOperator")
	public List<Booking> getBookingByOperator(@RequestParam Integer operator) {
		return bookingService.getBookingByOperator(operator);
	}
	
	@GetMapping("/getBookingByBid")
	public List<Booking> getBookingByBid(@RequestParam Integer bid) {
		return bookingService.getBookingByBid(bid);
	}
	
	@PostMapping("/bookTicket")
	public Booking bookTicket(@RequestBody Booking booking) {
		return bookingService.bookTicket(booking);
	}
	
	@DeleteMapping("/cancelTicket")
	public void cancelTicket(@RequestBody BookingId id) {
		bookingService.cancelTicket(id);
	}
}
