
package com.locator.locatorB.model;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="person")
public class Person {
    
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private long id;
    
    @Column
    private String fullname;
    @Column
    private String cpf;
    @Column
    private Date dateofbirth;
    @Column
    private String email;
    @Column
    private char gender;
    @Column
    private long phone;
    @Column
    private String description;
    @Column
    private Date createdDate;
    @Column
    private Date lastupdate;
    @Column
    private String neighborhood;
    @Column
    private int number;
    @Column
    private String city;
    @Column
    private String direction;
    @Column
    private String coordinates;
    
    public Person(){}

    public Person(long id, String fullname, String cpf, Date dateofbirth, String email, char gender, long phone, String description, Date createdDate, Date lastupdate, String neighborhood, int number, String city, String direction, String coordinates) {
        this.id = id;
        this.fullname = fullname;
        this.cpf = cpf;
        this.dateofbirth = dateofbirth;
        this.email = email;
        this.gender = gender;
        this.phone = phone;
        this.description = description;
        this.createdDate = createdDate;
        this.lastupdate = lastupdate;
        this.neighborhood = neighborhood;
        this.number = number;
        this.city = city;
        this.direction = direction;
        this.coordinates = coordinates;
    }

    

    public String getCoordinates() {
        return coordinates;
    }

    public void setCoordinates(String coordinates) {
        this.coordinates = coordinates;
    }
    
    

    public Date getLastupdate() {
        return lastupdate;
    }

    public void setLastupdate(Date lastupdate) {
        this.lastupdate = lastupdate;
    }

    public String getNeighborhood() {
        return neighborhood;
    }

    public void setNeighborhood(String neighborhood) {
        this.neighborhood = neighborhood;
    }

    public int getNumber() {
        return number;
    }

    public void setNumber(int number) {
        this.number = number;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getDirection() {
        return direction;
    }

    public void setDirection(String direction) {
        this.direction = direction;
    }
    
    
    
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public Date getDateofbirth() {
        return dateofbirth;
    }

    public void setDateofbirth(Date dateofbirth) {
        this.dateofbirth = dateofbirth;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public char getGender() {
        return gender;
    }

    public void setGender(char gender) {
        this.gender = gender;
    }

    public long getPhone() {
        return phone;
    }

    public void setPhone(long phone) {
        this.phone = phone;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }
    
    
    
}
