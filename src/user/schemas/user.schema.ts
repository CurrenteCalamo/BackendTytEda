import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';
import { Document } from 'mongoose';

export type UserDocument = User & Document;
@Schema()
export class User {
  @ApiProperty({
    example: 'supername1',
    description: 'Уникальное имя пользователя.',
  })
  @Prop()
  username: string;

  @ApiProperty({
    example: 'supername1@gmail.com',
    description: 'Уникальный email пользователя.',
  })
  @Prop()
  email: string;
  
  @Prop()
  bio: string;

  @ApiProperty({
    example: '$2b$10$8jUPv1dYFt54r9KlYDlhsOwpg614Z2ellhzP2ktPWVntKSUdsrAUm',
    description: 'Зашифрованный пароль пользователя.',
  })
  @Prop()
  password: string;

  @ApiProperty({
    example: '623b46e4bec930f507f42297',
    description: 'id компании которой управляет пользователь.',
  })
  @Prop()
  owner: string;

  @ApiProperty({ example: 'Admin', description: 'Роль пользователя.' })
  @Prop()
  role: string;

  @ApiProperty({
    example: 'image/6b83fc1a-ed64-41b8-83dc-a38a233c8be9.jpg',
    description: 'Путь до аватарки пользователя.',
  })
  @Prop()
  image: string;

  @ApiProperty({
    example: '623b46e4bec930f507f42297',
    description: 'Id компании в которой состоит пользователь.',
  })
  @Prop()
  company: string;
}
export const UserShema = SchemaFactory.createForClass(User);
