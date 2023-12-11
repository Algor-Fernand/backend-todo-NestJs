import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { CategoriesModule } from './categories/categories.module';

@Module({
  imports: [TaskModule, CategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
