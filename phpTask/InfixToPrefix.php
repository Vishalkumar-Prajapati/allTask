<?php
class Stack
{
    private $stack;
    private $top;
    public function __construct()
    {
        $this->stack=array();
        $this->top=0;
    }
    public function push($ele){
        array_push($this->stack,$ele);
        $this->top++;
    }
    public function pop(){
        array_pop($this->stack);
        $this->top--;
    }


}
$infix=readline("enter the  prefix code");

?>