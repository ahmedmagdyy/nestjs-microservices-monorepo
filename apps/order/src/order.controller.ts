import { Controller } from '@nestjs/common';
import { OrderService } from './order.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @MessagePattern({ cmd: 'order-course' })
  async orderCourse(data: { course: string; user: string }) {
    return this.orderService.createOrder(data);
  }

  @MessagePattern({ cmd: 'get-orders-by-course' })
  async getOrdersByCourse(data: { courseId: string }) {
    return this.orderService.getOrdersByCourse(data);
  }
}
