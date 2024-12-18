import { Body, Controller, Delete, Get, Param, Post, Put, Query, Req, UploadedFile, UploadedFiles, UseGuards, UseInterceptors } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from 'src/auth/local-auth-guard';




import { Loginservice } from './Login.service';

@Controller('Login')
export class Logincontroller {
    constructor(private loginservice: Loginservice) { }
    @Get()
    async findall(){
        const login = await this.loginservice.getlogindata()
        return login;
    }
  
  
    @Post('datalist')
    async findparticulardata(@Body() data){
       
        const login = await this.loginservice.particulardata(data)
        console.log("login",login.access_token)
      return login


        
    }
} 