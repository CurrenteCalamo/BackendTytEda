import { ApiProperty } from "@nestjs/swagger";

export class DishDto {
  @ApiProperty({ example: "мороженое", description: 'Название блюда' })
  readonly name: string;

  @ApiProperty({ example: "самое вкусное", description: 'Описание блюда' })
  readonly text: string;

  @ApiProperty({ example: "1800", description: 'Лимит меню' })
  readonly limit: string;

  @ApiProperty({ example: "icecream", description: 'тип блюда' })
  readonly type: string;
  
  @ApiProperty({ example: "1", description: 'first week' })
  readonly week: string;
}
