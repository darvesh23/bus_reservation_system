package com.pgs.brs.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="operator")
public class Operator {
	@Id
	@GeneratedValue
	private Integer id;
	private String name;
	private String phone;
	@Override
	public String toString() {
		return "Operator [id=" + id + ", name=" + name + ", phone=" + phone + "]";
	}
	public Operator() {
		super();
	}
	public Operator(Integer id, String name, String phone) {
		super();
		this.id = id;
		this.name = name;
		this.phone = phone;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
}
