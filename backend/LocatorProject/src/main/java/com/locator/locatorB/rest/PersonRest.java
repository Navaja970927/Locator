
package com.locator.locatorB.rest;

import com.locator.locatorB.model.Person;
import com.locator.locatorB.service.PersonService;
import java.net.URI;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/person/")
public class PersonRest {
    
    @Autowired
    private PersonService service;
    
    @PostMapping
    private ResponseEntity<Person> save(@RequestBody Person p){
        Person temp = service.create(p);
        
        try{
            return ResponseEntity.created(new URI("/api/person"+temp.getId())).body(temp);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
    
    @GetMapping
    private ResponseEntity<List<Person>> listPersons(){
        return ResponseEntity.ok(service.getAllPersons());
    }
    
    @DeleteMapping(value="{id}")
    private ResponseEntity<Void> deletePerson(@PathVariable Long id){
        Optional<Person> p = service.findById(id);
        Person p1 = p.get();
        service.delete(p1);
        return ResponseEntity.ok().build();
    }
    
    @GetMapping(value="{id}")
    private ResponseEntity<Optional<Person>> getPerson(@PathVariable("id") Long id){
        return ResponseEntity.ok(service.findById(id));
    }
    
}
