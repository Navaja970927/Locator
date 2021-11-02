/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.javalocator.demo;

import java.util.List;

public interface PersonService {
    List<Person> list();
    Person listId(int id);
    Person add(Person p);
    Person edit(Person p);
    Person delete(int id);
}
