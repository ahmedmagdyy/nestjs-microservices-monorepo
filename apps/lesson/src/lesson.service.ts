import { Injectable } from '@nestjs/common';

@Injectable()
export class LessonService {
  getHello(): string {
    return 'Hello World!';
  }
}
