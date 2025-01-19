import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Book } from "./book.entity";
import { BookService } from './book.Service'
import { BookController } from './book.Controller';
import { Author } from "src/author/author.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Book, Author])],
    providers: [BookService],
    controllers: [BookController],
})

export class bookModule{}