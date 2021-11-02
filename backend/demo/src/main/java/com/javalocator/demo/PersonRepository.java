/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.javalocator.demo;

import java.util.List;
import org.springframework.data.repository.Repository;

public interface PersonRepository extends Repository<Person, Integer>{
    List<Person> findAll();
    /*Person findOne(int id);
    Person save(Person p);
    void delete(Person p);*/
}
