import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type LessonDocument = HydratedDocument<Lesson>;

@Schema({
  timestamps: true,
  _id: true,
  id: true,
})
export class Lesson {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop()
  image: string;

  @Prop()
  url: string;

  @Prop({ required: true, type: String, ref: 'Course' })
  course: string;
}

export const LessonSchema = SchemaFactory.createForClass(Lesson);

export interface LessonModel {
  name: string;
  description: string;
  image: string;
  url: string;
  course: string;
}
