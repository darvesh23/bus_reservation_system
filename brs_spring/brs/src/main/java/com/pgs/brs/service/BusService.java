package com.pgs.brs.service;

import java.sql.Date;
import java.util.List;
import java.util.Optional;

import com.pgs.brs.entity.Bus;

public interface BusService {
	Bus addBus(Bus bus);
	void deleteBus(Integer id);
	Optional<Bus> getBusById(Integer id);
	List<Bus> viewAllBus();
	List<Bus> getAllBusBetweenSrcAndDst(String src,String dst);
	Integer getSeatsById(Integer id);
	void updateSeatsByBid(Integer newSeat,Integer bid);
	List<Bus> getBusBySrcDstDate(String src, String dst, Date date);
}
