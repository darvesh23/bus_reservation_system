package com.pgs.brs.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.pgs.brs.entity.Customer;

@Repository
public interface CustomerRepository extends CrudRepository<Customer, Integer> {
	
	public List<Customer> queryByNameAndPhone(String name,String phone);

}
