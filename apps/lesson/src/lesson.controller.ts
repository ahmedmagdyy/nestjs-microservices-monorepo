import { Controller } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class LessonController {
  constructor(private readonly lessonService: LessonService) {}

  @MessagePattern({ cmd: 'create-lesson' })
  createLesson(data: any) {
    return this.lessonService.createLesson(data);
  }

  @MessagePattern({ cmd: 'get-lessons' })
  getLessons(data) {
    return this.lessonService.getLessons(data);
  }

  @MessagePattern({ cmd: 'get-course-lessons' })
  getCourseLessons(data) {
    return this.lessonService.getLessons(data);
  }
}
