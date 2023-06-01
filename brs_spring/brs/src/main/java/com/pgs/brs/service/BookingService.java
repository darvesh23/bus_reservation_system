package com.pgs.brs.service;

import java.util.List;
import java.util.Optional;

import com.pgs.brs.entity.Booking;
import com.pgs.brs.entity.BookingId;

public interface BookingService {
	Booking addBooking(Booking booking);
	void deleteBooking(BookingId id);
	Optional<Booking> getBookingByBookingId(BookingId id);
	List<Booking> getAllBooking();
	List<Booking> getBookingByBid(Integer bid);
	List<Booking> getBookingByOperator(Integer operator);
	Booking bookTicket(Booking booking);
	void cancelTicket(BookingId id);
}
