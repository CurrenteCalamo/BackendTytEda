import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FileService, FileType } from 'src/file/file.service';
import { DishDto } from './dto/dish.dto';
import { Dish, DishDocument } from './schemas/dish.schema';

@Injectable()
export class DishService {
  constructor(
    @InjectModel(Dish.name) private dishModel: Model<DishDocument>,
    private fileService: FileService,
  ) { }

  async getAll(count = 10, offset = 1) {
    const dish = await this.dishModel
      .find()
      .skip(Number(offset))
      .limit(Number(count));
    return dish;
  }

  async searchbyname(query: string) {
    const tracks = await this.dishModel.find({
      name: query
    });
    return tracks;
  }

  async searchbytype(query: string, limit: string) {
    const tracks = await this.dishModel.find({
      type: query,
      limit: limit
    });
    return tracks;
  }

  async getOne(id) {
    const dish = this.dishModel.findById(id);
    return dish;
  }


  async delete(id) {
    try {
      const dish = await this.dishModel.findById(id);
      dish.delete();
    } catch (e) {
      return null;
    }
  }

  async create(dto: DishDto, image) {
    const imagePath = this.fileService.createFile(FileType.IMAGE, image);
    const dish = await this.dishModel.create({
      ...dto,
      image: imagePath,
    });
    return dish;
  }
}
