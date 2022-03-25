import { Module } from '@nestjs/common';
import { DishService } from './dish.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Dish, DishShema } from './schemas/dish.schema';
import { DishController } from './dish.controller';
import { FileService } from 'src/file/file.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Dish.name, schema: DishShema }]),
  ],

  providers: [DishService, FileService],
  controllers: [DishController],
  exports: [DishService],
})
export class DishModule { }
