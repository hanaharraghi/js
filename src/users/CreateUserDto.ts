import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {


  @IsString()
  @IsNotEmpty({message:"not be empty"})
  username: string;


  @IsString()
  @IsNotEmpty()
  email: string;


  @IsString()
  @IsNotEmpty()
  status: string;
}