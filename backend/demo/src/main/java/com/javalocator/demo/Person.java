package com.javalocator.demo;
import java.util.Date;
import javax.persistence.*;

@Entity
@Table(name="person")
public class Person {
    
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
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
    private int phone;
    @Column
    private String description;
    @Column(name = "createdDate")
    private Date createdDate;

    public int getId() {
        return id;
    }

    public String getFullname() {
        return fullname;
    }

    public String getCpf() {
        return cpf;
    }

    public Date getDateofbirth() {
        return dateofbirth;
    }

    public String getEmail() {
        return email;
    }

    public char getGender() {
        return gender;
    }

    public int getPhone() {
        return phone;
    }

    public String getDescription() {
        return description;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public void setDateofbirth(Date dateofbirth) {
        this.dateofbirth = dateofbirth;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setGender(char gender) {
        this.gender = gender;
    }

    public void setPhone(int phone) {
        this.phone = phone;
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
