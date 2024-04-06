import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TeacherModel } from './schemas/teacher.schema';
import { CreateTeacherDto } from './dto/create-teacher';

@Injectable()
export class TeacherService {
  constructor(
    @InjectModel('Teacher') private readonly teacherModel: Model<TeacherModel>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  createTeacher(data: CreateTeacherDto) {
    return this.teacherModel.create(data);
  }
}
