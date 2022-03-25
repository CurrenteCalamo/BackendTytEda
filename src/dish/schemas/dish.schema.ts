import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type DishDocument = Dish & Document;

@Schema()
export class Dish {
  @ApiProperty({ example: "мороженое", description: 'Название блюда' })
  @Prop()
  name: string;

  @ApiProperty({ example: "image/dlfmnoengd.png", description: 'Путь до статичного фото' })
  @Prop()
  image: string;

  @ApiProperty({ example: "самое вкусное", description: 'Описание блюда' })
  @Prop()
  text: string;

  @ApiProperty({ example: "1800", description: 'Лимит меню' })
  @Prop()
  limit: string;

  @ApiProperty({ example: "icecream", description: 'тип блюда' })
  @Prop()
  type: string;
}
export const DishShema = SchemaFactory.createForClass(Dish);
