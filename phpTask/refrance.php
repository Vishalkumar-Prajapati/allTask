class Task {
  private $id;
  private $description;
  private $dueDate;
  
  public function __construct($id, $description, $dueDate) {
    $this->id = $id;
    $this->description = $description;
    $this->dueDate = $dueDate;
  }
  
  public function getId() {
    return $this->id;
  }
  
  public function getDescription() {
    return $this->description;
  }
  
  public function getDueDate() {
    return $this->dueDate;
  }
  
  public function setDescription($description) {
    $this->description = $description;
  }
  
  public function setDueDate($dueDate) {
    $this->dueDate = $dueDate;
  }
}
class TaskList {
  private $tasks = array();
  
  public function addTask($task) {
    $this->tasks[] = $task;
  }
  
  public function editTask($id, $description, $dueDate) {
    foreach ($this->tasks as $task) {
      if ($task->getId() == $id) {
        $task->setDescription($description);
        $task->setDueDate($dueDate);
        break;
      }
    }
  }
  
  public function deleteTask($id) {
    foreach ($this->tasks as $key => $task) {
      if ($task->getId() == $id) {
        unset($this->tasks[$key]);
        break;
      }
    }
  }
  
  public function viewTasks() {
    usort($this->tasks, function($a, $b) {
      return strcmp($a->getDueDate(), $b->getDueDate());
    });
    
    foreach ($this->tasks as $task) {
      echo $task->getId() . ": " . $task->getDescription() . " (Due: " . $task->getDueDate() . ")\n";
    }
  }
}

