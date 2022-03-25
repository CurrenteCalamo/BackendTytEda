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
import { DishDto } from './dto/dish.dto';
import { DishService } from './dish.service';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { Dish } from './schemas/dish.schema';

@Controller('dish')
export class DishController {
  constructor(private dishService: DishService) {}

  @ApiOperation({ summary: 'Поиск по Id блюда.' })
  @ApiResponse({ status: 201, type: Dish })
  @Get('getOne')
  getOne(@Query('id') id: string) {
    return this.dishService.getOne(id);
  }

  @ApiOperation({ summary: 'Поиск  по названию блюда.' })
  @ApiResponse({ status: 201, type: Dish })
  @Get('searchbyname')
  searchbyname(@Query('query') query: string) {
    return this.dishService.searchbyname(query);
  }

  @ApiOperation({ summary: 'Поиск  по типу блюда и по лимиту.' })
  @ApiResponse({ status: 201, type: Dish })
  @Get('search')
  @ApiParam({
    name: 'query',
    description: 'query тип блюда.',
  })
  @ApiParam({
    name: 'limit',
    description: 'limit лимит блюда.',
  })
  searchbydate(@Query('query') query: string, @Query('limit') limit: string) {
    return this.dishService.searchbytype(query, limit);
  }
  @ApiOperation({ summary: 'Постраничная валидация.' })
  @ApiResponse({ status: 201, type: Dish })
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
    return this.dishService.getAll(count, offset);
  }

  @ApiOperation({ summary: 'Создание блюда.' })
  @ApiResponse({ status: 301, type: Dish })
  @Post('create')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'image', maxCount: 1 }]))
  create(@UploadedFiles() files, @Body() dto: DishDto) {
    const { image } = files;
    return this.dishService.create(dto, image[0]);
  }

  @ApiOperation({ summary: 'Удоление по Id.' })
  @ApiResponse({ status: 201, type: Dish })
  @Get('delete')
  delete(@Query('id') id: string) {
    this.dishService.delete(id);
  }
}
