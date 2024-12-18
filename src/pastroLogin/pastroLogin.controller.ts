import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { pastroservice } from './pastroLogin.service';


@Controller('pastro')

export class pastrocontroller{
    constructor(private pastroServie:pastroservice){}
    @Get('pastro')
    async getpastrodata(){
        const login = await this.pastroServie.getpastrodata()
        console.log(login,"login")
        return login;
    }

    @Post('findone')
    async findparticulardata(@Body() data){
       
        const login = await this.pastroServie.pastrodatacheck(data)
        return login
        
    }
  

}