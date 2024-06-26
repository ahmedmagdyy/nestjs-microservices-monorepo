import { LessonController } from './lesson.controller';
import { Module } from '@nestjs/common';
import { LessonService } from './lesson.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { LessonSchema } from './schemas/lesson.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    MongooseModule.forFeature([
      {
        name: 'Lesson',
        schema: LessonSchema,
      },
    ]),
  ],
  controllers: [LessonController],
  providers: [LessonService],
})
export class LessonModule {}
