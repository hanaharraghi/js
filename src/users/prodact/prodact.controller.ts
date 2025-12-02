import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ObjectId } from 'typeorm/browser/driver/mongodb/typings.js';
import { Prodact } from '../prodact.model';
import { ProdactService } from './prodact.service';

@Controller('prodact')
export class ProdactController {

   
     constructor(private readonly prodactService: ProdactService) {}  
    @Get('showallprodact')
      showAllProdacts() {
        return this.prodactService.findAll();
      }
      @Post('createprodact')
      createProdact(@Body() data: Prodact) {
        return this.prodactService.createUser(data );
      }
      @Get('showprodactId/:id')
      showProdactById( @Param('id') id: ObjectId) {
        return this.prodactService.findOneproduct(id);
      }
  
}
