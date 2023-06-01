package com.pgs.brs.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pgs.brs.entity.Operator;
import com.pgs.brs.repository.OperatorRepository;

@Service
public class OperatorServiceImpl implements OperatorService {
	@Autowired
	private OperatorRepository operatorRepository;

	public Operator addOperator(Operator operator) {
		return operatorRepository.save(operator);
	}

	public void deleteOperator(Integer id) {
		operatorRepository.deleteById(id);
	}

	public Optional<Operator> getOperatorById(Integer id) {
		return operatorRepository.findById(id);
	}

	public List<Operator> getAllOprator() {
		return (List<Operator>) operatorRepository.findAll();
	}

	public Optional<Operator> getOperatorByNameAndPhone(String name, String phone) {
		return operatorRepository.getOperatorByNameAndPhone(name, phone);
	}

}
