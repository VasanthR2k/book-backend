import { Injectable } from '@nestjs/common';
import { BooksController } from './books.controller';
import { IFBooks } from "src/domain/interface/Books.interface";
import { DBbooks } from 'src/infrastructure/repositories/book.repositories';
@Injectable()

export class BooksService {
  constructor(private Ifbook: DBbooks) { }

  async getBooks(): Promise<any> {
    const findall = await this.Ifbook.findAll();
    return findall
  }

  async addBOOks(data, file): Promise<any> {
    // return await this.Ifbook.createBooks(data, file);
   return await  this.findsametitle(data,file)
  }

  async Updatebook(bookid, book,files): Promise<any> {
    console.log(bookid)
    return await this.Ifbook.updateBooks(bookid.id, book,files);
  }

  async deleteBook(bookid): Promise<any> {
    return await this.Ifbook.deletBooks(bookid.id)
  }
  async findbyid(bookid): Promise<any> {

    console.log("bookid",bookid.id)

    var findbyids = await this.Ifbook.findById(bookid.id)
    return findbyids

    // if (findbyids && book.title) {

    //   return this.Updatebook(bookid, book,)
    // }
    // else if (findbyids) {
    //   return findbyids
    // }
    // else {
    //   return { message: "this is null" }
    // }

  }
  async findcount(): Promise<any> {

    return await this.Ifbook.findCount()
    
  }
  async findsametitle(data, file): Promise<any> {
    console.log("data.title",data.title)
    var samename = await this.Ifbook.findsametitle(data.title)
    console.log(samename)
  
    if (samename) {
    
      return  { message: "title already exit" }
      
    
    }
    else {
      return await this.Ifbook.createBooks(data, file);
    }

  }

  async filterdata(data) {

    const filter = await this.Ifbook.filterdata(data)
    return filter
    // return {data: filter, count: filter.length,}

  }
  async removefile(data){
    const removefile = await this.Ifbook.removefile(data)
    return removefile
  }
  

  async filterdatacount(data) {

    const filterdatacount = await this.Ifbook.filterdatacount(data)
    return filterdatacount;


  }

  async upload(data) {
    const upload = await this.Ifbook.uploadfile(data)
    return upload
  }

  async sametitle(data){
    
  }

}
