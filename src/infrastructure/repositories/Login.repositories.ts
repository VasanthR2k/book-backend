import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

import { logininterface } from "src/domain/interface/Login.interface";
import { Like, Repository } from "typeorm";

import { LoginEntity } from "../entities/LoginEntity.entity";
@Injectable()


export class Loginrepository implements logininterface {
   
  

    constructor(
        @InjectRepository(LoginEntity)
        private readonly Login: Repository<LoginEntity>,
    ) { }

   async  pastrotoken(formdata: any): Promise<any> {
        return await this.Login.findOne({ where: { username:formdata.Username , Password:formdata.password} });
    }

   async findpastroalldata(): Promise<any> {
        return await this.Login.find();
    }
   
    async finddata(formdata:any): Promise<any> {
       return await this.Login.findOne({ where: { username:formdata.Username , Password:formdata.password} });
    }

    async  findAll(): Promise<any> {
        return await this.Login.find();
    }
}