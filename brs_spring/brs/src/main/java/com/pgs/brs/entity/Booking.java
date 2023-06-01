package com.pgs.brs.entity;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;


@Entity
@Table(name="booking")
@IdClass(BookingId.class)
public class Booking{
	@Id
	private Integer bid;
	@Id
	private Integer cid;
	private Integer seat;
	private Date dob;
	
	@Override
	public String toString() {
		return "Booking [bid=" + bid + ", cid=" + cid + ", seat=" + seat + ", dob=" + dob + "]";
	}

	public Booking() {
		super();
	}
	
	public Integer getBid() {
		return bid;
	}

	public void setBid(Integer bid) {
		this.bid = bid;
	}

	public Integer getcId() {
		return cid;
	}

	public void setcId(Integer cid) {
		this.cid = cid;
	}

	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}

	public Integer getSeat() {
		return seat;
	}

	public void setSeat(Integer seat) {
		this.seat = seat;
	}

	public Booking(Integer bid, Integer cid, Integer seat, Date dob) {
		super();
		this.bid = bid;
		this.cid = cid;
		this.seat = seat;
		this.dob = dob;
	}
	
}
