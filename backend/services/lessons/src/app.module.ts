import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesController } from './courses/courses.controller';
import { CoursesModule } from './courses/courses.module';
import { LessonsModule } from './lessons/lessons.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [CoursesModule, LessonsModule, PrismaModule],
  controllers: [AppController, CoursesController],
  providers: [AppService],
})
export class AppModule {}
