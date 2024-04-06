import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CourseDocument = HydratedDocument<Course>;

@Schema({
  timestamps: true,
  _id: true,
  id: true,
})
export class Course {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop({ ref: 'Teacher' })
  teacher: string;
}

export const CourseSchema = SchemaFactory.createForClass(Course);

export interface CourseModel {
  name: string;
  description: string;
  price: number;
  teacher: string;
}
