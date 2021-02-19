import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { Contact } from './entities/contact.entity';

require('dotenv').config();

//console.log(process.env);

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      database: 'nestngdb',
      username: 'root',
      password: process.env.MYSQL_ROOT_PASSWORD,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Contact]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
