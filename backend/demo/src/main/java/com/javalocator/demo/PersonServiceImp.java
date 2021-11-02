/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.javalocator.demo;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author NAVAJA
 */
@Service
public class PersonServiceImp implements PersonService{
    @Autowired
    private PersonRepository repositorio;

    @Override
    public List<Person> list() {
        return repositorio.findAll();
    }
/*
    @Override
    public Person listId(int id) {
        return repositorio.findOne(id);
    }

    @Override
    public Person add(Person p) {
        return repositorio.save(p);
    }

    @Override
    public Person edit(Person p) {
        return repositorio.save(p);
    }

    @Override
    public Person delete(int id) {
        Person p = repositorio.findOne(id);
        if(p!= null){
            repositorio.deletePerson(p);
        }
        return p;
    }
    */

    @Override
    public Person listId(int id) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Person add(Person p) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Person edit(Person p) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public Person delete(int id) {
        // TODO Auto-generated method stub
        return null;
    }
}
