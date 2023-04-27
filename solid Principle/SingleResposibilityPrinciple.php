<?php
//Single Responcibility Principle
//The class should  do only one task so that we have a single reson to change
/*
class CalculateArea{
    public void rectangle{

    }
    public void square{

    }
    public  void circle{

    }
}

*/
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
$rectangle=new Rectangle();
$circle=new Circle();
$square=new Square();
$rectangle->Cal_Area();
$circle->Cal_Area();
$square->Cal_Area();


?>