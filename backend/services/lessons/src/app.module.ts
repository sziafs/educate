import { Module } from '@nestjs/common';
import { LessonsModule } from './lessons/lessons.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [LessonsModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
