<?php
class Stack
{
public $stack;
public function __construct()
{
    $this->stack=array();
}
public function Push($element)
{
    array_push($this->stack,$element);
    echo "the element is push successfully\n";
    // echo "now element in stack is :\n";
    // print_r($this->stack);
    // echo "\n";
}
public function is_empty() {
    return empty($this->queue);
}
public function Display(){
    echo "This stack contains:";
    foreach ($this->stack as $value) {
        echo $value." " ;
    }
}

public function Pop()
{
    if($this->is_empty()){
        $ele=array_pop($this->stack);
        echo "The element is poped and element is $ele \n";
        echo "now element in stack is :\n";
        print_r(array_reverse($this->stack));
        echo "\n";

    }
    else {
        echo "There is no element in a stack\n";
    }
}
}
$obj=new Stack();
$t=True;
while($t===True)
{
    echo "\n
Enter 1 for push\n
Enter 2 for pop\n
Enter 3 for exit\n
Enter 4 for Display\n
";
$print=(int)readline("\n");
switch ($print) {
    case 1:
        $add=readline("Enter the element for push in stack\n");
        $obj->Push($add);
        break;
    case 2:
        $obj->Pop();
        break;
    case 3:
        $t=False;
        break;
    case 4:
        $obj->Display();
        break;
    default:
        echo "Enter the valid number\n";
        break;
}

}


?>