import { Module } from '@nestjs/common';
import { CompanyService } from './company.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Company, CompanyShema } from './schemas/company.schema';
import { CompanyController } from './company.controller';
import { FileService } from 'src/file/file.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Company.name, schema: CompanyShema }]),
  ],

  providers: [CompanyService, FileService],
  controllers: [CompanyController],
  exports: [CompanyService],
})
export class CompanyModule { }
