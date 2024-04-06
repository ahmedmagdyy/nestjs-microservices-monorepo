import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CourseModel } from './schemas/course.schema';
import { CreateCourseDto } from './dto/create-course.dto';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CourseService {
  constructor(
    @InjectModel('Course') private readonly courseModel: Model<CourseModel>,
    @Inject('LESSON_SERVICE') private readonly lessonService: ClientProxy,
    @Inject('ORDER_SERVICE') private readonly orderService: ClientProxy,
  ) {}

  createCourse(data: CreateCourseDto) {
    return this.courseModel.create(data);
  }

  async getCourseById(id) {
    const course = await this.courseModel
      .findById(id)
      .populate('teacher')
      .exec();

    const courseLessons = await firstValueFrom(
      this.lessonService.send({ cmd: 'get-course-lessons' }, { id }),
    );

    const courseOrders = await firstValueFrom(
      this.orderService.send({ cmd: 'get-orders-by-course' }, { courseId: id }),
    );

    return {
      course,
      lessons: courseLessons,
      orders: courseOrders,
    };
  }
}
