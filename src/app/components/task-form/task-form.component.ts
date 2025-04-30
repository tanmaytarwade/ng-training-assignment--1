import { Component } from '@angular/core';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html'
})
export class TaskFormComponent {
  taskTitle = '';

  constructor(private taskService: TaskService) {}

  addTask() {
    if (this.taskTitle.trim()) {
      this.taskService.addTask({ title: this.taskTitle }).subscribe(() => {
        this.taskTitle = '';
      });
    }
  }
}
