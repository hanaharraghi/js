import { Injectable, Inject } from '@nestjs/common';
import { Prodact } from '../prodact.model';
//import { ObjectId } from 'mongodb';
import { MongoRepository,ObjectId } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProdactService {
     constructor(@InjectRepository(Prodact) private readonly userRepository:MongoRepository<Prodact>){}
    
        // Get all users
        async findAll(): Promise<Prodact[]> {
            return await this.userRepository.find();
        }
        // Find a user by ID n3mel ."null" ken ma l9ainahesh (ken 7ab n handle l case hedhi)
        async findOneproduct(id: ObjectId) {
            console.log("id in service:", id);
            //const user = await this.userRepository.findOneBy(id);
            // Handle the case where the user is not found (if needed)
           // return user;
        }
    
    
        // Delete a user by ID
        // ken nfase5 w  howa yrodli message li 3malna delete
        async deleteUser(id: ObjectId): Promise<String> {
            await this.userRepository.delete(id);
            return  "delete done" ;
        }
        // Create a new user
    
        async createUser(data: Partial<Prodact>): Promise<Prodact> {
           // const newUser = this.userRepository.create(data);
            return await this.userRepository.save(data);
        }
    
        async updateUser(id: ObjectId, data: Prodact): Promise<Prodact | null> {
           await this.userRepository.update(id, data);
            return this.userRepository.findOneBy(id);
    
          // return await this.userRepository.update({data, id});
        }
}
