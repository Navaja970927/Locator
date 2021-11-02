
package com.locator.locatorB.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.locator.locatorB.model.Person;

public interface PersonRepository extends JpaRepository<Person, Long>{

    
}
