package com.pgs.brs.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.pgs.brs.entity.Customer;
import com.pgs.brs.entity.Operator;
import com.pgs.brs.service.CustomerService;
import com.pgs.brs.service.OperatorService;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/admin")
public class AdminController {
	@Autowired
	private CustomerService customerService;
	@Autowired
	private OperatorService operatorService;
	
	@PostMapping("/addCustomer")
	public Customer addCustomer(@RequestBody Customer customer) {
		return customerService.addCustomer(customer);
	}
	
	@GetMapping("/getAllCustomer")
	public List<Customer> getAllCustomer() {
		return customerService.getAllCustomer();
	}
	
	@DeleteMapping("/deleteCustomer")
	public void deleteCustomer(@RequestParam Integer id) {
		customerService.deleteCustomer(id);
	}
	
	@GetMapping("/getCustomerById")
	public Optional<Customer> getCustomerById(@RequestParam Integer id) {
		return customerService.getCustomerById(id);
	}
	
	@PostMapping("/addOperator")
	public Operator addOperator(@RequestBody Operator operator) {
		return operatorService.addOperator(operator);
	}
	
	@DeleteMapping("/deleteOperator")
	public void deleteOperator(@RequestParam Integer id) {
		operatorService.deleteOperator(id);
	}
	
	@GetMapping("/getOperatorById")
	public Optional<Operator> getOperatorById(@RequestParam Integer id) {
		return operatorService.getOperatorById(id);
	}
	
	@GetMapping("/getAllOperator")
	public List<Operator> getAllOprator() {
		return operatorService.getAllOprator();		
	}
}
