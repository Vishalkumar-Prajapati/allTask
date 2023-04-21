<?php
class Shape
{
    public function __construct(){
    $shape_name = readline("Enter the name of shape to find the area: ");
    $shape_name=strtolower($shape_name);
    if($shape_name =="rectangle")
    {
        $obj= new Rectangle();
    }
    else if($shape_name=="circle"){
        $obj=new Circle();
    }
    else if ($shape_name=="triangle"){
        $obj=new Triangle();
    }
}
    
}
class Rectangle extends Shape
    {
        public function __construct()
        {
            $l=(int)readline("Enter the length of Rectangle: ");
            $b=(int)readline("Enter the width of Rectangle : ");
            $area =$l*$b;
            echo "The area of Rectangle is {$area}";
            
        }
        
    }
class Circle extends Shape
    {
        public function __construct()
        {
        $r=(int)readline("Enter the redius of Circle ");
        $area = pi()*$r*$r;
        echo "The area of Circle is {$area}";
        }
        
    }
class Triangle extends Shape
    {
        public function __construct()
        {
        $h=(int)readline("Enter the hight of Triangle :");
        $b=(int)readline("Enter the breadth of Triangle: ");
        $area = 0.5*$h*$b;
        echo "The area of Triangle is {$area}";
            
        }
        
    }
$obj_main=new Shape();
    
?>