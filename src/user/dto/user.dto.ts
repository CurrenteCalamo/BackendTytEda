import { ApiProperty } from '@nestjs/swagger';

export class UserDto {
  @ApiProperty({
    example: 'supername1',
    description: 'Уникальное имя пользователя.',
  })
  readonly username: string;

  @ApiProperty({
    example: 'supername1@gmail.com',
    description: 'Уникальный email пользователя.',
  })
  readonly email: string;

  @ApiProperty({
    example: 'supername1',
    description: 'Не зашифрованный пароль пользователя.',
  })
  readonly password: string;

  @ApiProperty({
    example: 'f2n1wY2ba1SIhHpWf',
    description: 'Id компании в которой состоит пользователь.',
  })
  readonly company: string;

  @ApiProperty({
    example: 'ba1SIhHpWfteOMHd',
    description: 'id компании которой управляет пользователь.',
  })
  readonly owner: string;

  @ApiProperty({ example: 'Admin', description: 'Роль пользователя.' })
  readonly role: string;
}
