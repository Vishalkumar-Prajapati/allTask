<?php
//make a todo list which follow solid principles
class Task
{
    public $myFile;
    public $file;
    public function __construct()
    {
        $this->file = 'ToDolist.txt';
        $this->myFile=fopen($this->file,'w+');
    }
    public function AddTask($task)
    {
        fwrite($this->myFile,$task."\n");
    }
    public function DeleteTask($task)
    {
        $contents = file_get_contents($this->file);
        $contents = str_replace($task, '', $contents);
        file_put_contents($this->file, $contents);
        // fclose($this->myFile);
    }
    public function EditTask($BeforeEdit,$edit)
    {
        $contents = file_get_contents($this->file);
        $contents = str_replace($BeforeEdit, $edit , $contents);
        file_put_contents($this->file, $contents);
        fclose($this->myFile);
    }
    public function ShowTask()
    {
        $contents = file_get_contents($this->file);
        $allTask= explode("\n",$contents);
        foreach ($allTask as $key => $value) {
            echo $key." ".$value."\n";
        }
    }
    

}

$obj=new Task();
$obj->AddTask("vishal");
$obj->AddTask("paresh");
$obj->AddTask("jaydeep");
$obj->AddTask("ravi");
$obj->DeleteTask("ravi");
$obj->EditTask("jaydeep","jay");
$obj->ShowTask();



?>