import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { LoginEntity } from "src/infrastructure/entities/LoginEntity.entity";

import { Loginrepository } from "src/infrastructure/repositories/Login.repositories";
import { jwtConstants } from "src/jwt/constants";



@Injectable()

export class Loginservice {
    
   
 constructor( private Iflogin:Loginrepository, private jwtService: JwtService){}
 async getlogindata():Promise<any>{
    return await this.Iflogin.findAll()
}
async particulardata(logindata):Promise<any>{
 
     var data =await this.Iflogin.finddata(logindata)
     if (data){
        console.log("data",data)
      return  this.login(data)
    
        
      
     }
     else{
        console.log("false")
        return { message: "username doesn't same"}
     }
     

}
async login(user: any) {
   const payload = { username: user.username, sub: user.Password };
   console.log("payload",payload)
   console.log("jwtconstants",jwtConstants)
   return {

     access_token: this.jwtService.sign(payload,jwtConstants),

   };

 }
  
}               