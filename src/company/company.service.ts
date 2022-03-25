import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FileService, FileType } from 'src/file/file.service';
import { CompanyDto } from './dto/company.dto';
import { Company, CompanyDocument } from './schemas/company.schema';

@Injectable()
export class CompanyService {
  constructor(
    @InjectModel(Company.name) private companyModel: Model<CompanyDocument>,
    private fileService: FileService,
  ) {}

  async addOrders(id, order) {
    const company = await this.companyModel.findById(id);
    company.users.push(order);
    company.save();
    return company;
  }

  async addUser(id, userId) {
    const company = await this.companyModel.findById(id);
    company.users.push(userId);
    company.save();
    return company;
  }

  async getAll(count = 10, offset = 1) {
    const company = await this.companyModel
      .find()
      .skip(Number(offset))
      .limit(Number(count));
    return company;
  }

  async search(query: string) {
    const companys = await this.companyModel.find({
      name: query,
    });
    return companys;
  }

  async getOne(id) {
    const company = this.companyModel.findById(id);
    return company;
  }

  async delete(id) {
    try {
      const company = await this.companyModel.findById(id);
      company.delete();
    } catch (e) {
      return null;
    }
  }

  async create(dto: CompanyDto, image) {
    const imagePath = this.fileService.createFile(FileType.IMAGE, image);
    const company = await this.companyModel.create({
      ...dto,
      image: imagePath,
    });
    return company;
  }

  // async create(dto: CompanyDto) {
  //   const company = await this.companyModel.create(dto);
  //   return company;
  // }
}
