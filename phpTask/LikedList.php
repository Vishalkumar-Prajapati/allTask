<?php
class Node {
    public $data;
    public $next;

    function __construct($data) {
        $this->data = $data;
        $this->next = NULL;
    }
}

class LinkedList {
    private $head;

    function __construct() {
        $this->head = NULL;
    }

    function addFirst($data) {
        $newNode = new Node($data);
        $newNode->next = $this->head;
        $this->head = $newNode;
    }

    function delete($data) {
        if ($this->head == NULL) return;
        if ($this->head->data == $data) {
            $this->head = $this->head->next;
            return;
        }
        $current = $this->head;
        while ($current->next != NULL && $current->next->data != $data) {
            $current = $current->next;
        }
        if ($current->next != NULL) {
            $current->next = $current->next->next;
        }
    }

    function search($data) {
        $current = $this->head;
        while ($current != NULL) {
            if ($current->data == $data) {
                return true;
            }
            $current = $current->next;
        }
        return false;
    }
    function display() {
        $current = $this->head;
        echo "This linked list contain :";
        while ($current != NULL) {
            echo $current->data." ";
            $current = $current->next;
        }

    }
}
$linkedList = new LinkedList();
$linkedList->addFirst(1);
$linkedList->addFirst(2);
$linkedList->addFirst(3);
$linkedList->display();

echo $linkedList->search(2) ? "Found\n" : "Not found\n";
// Output: Found

$linkedList->delete(3);
$linkedList->display();

echo $linkedList->search(3) ? "Found\n" : "Not found\n";
// Output: Not found

?>