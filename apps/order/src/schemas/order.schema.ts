import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

@Schema({
  timestamps: true,
  _id: true,
  id: true,
})
export class Order {
  @Prop({ required: true, type: String, ref: 'Course' })
  course: string;

  @Prop()
  user: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);

export interface OrderModel {
  course: string;
  user: string;
}
