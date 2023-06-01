package com.pgs.brs.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.pgs.brs.entity.Operator;
@Repository
public interface OperatorRepository extends CrudRepository<Operator, Integer>{

	Optional<Operator> getOperatorByNameAndPhone(String name, String phone);

}
