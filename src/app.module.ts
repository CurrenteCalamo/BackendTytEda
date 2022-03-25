import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import * as path from 'path';
import { ServeStaticModule } from '@nestjs/serve-static';
import { AppController } from './app.controller';
import { DishModule } from './dish/dish.module';
import { ConfigModule } from '@nestjs/config';
import { FileModule } from './file/file.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/oder.module';
import { CompanyModule } from './company/company.module';
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env' }),
    ServeStaticModule.forRoot({ rootPath: path.resolve(__dirname, 'static') }),
    MongooseModule.forRoot(process.env.MONGODB),
    UserModule,
    AuthModule,
    FileModule,
    DishModule,
    OrderModule,
    CompanyModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
