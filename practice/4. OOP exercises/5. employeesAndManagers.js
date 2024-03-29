"use strict";

/****   Employees and Managers   ****/

//Constructor functions

function Person(name, surname){
    this.name=name;
    this.surname=surname;
}

function Employee(name, surname, job, salary){
    Person.call(this, name, surname)
    this.job=job;
    this.salary=salary;
}

function Developer(name, surname, job, salary, specialization){
    Employee.call(this, name, surname, job, salary);
    this.specialization=specialization;
}

function Manager(name, surname, job, salary, department){
    Employee.call(this, name, surname, job, salary);
    this.department=department;
};

//All objects created from Developer Constructor will share the same method
Developer.prototype.getSpecialization=function(){
    return this.specialization;
};

//All objects created from Manager Constructor will share the same methods
Manager.prototype.getDepartment=function(){
    return this.department;
};
Manager.prototype.setDepartment=function(newDepartment){
    this.department=newDepartment;
};

//All objects created from Employee Constructor will share the same methods
Employee.prototype.getData=function(){
    return this.name +" "+this.surname+" has "+this.salary.toFixed(2)+"$ salary!";
};
Employee.prototype.getSalary=function(){
    return this.salary.toFixed(2);
};
Employee.prototype.increaseSalary=function(){
    this.salary=this.salary*1.1;
    return "Earnings increased by 10%!"
};

//Creating object with prototype Employee.prototype
Developer.prototype=Object.create(Employee.prototype);
Manager.prototype=Object.create(Employee.prototype);

//Assigning the value to a constructor property
Developer.prototype.constructor=Developer;
Manager.prototype.constructor=Manager;


var employee1=new Employee("Nenad", "Dimitrijevic", "programer", 1000);

var developer1=new Developer("Pera", "Peric","developer", 1500, "JS");

var manager1=new Manager("Jovan", "Jovanovic","manager", 2000, "sales");


console.log(manager1.getSalary())
console.log(manager1.increaseSalary());
console.log(manager1.getData())
console.log(Manager.prototype)