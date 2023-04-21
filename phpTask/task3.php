<?php
class Employee{
    public $name;
    public $salary;
    public $job_title;
    public function __construct($name,$salary,$job_title)
    {
        $this->$name=$name;
        $this->$salary=$salary;
        $this->$job_title=$job_title;
        echo " Name: {$this->$name} Salary:{$this->$salary} Job title {$this->$job_title}\n " ;
        
    }

    
    
}
class Manager extends Employee
{
    public function __construct(){
    $name=readline("Enter the name of Manager: ");
    $salary=readline("Enter the salary of Manager: ");
    $job_title="Manager";
    $obj=new Employee($name,$salary,$job_title);
    }
    
}
class Engineer extends Employee{
    public function __construct(){
    $name=readline("Enter the name of Engineer: ");
    $salary=readline("Enter the salary of Engineer: ");
    $job_title="Engineer";
    $obj=new Employee($name,$salary,$job_title);
    }
    
}
class SalesPerson extends Employee{
    public function __construct(){
    $name =readline("Enter the name of SalesPerson: ");
    $salary =readline("Enter the salary of SalesPerson: ");
    $job_title ="SalesPerson";
    $obj=new Employee($name,$salary,$job_title);
    }
    
}
$obj1=new Manager();
$obj2=new Engineer();
$obj3=new SalesPerson();



?>