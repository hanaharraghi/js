import { Controller, Put } from '@nestjs/common';

import { Get, Post, Body, Patch, Param, Delete, Query, Headers } from '@nestjs/common';
import { CreateUserDto } from '../users/CreateUserDto';
import { UserserviceService } from './userservice/userservice.service';
import { User } from './user.model';
import { ObjectId } from 'typeorm';
  


@Controller('users')
export class UsersController {

 /***********************************crud avec mongodb****************************************/


  constructor(private readonly userserviceService: UserserviceService) {}  


  @Get('showalluser')
  showAllUsers() {
    return this.userserviceService.findAll();
  }
  @Post('createuser')
  createUser(@Body() data: User) {
    return this.userserviceService.createUser(data );
  }
  @Get('showuserId/:id')
  showUserById( @Param('id') id: ObjectId) {
    return this.userserviceService.findOne(id);
  }
  @Delete('deleteuser/:id')
  deleteUser(@Param('id') id: ObjectId) {
    return this.userserviceService.deleteUser(id);
  }

  @Put('updateuser/:id')
  updateUser(@Param('id') id: ObjectId, @Body() data: User) {
    return this.userserviceService.updateUser(id, data);
  }

  /****************************************************************************************** */

  users = [
    { id: 1, username: 'Mohamed', email: 'mohamed@esprit.tn', status: 'active' },
    { id: 2, username: 'Sarra', email: 'sarra@esprit.tn', status: 'inactive' },
    { id: 3, username: 'Ali', email: 'ali@esprit.tn', status: 'inactive' },
    { id: 4, username: 'Eya', email: 'eya@esprit.tn', status: 'active' },
  ];


  @Get('show')
  findAll(@Query('username') username: string) {
    if (username) {
      return this.users.filter((user) => user.username === username);
    }
    return this.users;
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.users.find((user) => user.id === Number(id));
  }

  @Post('adddto')
  create(@Body() createUserDto: CreateUserDto, @Headers('authorization') authHeader: string) {
    console.log('Authorization:', authHeader);
    const newUser = { id: Date.now(), ...createUserDto };
    this.users.push(newUser);
    return newUser;
  }
  
  @Patch('update/:id')
  update(@Param('id') id: number, @Body() updateUserDto: CreateUserDto) {
    const user = this.users.find((user) => user.id === Number(id));
    if (user) {
      user.username = updateUserDto.username;
      user.email = updateUserDto.email;
      user.status = updateUserDto.status;
      return user;
    }
    return null;
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    const index = this.users.findIndex((user) => user.id === Number(id));
    if (index !== -1) {
      return this.users.splice(index, 1);
    }
    return this.users;
  }

  @Get('active/:status')
  getActiveUsers(@Param('status') status: string) {
    return this.users.filter((user) => user.status === status);
  }

 

}
