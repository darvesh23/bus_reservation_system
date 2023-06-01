package com.pgs.brs.repository;

import java.sql.Timestamp;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.pgs.brs.entity.Bus;

@Repository
public interface BusRepository extends CrudRepository<Bus, Integer> {
	
	public List<Bus> queryBySrcAndDst(String src,String dst);
	
	@Transactional
	@Modifying
	@Query("update Bus set seat=:uptseat where id=:bid")
	public void updateSeatsByBid(@Param("uptseat") Integer uptseat,@Param("bid") Integer bid);
	
	@Query("select b from Bus b where b.src=:src and b.dst=:dst and b.artime>=:ts")
	List<Bus> getBusBySrcDstDate(@Param("src") String src,@Param("dst") String dst,@Param("ts") Timestamp ts);
	
}
