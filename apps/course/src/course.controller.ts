import { Body, Controller } from '@nestjs/common';
import { CourseService } from './course.service';
import { MessagePattern } from '@nestjs/microservices';
import { CreateCourseDto } from './dto/create-course.dto';

@Controller()
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @MessagePattern({ cmd: 'create-course' })
  createCourse(
    @Body()
    data: CreateCourseDto,
  ) {
    return this.courseService.createCourse(data);
  }

  @MessagePattern({ cmd: 'get-course' })
  getCourseById(data) {
    return this.courseService.getCourseById(data.id);
  }
}
