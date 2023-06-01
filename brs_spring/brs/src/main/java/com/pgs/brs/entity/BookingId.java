package com.pgs.brs.entity;

import java.io.Serializable;
import java.util.Objects;


public class BookingId implements Serializable {
	private static final long serialVersionUID = 1L;
	private Integer bid;
	private Integer cid;
	public BookingId() {
		super();
	}
	public BookingId(Integer bid, Integer cid) {
		super();
		this.bid = bid;
		this.cid = cid;
	}
	@Override
	public int hashCode() {
		return Objects.hash(bid, cid);
	}
	@Override
	public boolean equals(Object obj) {
		BookingId booking = (BookingId)obj;
		if(this.cid==booking.cid && this.cid == booking.cid)
			return true;
		else
			return false;
	}
	@Override
	public String toString() {
		return "BookingId [bId=" + bid + ", cId=" + cid + "]";
	}
	public Integer getBId() {
		return bid;
	}
	public void setBId(Integer bid) {
		this.bid = bid;
	}
	public Integer getCId() {
		return cid;
	}
	public void setCId(Integer cId) {
		this.cid = cId;
	}
}
