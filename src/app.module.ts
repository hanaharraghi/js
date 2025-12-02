import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UserserviceService } from './users/userservice/userservice.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.model';
import { Prodact } from './users/prodact.model';

@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mongodb',
    host:'localhost',
    port:27017,
    database:'testdb',
    entities: [User,Prodact],
    synchronize:true,

  }),
   UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
