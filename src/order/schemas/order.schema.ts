import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';
export type OrderDocument = Order & Document;
@Schema()
export class Order {

  @ApiProperty({ example: 'sfnenlnf32', description: 'Id компании котор заказ' })
  @Prop()
  company: string;

  @ApiProperty({ example: 'sfnenlnf32', description: 'Id пользователя которому принадлеж заказ' })
  @Prop()
  creator: string;

  @ApiProperty({ example: ["fknfonslfnd", "fsndfksdjf", "fldjjflsjf"], description: 'Id блюд котор заказал пользователь' })
  @Prop()
  dish: string[];

  @ApiProperty({ example: "02.03.2022", description: 'Время когда блюдо нужно будет приготовить' })
  @Prop()
  date: string;
}
export const OrderShema = SchemaFactory.createForClass(Order);
