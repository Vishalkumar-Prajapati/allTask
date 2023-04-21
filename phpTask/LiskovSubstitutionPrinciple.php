<?php
//subclass is substituable for the superclass 
/*class Animal {
    public function eat(){

    }
    public function groom(){

    }
}
class Dog extends Animal {
    public function eat(){

    }
    public function  groom(){

    }
}
class Tiger extends Animal{
    public function eat(){

    }
    public function groom(){
        //this is false for tiger so that the voletile Liskov principle
    }
}*/
class Animal {
    public function eat(){

    }
class Pet extends Animal{
    public function groom(){

    }
}
}
class Dog extends Pet {
    public function eat(){

    }
    public function  groom(){

    }
}
class Tiger extends Animal{
    public function eat(){

    }
   
}


?>