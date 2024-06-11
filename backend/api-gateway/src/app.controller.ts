import { Controller, Get, HttpException, Logger, Patch } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  private logger = new Logger(AppController.name);

  @Get('lessons')
  getAllLessons() {
    return this.appService.getAllLessons();
  }

  @Patch(':id')
  updateLesson() {
    try {
      return this.appService.updateLesson();
    } catch (err) {
      this.logger.error(`Failed to update lesson: ${err}`);
      throw new HttpException(err?.code ?? err?.name ?? `${err}`, 400);
    }
  }

  @Get('courses')
  async findAllCourses() {
    try {
      const response = await this.appService.findAllCourses();
      return response;
    } catch (err) {
      this.logger.error(`Failed to find all lessons: ${err}`);
      throw new HttpException(err?.code ?? err?.name ?? `${err}`, 400);
    }
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
