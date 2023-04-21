<?php
//open close principle says that class open for extension and close for the modification
abstract class CalculateArea
{
    abstract public function Cal_Area();
}
class Rectangle extends CalculateArea{
    public function Cal_Area()
    {
        echo (5*6)."\n";
    }

}
class Square extends CalculateArea{
    public function Cal_Area()
    {
        echo (5*5)."\n";
    }

}
class Circle extends CalculateArea{
    public function Cal_Area()
    {
        echo (3.14*5*5)."\n";
    }

}
//here the  extend  the  code
class Triangle extends CalculateArea{
    public function Cal_Area(){
        echo (0.5*10*20)."\n";
    }
}
$rectangle=new Rectangle();
$circle=new Circle();
$square=new Square();
$triangle=new Triangle();


$rectangle->Cal_Area();
$circle->Cal_Area();
$square->Cal_Area();
$triangle->Cal_Area();


?>
?>