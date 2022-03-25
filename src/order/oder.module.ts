import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { FileService } from 'src/file/file.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderShema } from './schemas/order.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Order.name, schema: OrderShema }]),
  ],
  providers: [OrderService, FileService],
  controllers: [OrderController],
})
export class OrderModule { }
