import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { UpdateLessonEvent } from './events/update-lesson-event';

@Injectable()
export class AppService {
  constructor(
    @Inject('COMMUNICATION') private readonly communicationClient: ClientProxy,
  ) {}

  findAllLessons() {
    return this.communicationClient.send({ cmd: 'get_lessons' }, {});
  }

  updateLesson() {
    this.communicationClient.emit(
      'lesson_updated',
      new UpdateLessonEvent(true),
    );
    console.log('event emitted');
  }

  async findAllCourses() {
    return [
      {
        id: 1,
        title: 'Course 1',
        description: 'This is a description for Course 1',
        qtdModules: 5,
        qtdLessons: 20,
        qtdLessonsCompleted: 10,
        percentageCompleted: 50,
        backgroundImage: 'http://example.com/background1.jpg',
      },
      {
        id: 2,
        title: 'Course 2',
        description: 'This is a description for Course 2',
        qtdModules: 7,
        qtdLessons: 30,
        qtdLessonsCompleted: 15,
        percentageCompleted: 50,
        backgroundImage: 'http://example.com/background2.jpg',
      },
    ];
  }

  getHello(): string {
    return 'Hello World!';
  }
}
