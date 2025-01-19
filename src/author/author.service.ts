import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Author } from "./author.entity";
import { Book } from "../book/book.entity";

@Injectable()
export class AuthorService{
    constructor(
        @InjectRepository(Book) private readonly bookRepository: Repository<Book>,
    ){}

    async createBook(data: Partial<Book>): Promise<Book>{
        const book = this.bookRepository.create(data);
        return this.bookRepository.save(book)
    }
    async findAll(): Promise<Book[]>{
        return this.bookRepository.find({relations:['author']});
    }
    async findOne(id:number): Promise<Book>{
        return this.bookRepository.findOne({where:{id}, relations:['author']});
    }

    async updateBook(id: number, data: Partial<Book>): Promise<Book>{
        await this.bookRepository.update(id, data);
        return this.bookRepository.findOneBy({id});
    }

    async deleteBook(id:number): Promise<void>{
        await this.bookRepository.delete({ id })
    }

}