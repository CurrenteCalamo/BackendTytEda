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
import { CompanyDto } from './dto/company.dto';
import { CompanyService } from './company.service';
import { Company } from './schemas/company.schema';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('company')
export class CompanyController {
  constructor(private companyService: CompanyService) {}

  @ApiOperation({ summary: 'Поиск компании по Id.' })
  @ApiResponse({ status: 201, type: Company })
  @Get('getOne')
  @ApiParam({
    name: 'id',
    description: 'id компании.',
  })
  getOne(@Query('id') id: string) {
    return this.companyService.getOne(id);
  }

  @ApiOperation({ summary: 'Поиск по названию компании.' })
  @ApiResponse({ status: 201, type: Company })
  @Get('search')
  @ApiParam({
    name: 'query',
    description: 'query название компании котор следует найти.',
  })
  search(@Query('query') query: string) {
    return this.companyService.search(query);
  }

  @ApiOperation({ summary: 'Постраничная валидация.' })
  @ApiResponse({ status: 201, type: Company })
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
    return this.companyService.getAll(count, offset);
  }

  @ApiOperation({ summary: 'Добавить пользователя в компанию.' })
  @ApiResponse({ status: 301, type: Company })
  @Get('addUser')
  @ApiParam({
    name: 'id',
    description: 'компании.',
  })
  @ApiParam({
    name: 'UserId',
    description: 'id пользователя.',
  })
  addUser(@Query('id') id: string, @Query('userId') userId: string) {
    return this.companyService.addUser(id, userId);
  }

  @ApiOperation({ summary: 'Добавить заказ.' })
  @ApiResponse({ status: 301, type: Company })
  @Get('addOrder')
  @ApiParam({
    name: 'id',
    description: 'id компании.',
  })
  @ApiParam({
    name: 'UserId',
    description: 'id заказа.',
  })
  addOrder(@Query('id') id: string, @Query('orderId') orderId: string) {
    return this.companyService.addOrders(id, orderId);
  }

  // @ApiOperation({ summary: 'Создать новую компанию' })
  // @ApiResponse({ status: 301, type: Company })
  // @Post('create')
  // @UseInterceptors(
  //   FileFieldsInterceptor([
  //     { name: 'image', maxCount: 1 },
  //   ]),
  // )
  // create(@UploadedFiles() files, @Body() dto: CompanyDto) {
  //   const { image } = files;
  //   return this.companyService.create(dto, image[0]);
  // }
  @ApiOperation({ summary: 'Создать новую компанию.' })
  @ApiResponse({ status: 301, type: Company })
  @Post('create')
  createUser(@Body() dto: CompanyDto) {
    return this.companyService.create(dto);
  }

  @ApiOperation({ summary: 'Удоление по Id.' })
  @ApiResponse({ status: 200, type: Company })
  @Get('delete')
  @ApiParam({
    name: 'id',
    description: 'id компании.',
  })
  delete(@Query('id') id: string) {
    return this.companyService.delete(id);
  }
}
