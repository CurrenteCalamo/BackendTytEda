import { HttpException, HttpStatus, Injectable, Query } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FileService, FileType } from 'src/file/file.service';
import { User, UserDocument } from './schemas/user.schema';
import { UserDto } from './dto/user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private fileService: FileService,
  ) {}

  async addImage(id: string, image) {
    const imagePath = this.fileService.createFile(FileType.IMAGE, image);
    const user = await this.userModel.findById(id);
    user.image = imagePath;
    user.save();
    return user;
  }

  async findOne(username: string) {
    return await this.userModel.findOne({ username: username });
  }

  async create(dto: UserDto) {
    const consdition1 = await this.userModel.findOne({
      email: dto.email,
      include: { all: true },
    });
    const consdition2 = await this.userModel.findOne({
      name: dto.username,
      include: { all: true },
    });
    if (consdition1 && consdition2) {
      throw new HttpException('Not valuble email', HttpStatus.BAD_REQUEST);
    }
    const hastpassword = await bcrypt.hash(dto.password, 10);
    const user = await this.userModel.create({
      ...dto,
      password: hastpassword,
    });
    return user;
  }

  async addOwner(id, ownerId) {
    const user = await this.userModel.findById(id);
    user.owner = ownerId;
    user.save();
    return user;
  }
  async addCompany(id, companyId) {
    const user = await this.userModel.findById(id);
    user.company = companyId;
    user.save();
    return user;
  }
  async getAll(count = 10, offset = 1) {
    const dish = await this.userModel
      .find()
      .skip(Number(offset))
      .limit(Number(count));
    return dish;
  }

  async getOne(id) {
    const user = this.userModel.findById(id);
    return user;
  }

  async search(query: string) {
    return await this.userModel.find({
      username: query,
    });
  }

  async delete(id) {
    try {
      const user = await this.userModel.findById(id);
      user.delete();
    } catch (e) {
      return null;
    }
  }
}
