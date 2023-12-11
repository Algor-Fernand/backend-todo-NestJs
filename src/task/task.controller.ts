import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
// import { CreateTaskDto } from './dto/create-task.dto';
// import { UpdateTaskDto } from './dto/update-task.dto';
import { TasksService } from './task.service';
import { Task } from 'src/Entities';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task {
    return this.tasksService.getAllTasks();
  }

  @Get(':id')
  getTaskById(@Param('id') id: string): Task {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  createTask(
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('categoryId') categoryId: string,
  ): Task {
    return this.tasksService.createTask(title, description, categoryId);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string): void {
    this.tasksService.deleteTask(id);
  }
}
