import { ApiProperty } from "@nestjs/swagger";

export class OrderDto {
  @ApiProperty({ example: 'sfnenlnf32', description: 'Id компании котор принадлежит заказ' })
  readonly company: string;

  @ApiProperty({ example: ['dljslfjdjs', 'fjskdjfnof'], description: 'Массив блюд' })
  readonly dish: string[];

  @ApiProperty({ example: "02.03.2022", description: 'Время когда блюдо нужно будет приготовить' })
  readonly date: string;

  @ApiProperty({ example: "dnfnosnofnsof", description: 'Id пользователя которому принадлеж заказ' })
  readonly creator: string;
}
