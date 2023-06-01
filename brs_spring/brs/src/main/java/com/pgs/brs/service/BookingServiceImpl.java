package com.pgs.brs.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pgs.brs.entity.Booking;
import com.pgs.brs.entity.BookingId;
import com.pgs.brs.entity.Bus;
import com.pgs.brs.repository.BookingRepository;
import com.pgs.brs.repository.BusRepository;

@Service
public class BookingServiceImpl implements BookingService {
	
	@Autowired
	private BookingRepository bookingRepository;
	@Autowired
	private BusRepository busRepository;

	public Booking addBooking(Booking booking) {
		return bookingRepository.save(booking);
	}

	public void deleteBooking(BookingId id) {
		bookingRepository.deleteById(id);
	}

	public Optional<Booking> getBookingByBookingId(BookingId id) {
		return bookingRepository.findById(id);
	}

	public List<Booking> getAllBooking() {
		return (List<Booking>) bookingRepository.findAll();
	}

	public List<Booking> getBookingByBid(Integer bid) {
		return bookingRepository.queryByBid(bid);
	}

	public Booking bookTicket(Booking booking) {
		Bus b = busRepository.findById(booking.getBid()).get();
		busRepository.updateSeatsByBid(b.getSeat()-booking.getSeat(), booking.getBid());
		return this.addBooking(booking);
	}

	public void cancelTicket(BookingId id) {
		Booking booking =  this.getBookingByBookingId(id).get();
		Integer seat = busRepository.findById(id.getBId()).get().getSeat() + booking.getSeat();
		busRepository.updateSeatsByBid(seat, id.getBId());
		this.deleteBooking(id);
	}

	public List<Booking> getBookingByOperator(Integer operator) {
		return bookingRepository.getBookingByOperator(operator);
	}

}
