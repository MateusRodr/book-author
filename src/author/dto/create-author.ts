import {IsDateString, IsNotEmpty} from '@nestjs/class-validator'

export class CreateAuthorDto{
    @IsNotEmpty()
    name:string

    @IsDateString()
    birthDate: string;
}