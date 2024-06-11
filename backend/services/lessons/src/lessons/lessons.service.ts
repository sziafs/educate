import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LessonSchema, LessonType } from './schemas/types';
import { UpdateLessonEvent } from './events/update-lesson-event';

@Injectable()
export class LessonsService {
  constructor(private readonly prismaService: PrismaService) {}

  handleLessonUpdate(data: UpdateLessonEvent) {
    console.log('handleLessonUpdate - COMMUNICATIONS', data);
  }

  async findAll() {
    return await this.prismaService.lesson.findMany({
      orderBy: {
        title: 'desc',
      },
    });
  }

  async findOne(id: number) {
    return await this.prismaService.lesson.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, body: LessonType) {
    const payload = LessonSchema.parse(body);
    await this.prismaService.lesson.update({
      where: {
        id,
      },
      data: {
        ...payload,
        updatedAt: new Date().toISOString(),
      },
    });
  }
}
