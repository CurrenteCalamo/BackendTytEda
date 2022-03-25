import { ApiProperty } from '@nestjs/swagger';

export class CompanyDto {
  @ApiProperty({
    example: '623b3aa7d2c',
    description: 'id админа компании.',
  })
  readonly creator: string;

  @ApiProperty({ example: 'sber', description: 'Название компании.' })
  readonly name: string;

  @ApiProperty({ example: '1800', description: 'Ценовой лимит компании.' })
  readonly limit: string;

  @ApiProperty({
    example: ['dlsnfl', 'fjdlnf'],
    description: 'Maccив id пользователей компании.',
  })
  readonly users: string[];

  @ApiProperty({
    example: ['dlsnfl', 'fjdlnf'],
    description: 'Maccив id заказов.',
  })
  readonly orders: string[];

  @ApiProperty({
    example: 'Самое вкусное мороженое.',
    description: 'Описание компании.',
  })
  readonly text: string;
}
