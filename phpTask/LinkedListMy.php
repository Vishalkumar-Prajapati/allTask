<?php
class Node
{
    public $data;
    public $next;
    public function __construct($data)

    {
        $this->data=$data;
        $this->next=null;

    }
}
class LinkedList
{
    public $head;
    public function __construct(){
        $this->head=null;
    }
    public function addFirst($data)
    {
        $newNode =new Node($data);
        $newNode->next=$this->head;
        $this->head=$newNode;

    }
    public function addLast($data)
    {
        $newNode =new Node($data);
        Node $current =$this->head;
        
        while ($current->next!=null){
            $current=$current->next;
        }
        $current->next=$newNode;
    }
    public function printList(){
        
        Node $current=$this->head;
        while ($current->next!=null){
            echo current->next;
            $current=$current->next;
        }

    }
}


?>