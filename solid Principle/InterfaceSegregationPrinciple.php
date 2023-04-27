<?php 
//client should not be forced to depend on interface they do not use
/*interface Animal {
    public function eat();
    public function   groom();

}
class Dog implements Animal {
    public function eat(){

    }
    public function   groom(){

    }
}
class Tiger implements Animal{
    public function eat(){

    }
    public function  groom(){
        //this is false for tiger so that the voletile Interface Segregation principle
    }
   
}*/
interface Animal {
    public function eat();

}
interface Pet{
    public function groom();
}
class Dog implements Animal,Pet {
    public function eat(){

    }
    public function  groom(){

    }
}
class Tiger implements Animal{
    public function eat(){

    }
}

?>