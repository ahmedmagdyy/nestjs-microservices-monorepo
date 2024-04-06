import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateCourseDto } from 'apps/course/src/dto/create-course.dto';
import { CreateLessonDto } from 'apps/lesson/src/dto/create-lesson.dto';
import { CreateTeacherDto } from 'apps/teacher/src/dto/create-teacher';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('COURSE_SERVICE') private readonly courseClient: ClientProxy,
    @Inject('TEACHER_SERVICE') private readonly teacherClient: ClientProxy,
    @Inject('LESSON_SERVICE') private readonly lessonClient: ClientProxy,
    @Inject('ORDER_SERVICE') private readonly orderClient: ClientProxy,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  createCourse(data: CreateCourseDto) {
    return this.courseClient.send({ cmd: 'create-course' }, data);
  }

  createTeacher(data: CreateTeacherDto) {
    return this.teacherClient.send({ cmd: 'create-teacher' }, data);
  }

  createLesson(data: CreateLessonDto) {
    return this.lessonClient.send({ cmd: 'create-lesson' }, data);
  }

  getCourseById(id) {
    return this.courseClient.send({ cmd: 'get-course' }, id);
  }

  async getCourseLessons(id) {
    const lessons = await firstValueFrom(
      this.lessonClient.send({ cmd: 'get-course-lessons' }, id),
    );
    return { lessons };
  }

  orderCourse(id, user) {
    return this.orderClient.send({ cmd: 'order-course' }, { course: id, user });
  }
}
