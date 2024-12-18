import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { unlink } from "fs";
import { IFBooks } from "src/domain/interface/Books.interface";
import { Like, Repository } from "typeorm";
import { fileURLToPath } from "url";
import { BooksEntity } from "../entities/BooksEntity.entity";
import * as path from 'path';

@Injectable()
export class DBbooks implements IFBooks {
    addBOOks(data: any) {
        throw new Error('Method not implemented.');
    }

    constructor(
        @InjectRepository(BooksEntity)
        private readonly books: Repository<BooksEntity>,
    ) { }

    async findAll(): Promise<any> {
        return await this.books.find();
    }

    async findById(id: number): Promise<any> {
        return await this.books.findOne({ where: { id: id }, })
    }

    async findCount(): Promise<any> {
        return await this.books.count()
    }


    async createBooks(formData: any, file: any): Promise<any> {

        if (file) {
            if (file.image && file.pdf) {
                return await this.books.insert({
                    title: formData.title, description: formData.description, author: formData.author,
                    release_year: formData.release_year, download: file.image[0].filename, uploadpdf: file.pdf[0].filename
                });
            }
            else if (file.image) {
                return await this.books.insert({
                    title: formData.title, description: formData.description, author: formData.author,
                    release_year: formData.release_year, download: file.image[0].filename
                });
            }
            else {
                return await this.books.insert({
                    title: formData.title, description: formData.description, author: formData.author,
                    release_year: formData.release_year, uploadpdf: file.pdf[0].filename
                });
            }
        }
        else {
            return await this.books.insert({
                title: formData.title, description: formData.description, author: formData.author,
                release_year: formData.release_year,
            });
        }
    }

    async updateBooks(id: number, formData: any, files: any): Promise<any> {

        if (files) {
            if (files.image && files.pdf) {
                return await this.books.update({ id }, {
                    title: formData.title, description: formData.description,
                    author: formData.author, release_year: formData.release_year, download: files.image[0].filename, uploadpdf: files.pdf[0].filename
                });
            }
            else if (files.pdf) {
                return await this.books.update({ id }, {
                    title: formData.title, description: formData.description,
                    author: formData.author, release_year: formData.release_year, uploadpdf: files.pdf[0].filename
                });
            }
            else {
                return await this.books.update({ id }, {
                    title: formData.title, description: formData.description,
                    author: formData.author, release_year: formData.release_year, download: files.image[0].filename
                });
            }
        }
        else {
            return await this.books.update({ id }, {
                title: formData.title, description: formData.description,
                author: formData.author, release_year: formData.release_year
            });
        }
    }


    async deletBooks(id: number): Promise<any> {
        var values = await this.findById(id)
        var imagepath = path.resolve(__dirname, "../../../upload") + "/" + values.download
        unlink(imagepath, async function (err) {
            if (err) {

            }

        })
        var filePath = path.resolve(__dirname, "../../../upload") + "/" + values.uploadpdf
        unlink(filePath, async function (err) {
            if (err) {

            }
        })
        return await this.books.delete({ id });
    }

    async findsametitle(title: string): Promise<any> {
        return await this.books.findOne({ where: { title: title } });
    }

    async filterdata(formData: any): Promise<any> {
        return await this.books.find({
            where: [
                { title: Like(`%${formData.queryString}%`) },
                { description: Like(`%${formData.queryString}%`) },
                { author: Like(`%${formData.queryString}%`) },
                { release_year: formData.queryString }
            ]
        })
    }

    async filterdatacount(formData: any): Promise<any> {
        return await this.books.createQueryBuilder("req")
            .where({ description: Like(`%${formData.description}%`) })
            .getManyAndCount()

    }

    async uploadfile(formdata: any): Promise<any> {
        return await this.books.insert({ download: formdata.download })

    }

    async removefile(formdata: any): Promise<any> {
        var values = await this.findById(formdata.id)
        if (formdata.type == "image") {
            var filePath = path.resolve(__dirname, "../../../upload") + "/" + values.uploadpdf
            unlink(filePath, async function (err) {
                if (err) {

                }
            })
            return await this.books.update({ id: formdata.id }, { uploadpdf: '' })
        }
        else if (formdata.type == "pdf") {
            var imagepath = path.resolve(__dirname, "../../../upload") + "/" + values.download
            unlink(imagepath, async function (err) {
                if (err) {

                }
            })

            return await this.books.update({ id: formdata.id }, { download: '' })

        }

    }
}