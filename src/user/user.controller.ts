import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import {
  ApiOperation,
  ApiParam,
  ApiProperty,
  ApiResponse,
} from '@nestjs/swagger';
import { UserDto } from './dto/user.dto';
import { User } from './schemas/user.schema';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiOperation({
    summary: 'Добавление фотографии профиля по id пользователя.',
  })
  @ApiResponse({ status: 300, type: User })
  @Post('addImage')
  @ApiParam({
    name: 'id',
    description: 'id пользователя.',
  })
  @UseInterceptors(FileFieldsInterceptor([{ name: 'image', maxCount: 1 }]))
  addImage(@UploadedFiles() files, @Query('id') id: string) {
    const { image } = files;
    return this.userService.addImage(id, image[0]);
  }

  @ApiOperation({ summary: 'Создание пользователя.' })
  @ApiResponse({ status: 300, type: User })
  @Post('create')
  createUser(@Body() dto: UserDto) {
    return this.userService.createUser(dto);
  }

  @ApiOperation({ summary: 'Поиск пользователя по Id.' })
  @ApiResponse({ status: 200, type: User })
  @Get('getOne')
  @ApiParam({
    name: 'id',
    description: 'id пользователя.',
  })
  getOne(@Query('id') id: string) {
    return this.userService.getOne(id);
  }

  @ApiOperation({
    summary: 'Добавление компании которой упровляет пользователь.',
  })
  @ApiResponse({ status: 301, type: User })
  @Post('addOwner')
  @ApiParam({
    name: 'id',
    description: 'id пользователя.',
  })
  @ApiParam({
    name: 'ownerId',
    description: 'id компании которой управляет пользователь.',
  })
  addOwner(@Query('id') id: string, @Query('ownerId') ownerId: string) {
    return this.userService.addOwner(id, ownerId);
  }

  @ApiOperation({
    summary: 'Добавление компании в которой будет состоять пользователь.',
  })
  @ApiResponse({ status: 301, type: User })
  @Post('addCompany')
  @ApiParam({
    name: 'id',
    description: 'id пользователя.',
  })
  @ApiParam({
    name: 'companyId',
    description: 'id компании в которой будет состоять пользователь.',
  })
  addCompany(@Query('id') id: string, @Query('companyId') companyId: string) {
    return this.userService.addCompany(id, companyId);
  }

  @ApiOperation({ summary: 'Постраничная валидация.' })
  @ApiResponse({ status: 200, type: User })
  @Get()
  @ApiParam({
    name: 'count',
    description: 'count количество пользователей.',
  })
  @ApiParam({
    name: 'offset',
    description: 'offset номер страницы.',
  })
  getAll(@Query('count') count: number, @Query('offset') offset: number) {
    return this.userService.getAll(count, offset);
  }

  @ApiOperation({ summary: 'Поиск по имени пользователя.' })
  @ApiResponse({ status: 200, type: User })
  @Get('search')
  @ApiParam({
    name: 'query',
    description: 'query имя пользователя котор следует найти.',
  })
  search(@Query('query') query: string) {
    return this.userService.search(query);
  }

  @ApiOperation({ summary: 'Удаление по id.' })
  @ApiResponse({ status: 200, type: User })
  @Get('delete')
  @ApiParam({
    name: 'id',
    description: 'id пользователя которого следует удалить.',
  })
  delete(@Query('id') id: string) {
    return this.userService.delete(id);
  }
}
