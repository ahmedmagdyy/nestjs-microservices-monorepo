import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateTeacherDto } from 'apps/teacher/src/dto/create-teacher';
import { CreateLessonDto } from 'apps/lesson/src/dto/create-lesson.dto';
import { CreateCourseDto } from 'apps/course/src/dto/create-course.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('courses')
  createCourse(
    @Body()
    data: CreateCourseDto,
  ) {
    return this.appService.createCourse(data);
  }

  @Post('teachers')
  async createTeacher(
    @Body()
    data: CreateTeacherDto,
  ) {
    return this.appService.createTeacher(data);
  }

  @Post('lessons')
  createLesson(
    @Body()
    data: CreateLessonDto,
  ) {
    return this.appService.createLesson(data);
  }

  @Get('courses/:id')
  getCourse(@Param() id) {
    return this.appService.getCourseById(id);
  }

  @Get('courses/:id/lessons')
  getCourseLessons(@Param() id) {
    return this.appService.getCourseLessons(id);
  }

  @Post('courses/:id/order')
  orderCourse(@Param() param, @Body() data: { user: string }) {
    return this.appService.orderCourse(param.id, data.user);
  }
}
