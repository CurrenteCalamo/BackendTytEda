import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order, OrderDocument } from './schemas/order.schema';
import { Model } from 'mongoose';
import { OrderDto } from './dto/order.dto';
@Injectable()
export class OrderService {
  constructor(
    @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
  ) {}

  async dispatch(id, dish) {
    const order = await this.orderModel.findById(id);
    order.dish.push(dish);
    order.save();
    return order;
  }

  async search(id) {
    const order = this.orderModel.findById(id);
    return order;
  }
  async date(date) {
    const order = this.orderModel.find({
      date: date,
    });
    return order;
  }
  async getOne(id) {
    const order = this.orderModel.findById(id);
    return order;
  }
async getAll(count = 10, offset = 1) {
    const company = await this.companyModel
      .find()
      .skip(Number(offset))
      .limit(Number(count));
    return company;
  }
  
  async create(dto: OrderDto) {
    const order = await this.orderModel.create(dto);
    return order;
  }

  async delete(id) {
    try {
      const order = await this.orderModel.findById(id);
      order.delete();
    } catch (e) {
      return null;
    }
  }
}
