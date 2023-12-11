import { v4 as uuid } from 'uuid';
export enum TaskStatus {
  OPEN = 'OPEN',
  IN_PROGRESS = 'In_PROGRESS',
  DONE = 'DONE',
}
export class Task {
  taskId: string;
  title: string;
  status: TaskStatus;
  description: string;
  categoryId: string;
  constructor(title: string, description: string, categoryId: string) {
    this.taskId = uuid();
    this.title = title;
    this.status = TaskStatus.OPEN;
    this.description = description;
    this.categoryId = categoryId;
  }
}
export class Category {
  categoryId: string;
  name: string;
  constructor(name: string) {
    this.categoryId = uuid();
    this.name = name;
  }
}
