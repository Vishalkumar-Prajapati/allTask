<?php

class Queue {
    private $queue;

    public function __construct() {
        $this->queue = array();
    }

    public function enqueue($item) {
        array_push($this->queue, $item);
        echo "the element is enqueue successfully\n";
        // echo "now element in queue is :\n";
        // print_r($this->stack);
        // echo "\n";
    }

    public function dequeue() {
        if ($this->is_empty()) {
            echo "The queue is empty\n";
        }
        else{
        $ele=array_shift($this->queue);
        echo "dequeue is successfully done the dequeue element is $ele\n";
        }
    }

    public function is_empty() {
        return empty($this->queue);
    }
    public function display(){
        echo "This queue contains:";
        foreach ($this->queue as $value) {
            echo $value." " ;
        }
    }

}
$obj=new Queue();
$t=True;
while($t===True)
{
    echo "\n
Enter 1 for enqueue\n
Enter 2 for dequeue\n
Enter 3 for exit\n
Enter 4 for display\n
";
$print=(int)readline("\n");
switch ($print) {
    case 1:
        $add=readline("Enter the element for enqueue in queue\n");
        $obj->enqueue($add);
        break;
    case 2:
        $obj->dequeue();
        break;
    case 3:
        $t=False;
        break;
    case 4:
        $obj->display();
        break;
    default:
        echo "Enter the valid number\n";
        break;
}
}


?>
