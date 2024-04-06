import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OrderModel } from './schemas/order.schema';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel('Order') private readonly orderModel: Model<OrderModel>,
  ) {}

  async createOrder(order: CreateOrderDto) {
    return this.orderModel.create(order);
  }

  async getOrdersByCourse(data: { courseId: string }) {
    return this.orderModel.find({ course: data.courseId });
  }

  async getTotalOrdersByCourse(data: { courseId: string }) {
    return this.orderModel.countDocuments({ course: data.courseId });
  }
}
