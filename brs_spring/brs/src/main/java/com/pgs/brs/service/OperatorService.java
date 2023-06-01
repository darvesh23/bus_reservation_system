package com.pgs.brs.service;

import java.util.List;
import java.util.Optional;

import com.pgs.brs.entity.Operator;

public interface OperatorService {
	Operator addOperator(Operator operator);
	void deleteOperator(Integer id);
	Optional<Operator> getOperatorById(Integer id);
	List<Operator> getAllOprator();
	Optional<Operator> getOperatorByNameAndPhone(String name, String phone);
}
