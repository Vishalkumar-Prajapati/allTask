<?php
class FileLoad
{
    public $myFile;
    public $file;
    public function __construct()
    {
        $this->file = 'ToDolist.txt';
        $this->myFile=fopen($this->file,'w+');
    }
    

}
class AddTask extends FileLoad
{
    public function addTask($task)
    {
        fwrite($this->myFile,$task."-incomplit\n");
        echo "task added successfully\n";
        // fclose($this->myFile);
        
    }
}
class DeleteTask extends FileLoad
{
    public function deleteTask($task){
        $contents = file_get_contents($this->file);
        if (strpos($contents,$task."-incomplit")!==False){
            $contents = str_replace($task."-incomplit", '', $contents);
            echo "task deleted successfully\n";
        }
        else if(strpos($contents,$task."-complit")!==False){
            $contents = str_replace($task."-complit", '', $contents);
            echo "task deleted successfully\n";
        }
        else
        {
            echo "task not found\n";
        }
        
        file_put_contents($this->file, $contents);
    }

}
class EditTask extends FileLoad
{
        public function editTask($BeforeEdit,$edit){
        $contents = file_get_contents($this->file);
        if (strpos($contents,$BeforeEdit)!==False){
            $contents = str_replace($BeforeEdit, $edit , $contents);
            echo "task edited successfully\n";
        }
        else{
            echo "task not found\n";
        }
        
        file_put_contents($this->file, $contents);
        fclose($this->myFile);
        
        }
}
class EditComplit extends FileLoad
{
        public function editComplit($edit){

        $contents = file_get_contents($this->file);
        if (strpos($contents,$edit)!==False){
            $contents = str_replace($edit."-incomplit", $edit."-complit" , $contents);
            echo "Done successfully\n";
        }
        else{
            echo "task not found\n";
        }
        
        file_put_contents($this->file, $contents);
        fclose($this->myFile);
        }
}
class ShowTask extends FileLoad
        {
        public function showTask(){

        
        $contents = file_get_contents($this->file);
        $allTask= explode("\n",$contents);
        foreach ($allTask as $value) {
            echo $value."\n";
        }
    }
}
$addTask0=new AddTask();
$deleteTask0=new DeleteTask();
$editTask0=new EditTask();
$showTask0=new ShowTask();
$editComplit0=new EditComplit();
$t=True;
while($t==True)
{

echo "\n
Enter 1 for Add Task\n
Enter 2 for Edit Task\n
Enter 3 for Delete Task\n
Enter 4 for Convert to complit task Task\n
Enter 5 for See all Task\n
Enter 6 for exit\n
";
$print=(int)readline("\n");
switch ($print) {
    case 1:
        $add=readline("Enter the Task\n");
        $addTask0->addTask($add);
        
        break;
    case 2:
        $bEdit=readline("Enter the Task which you have to change\n");
        $edit=readline("Enter the correct Task \n");
        $editTask0->editTask($bEdit,$edit);
        
        break;
    case 3:
        $delete=readline("Enter the Task which you have to delete\n");
        $deleteTask0->deleteTask($delete);
       

        break;
    case 4:
        $editComplit=readline("Enter the Task which you complit\n");
        $editComplit0->editComplit($editComplit);
        

        break;
    case 5:
        $showTask0->showTask();
        break;
    case 6:
        $t=False;
        break;
    default:
        echo "Enter the valid number\n";
        break;
}
}



?>