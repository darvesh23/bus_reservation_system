package com.pgs.brs.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.pgs.brs.entity.Booking;
import com.pgs.brs.entity.BookingId;

@Repository
public interface BookingRepository extends CrudRepository<Booking, BookingId>{
	List<Booking> queryByBid(Integer bid);
	
	List<Booking> queryByCid(Integer cid);
	
	@Query("select bk from Booking bk where bk.bid in (select b.id from Bus b where operator=:operator )")
	List<Booking> getBookingByOperator(@Param("operator")Integer operator);
	
}
