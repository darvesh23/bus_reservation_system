package com.pgs.brs.service;

import java.sql.Date;
import java.sql.Timestamp;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pgs.brs.entity.Bus;
import com.pgs.brs.repository.BusRepository;

@Service
public class BusServiceImpl implements BusService {
	@Autowired
	private BusRepository busRepository;

	public Bus addBus(Bus bus) {
		return busRepository.save(bus);
	}

	public List<Bus> viewAllBus() {
		return (List<Bus>) busRepository.findAll();
	}

	public void deleteBus(Integer id) {
		busRepository.deleteById(id);
	}

	public Optional<Bus> getBusById(Integer id) {
		return busRepository.findById(id);
	}


	public List<Bus> getAllBusBetweenSrcAndDst(String src, String dst) {
		return busRepository.queryBySrcAndDst(src, dst);
	}

	public void updateSeatsByBid(Integer newSeat, Integer bid) {
		busRepository.updateSeatsByBid(newSeat, bid);
	}

	public Integer getSeatsById(Integer id) {
		return this.getBusById(id).get().getSeat();
	}

	public List<Bus> getBusBySrcDstDate(String src, String dst, Date date) {
		Timestamp ts=new Timestamp(date.getTime());	
		return busRepository.getBusBySrcDstDate(src,dst,ts);
	}
	

}
