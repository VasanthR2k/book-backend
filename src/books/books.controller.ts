import { Body, Controller, Delete, Get, Param, Post, Put, Query, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { query } from 'express';
import { BooksService } from './books.service';
import { MulterField } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { AnyFilesInterceptor, FileFieldsInterceptor, FileInterceptor } from '@nestjs/platform-express';
import * as path from "path";


@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService) { }
    @Get()
    async getBooks() {
        console.log("data")
        var filePath = path.resolve(__dirname, "../../upload");
        const books = await this.booksService.getBooks();
        return { books, filePath };
    }


    @Delete('delete/:id')
    async deleteBooks(@Param() id) {
        const books = await this.booksService.deleteBook(id);
        return books;
    }

    @Get('/publicfindbyid/:id')
    async findbyid(@Param() id) {
        console.log(id)
        const books = await this.booksService.findbyid(id);
        return books;
    }

    @Get('filterdata')
    async filterdata(@Query() body) {
        const books = await this.booksService.filterdata(body);
        return books;

    }

    @Get('findbycount')
    async findbycount() {
        const books = await this.booksService.findcount()
        return books;
    }

    @Get('filterdatacount')
    async filterdatacount(@Body() body) {
        const books = await this.booksService.filterdatacount(body);
        return books;
    }

    @Post('post')
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'image', maxCount: 1 },
        { name: 'pdf', maxCount: 1 },
    ]))
    async addBooks(@Body() body, @UploadedFiles() files: { image?: Express.Multer.File[], pdf?: Express.Multer.File[] }) {
        console.log("body", body)
        const books = await this.booksService.addBOOks(body, files,);
        return books;

    }

    @Put('update/:id')
    @UseInterceptors(FileFieldsInterceptor([
        { name: 'image', maxCount: 1 },
        { name: 'pdf', maxCount: 1 },
    ]))
    async updateBooks(@Param() id, @Body() body, @UploadedFiles() files: { image?: Express.Multer.File[], pdf?: Express.Multer.File[] }) {
        const books = await this.booksService.Updatebook(id, body, files);
        return books

    }

    @Post('removedata')
    async removefile(@Body() body) {
        console.log(body)
        const files = await this.booksService.removefile(body);
        return files
    }
}






