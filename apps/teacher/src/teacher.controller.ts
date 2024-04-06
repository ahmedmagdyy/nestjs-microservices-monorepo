import { Body, Controller } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { CreateTeacherDto } from './dto/create-teacher';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @MessagePattern({ cmd: 'create-teacher' })
  async createTeacher(@Body() data: CreateTeacherDto) {
    return this.teacherService.createTeacher(data);
  }
}
