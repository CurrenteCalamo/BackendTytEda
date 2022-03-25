import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type CompanyDocument = Company & Document;

@Schema()
export class Company {
  @ApiProperty({ example: 'Сбербанк', description: 'Название компании.' })
  @Prop()
  name: string;

  @ApiProperty({
    example: 'image/dngld.jpg',
    description: 'Путь до аватарки пользователя.',
  })
  @Prop()
  image: string;

  @ApiProperty({
    example: 'Сбер банк мы самые крутые',
    description: 'Описание компании.',
  })
  @Prop()
  text: string;

  @ApiProperty({ example: '1800', description: 'Ценовой лимит компании.' })
  @Prop()
  limit: string;

  @ApiProperty({
    example: ['dlsnfl', 'fjdlnf'],
    description: 'Maccив id заказов.',
  })
  @Prop()
  orders: string[];

  @ApiProperty({
    example: ['dlsnfl', 'fjdlnf'],
    description: 'Maccив id пользователей.',
  })
  @Prop()
  users: string[];

  @ApiProperty({
    example: '623b46e4bec930f507f42297',
    description: 'id админа компании.',
  })
  @Prop()
  creator: string;
}
export const CompanyShema = SchemaFactory.createForClass(Company);
