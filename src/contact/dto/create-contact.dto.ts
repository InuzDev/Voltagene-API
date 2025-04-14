import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateContactDto {
   @IsNotEmpty()
   firstName: string

   @IsNotEmpty()
   lastName: string

   @IsNotEmpty()
   @IsEmail()
   email: string

   @IsOptional()
   phone?: string

   @IsNotEmpty()
   subject: string

   @IsNotEmpty()
   message: string
}
