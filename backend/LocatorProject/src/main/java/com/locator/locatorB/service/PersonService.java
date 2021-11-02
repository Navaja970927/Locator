
package com.locator.locatorB.service;

import com.locator.locatorB.model.Person;
import com.locator.locatorB.repository.PersonRepository;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PersonService {
    
    @Autowired
    private PersonRepository repository;
    
    public Person create(Person p){
        return repository.save(p);
    }
    
    public List<Person> getAllPersons(){
        return repository.findAll();
    }
    
    public void delete(Person p){
        repository.delete(p);
    }
    
    public Optional<Person> findById(long id){
        return repository.findById(id);
    } 
}
