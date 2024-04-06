import { Module } from '@nestjs/common';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseSchema } from './schemas/course.schema';
import { TeacherSchema } from 'apps/teacher/src/schemas/teacher.schema';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'TEACHER_SERVICE',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 3001,
        },
      },
      {
        name: 'LESSON_SERVICE',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 3002,
        },
      },
    ]),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    MongooseModule.forFeature([
      {
        name: 'Course',
        schema: CourseSchema,
      },
      {
        name: 'Teacher',
        schema: TeacherSchema,
      },
    ]),
  ],
  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule {}
