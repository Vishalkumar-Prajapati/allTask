<?php

interface TaskRepository {
    public function addTask(Task $task);
    public function deleteTask(Task $task);
    public function updateTask(Task $task);
    public function getTasks();
}

interface TaskDisplay {
    public function displayTasks(array $tasks);
}

interface TaskManagement {
    public function addTask(Task $task);
    public function deleteTask(Task $task);
    public function updateTask(Task $task);
}

class FileTaskRepository implements TaskRepository {
    public function addTask(Task $task) {
        // Implementation for adding task to file
    }

    public function deleteTask(Task $task) {
        // Implementation for deleting task from file
    }

    public function updateTask(Task $task) {
        // Implementation for updating task in file
    }

    public function getTasks() {
        // Implementation for returning list of tasks from file
    }
}

class ConsoleTaskDisplay implements TaskDisplay {
    public function displayTasks(array $tasks) {
        // Implementation for displaying tasks in console
    }
}

class TaskManager implements TaskManagement {
    private $taskRepository;
    private $taskDisplay;

    public function __construct(TaskRepository $taskRepository, TaskDisplay $taskDisplay) {
        $this->taskRepository = $taskRepository;
        $this->taskDisplay = $taskDisplay;
    }

    public function addTask(Task $task) {
        $this->taskRepository->addTask($task);
    }

    public function deleteTask(Task $task) {
        $this->taskRepository->deleteTask($task);
    }

    public function updateTask(Task $task) {
        $this->taskRepository->updateTask($task);
    }

    public function displayTasks() {
        $tasks = $this->taskRepository->getTasks();
        $this->taskDisplay->displayTasks($tasks);
    }
}

class Task {
    private $taskName;
    private $taskStatus;

    public function __construct($taskName, $taskStatus) {
        $this->taskName = $taskName;
        $this->taskStatus = $taskStatus;
    }

    // Getters and setters
}

$taskRepository = new FileTaskRepository();
$taskDisplay = new ConsoleTaskDisplay();
$taskManager = new TaskManager($taskRepository, $taskDisplay);

$taskManager->addTask(new Task("Finish homework", "incomplete"));
$taskManager->addTask(new Task("Buy groceries", "incomplete"));
$taskManager->displayTasks();
