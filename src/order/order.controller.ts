import { Controller } from '@nestjs/common';
import { OrderService } from './order.service';
import { Body, Get, Post, Query } from '@nestjs/common';
import { OrderDto } from './dto/order.dto';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { Order } from './schemas/order.schema';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @ApiOperation({ summary: 'Постраничная валидация.' })
  @ApiResponse({ status: 200, type: Order })
  @Get()
  @ApiParam({
    name: 'id',
    description: 'id компании.',
  })
  @ApiParam({
    name: 'date',
    description: 'date дата выдачи.',
  })
  getAll(@Query('id') id: string, @Query('date') date: string) {
    return this.orderService.getAll(id, date);
  }

  @ApiOperation({ summary: 'Поиск по Id' })
  @ApiResponse({ status: 201, type: Order })
  @Get('getOne')
  getOne(@Query('id') id: string) {
    return this.orderService.getOne(id);
  }

  @ApiOperation({ summary: 'Поиск по Id Company' })
  @ApiResponse({ status: 201, type: Order })
  @Get('company')
  search(@Query('id') id: string) {
    return this.orderService.search(id);
  }

  @ApiOperation({ summary: 'Поиск по Date' })
  @ApiResponse({ status: 201, type: Order })
  @Get('date')
  date(@Query('date') date: string) {
    return this.orderService.date(date);
  }

  @ApiOperation({ summary: 'Создание заказа' })
  @ApiResponse({ status: 301, type: Order })
  @Post('create')
  create(@Body() dto: OrderDto) {
    return this.orderService.create(dto);
  }

  @ApiOperation({ summary: 'Удаление по Id' })
  @ApiResponse({ status: 201, type: Order })
  @Get('delete')
  delete(@Query('id') id: number) {
    this.orderService.delete(id);
  }
}
