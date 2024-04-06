import { Controller, Get } from '@nestjs/common';
import { LessonService } from './lesson.service';

@Controller()
export class LessonController {
  constructor(private readonly lessonService: LessonService) {}

  @Get()
  getHello(): string {
    return this.lessonService.getHello();
  }
}
