import { Controller, Get, Post, Put,Delete, Param, Body } from "@nestjs/common";
import {BookService} from './book.Service'
import { bookModule } from "./book.module";
import { CreateBookDto } from "../book/dto/create-book.dto";
import { Book } from "./book.entity";

@Controller('books')
export class BookController{
    constructor(private readonly bookService:BookService){}

  @Post()
  async createBook(@Body() data: CreateBookDto): Promise<Book> {
    return this.bookService.createBook(data);
  }

  @Get(':id')
  async findAll(): Promise<Book[]>{
    return this.bookService.findAll()
  }

  @Get()
  async findOne(@Param('id') id:number): Promise<Book>{
    return this.bookService.findOne(id)
  }

  @Put(":id")
  async updateBook(@Param('id') id:number, @Body() data: Partial<Book>): Promise<Book>{
    return this.bookService.updateBook(id, data)
  }

  @Delete(':id')
  async deleteBook(@Param('id') id:number): Promise<void>{
    return this.bookService.deleteBook(id)
  }

}