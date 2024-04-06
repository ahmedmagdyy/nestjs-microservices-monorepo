import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TeacherDocument = HydratedDocument<Teacher>;

@Schema({
  timestamps: true,
  _id: true,
  id: true,
})
export class Teacher {
  @Prop()
  name: string;

  @Prop()
  lastName: string;

  @Prop()
  email: string;
}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);

export interface TeacherModel {
  name: string;
  lastName: string;
  email: string;
}
