import { IsNotEmpty, IsDateString, IsNumber } from "@nestjs/class-validator";

export class CreateBookDto{

    @IsNotEmpty()
    title:string;

    @IsDateString()
    publicationDate: string;

    @IsNumber()
    authorId:number;
}