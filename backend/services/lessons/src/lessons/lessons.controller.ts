import {
  Controller,
  Get,
  Patch,
  Param,
  Logger,
  Body,
  HttpException,
} from '@nestjs/common';
import { LessonsService } from './lessons.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { UpdateLessonEvent } from './events/update-lesson-event';

@Controller('lessons')
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  private logger = new Logger(LessonsController.name);

  // @Get()
  // async findAll() {
  //   try {
  //     return await this.lessonsService.findAll();
  //   } catch (err) {
  //     this.logger.error(`Failed to find all lessons: ${err}`);
  //     throw new HttpException(err?.code ?? err?.name ?? `${err}`, 400);
  //   }
  // }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.lessonsService.findOne(+id);
    } catch (err) {
      this.logger.error(`Failed to find lesson: ${err}`);
      throw new HttpException(err?.code ?? err?.name ?? `${err}`, 400);
    }
  }

  @EventPattern('lesson_updated')
  handleLessonUpdate(data: UpdateLessonEvent) {
    this.lessonsService.handleLessonUpdate(data);
  }

  @MessagePattern({ cmd: 'get_lessons' })
  findAll() {
    return this.lessonsService.findAll();
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() body) {
    try {
      return await this.lessonsService.update(+id, body);
    } catch (err) {
      this.logger.error(`Failed to update lesson: ${err}`);
      throw new HttpException(err?.code ?? err?.name ?? `${err}`, 400);
    }
  }
}
