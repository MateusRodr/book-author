import { IsString, IsDate, IsNotEmpty } from "class-validator";

export class CreateBookDto{
    @IsString()
    @IsNotEmpty()
    title:string;

    @IsDate()
    @IsNotEmpty()
    publicationDate: Date;

    @IsNotEmpty()
    authorId:number;
}