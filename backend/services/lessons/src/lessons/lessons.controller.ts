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

@Controller('lessons')
export class LessonsController {
  private logger = new Logger(LessonsController.name);

  constructor(private readonly lessonsService: LessonsService) {}

  @Get()
  async findAll() {
    try {
      return await this.lessonsService.findAll();
    } catch (err) {
      this.logger.error(`Failed to find all lessons: ${err}`);
      throw new HttpException(err?.code ?? err?.name ?? `${err}`, 400);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    try {
      return await this.lessonsService.findOne(+id);
    } catch (err) {
      this.logger.error(`Failed to find lesson: ${err}`);
      throw new HttpException(err?.code ?? err?.name ?? `${err}`, 400);
    }
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
