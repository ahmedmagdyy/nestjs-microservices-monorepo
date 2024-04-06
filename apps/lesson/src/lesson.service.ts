import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { LessonModel } from './schemas/lesson.schema';
import { Model } from 'mongoose';

@Injectable()
export class LessonService {
  constructor(@InjectModel('Lesson') private lessonModel: Model<LessonModel>) {}

  async createLesson(data: any) {
    const lesson = new this.lessonModel(data);
    return lesson.save();
  }

  async getLessons(data: any) {
    return this.lessonModel.find({ course: data.id });
  }
}
