import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorModule } from './author/author.module';
import { bookModule } from './book/book.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database:'library.db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],

    }),
    AuthorModule,
    bookModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
