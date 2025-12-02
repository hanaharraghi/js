import { Module } from '@nestjs/common';
import { UsersController } from './user.controller';

import { user } from '@angular/fire/auth';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.model';
import { UserserviceService } from './userservice/userservice.service';
import { ProdactService } from './prodact/prodact.service';
import { ProdactController } from './prodact/prodact.controller';
import { Prodact } from './prodact.model';

@Module({
  imports: [TypeOrmModule.forFeature([User,Prodact])],
  controllers: [UsersController, ProdactController],
  providers: [UserserviceService, ProdactService],
})
export class UsersModule {}
