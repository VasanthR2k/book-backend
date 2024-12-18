import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Sign, sign } from "crypto";
import { Loginrepository } from "src/infrastructure/repositories/Login.repositories";
import { jwtConstants } from "src/jwt/constants";
import * as Paseto from 'paseto';
import { pasetoo } from "src/jwt/paseto";
import { LoggerMiddleware } from "src/midilewate/logger.midileware";
@Injectable()

export class pastroservice {


    constructor(private IfPastrologin: Loginrepository, private jwtService: JwtService) { }

    async getpastrodata(): Promise<any> {
        console.log("Paseto login")
        return await this.IfPastrologin.findpastroalldata()
    }

    async pastrodatacheck(data: any): Promise<any> {
        var pastrodata = await this.IfPastrologin.pastrotoken(data)
        console.log(pastrodata, "pastrodata")
        if (pastrodata) {
            console.log(pastrodata)
            return this.login(pastrodata)

        }
        else {

            console.log("false")
            return { message: "username doesn't same" }

        }

    }

    async login(user: any) {


        const payload: any = {
            username: user.username,
            sub: user.Password,
            EpochCreateDT: Math.floor(Date.now() / 1000),
            EpochExpDT: Math.floor((Date.now() + (1 * 60 * 60 * 1000)) / 1000),

        };
        console.log(payload)
        const token = await Paseto.V4.sign(payload, pasetoo.PasetosecretKey)

        return { access_token: token };
    }


    // async tokencheck(data:any){

    //     const payload:any={
    //         token:data
    //     }

    //  const token = await Paseto.V4.verify(payload,pasetoo.PasetopublicKey)

    //  return{ access_token:token}



    // }




}  