import { BadRequestException, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { pastroservice } from 'src/pastroLogin/pastroLogin.service';
import { jwtConstants } from "src/jwt/constants";
import { Loginservice } from 'src/Login/Login.service';
import { pasetoo } from 'src/jwt/paseto';
import * as Paseto from 'paseto';
import * as cookieParse from 'cookie-parser';
@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  async use(req, res: Response, next: NextFunction) {


    var turkey = req.headers.cookies
    console.log("req", req.originalUrl)
    if (turkey == undefined) {
      return res.status(403).send({ status: "no Authentication token provided" });
    }
    else {
      var turkeyvalue = JSON.parse(req.headers.cookies)
      const value = turkeyvalue.Authentication

      const token = await Paseto.V4.verify(value, pasetoo.PasetopublicKey)
      if (token) {

        if (Number(token.EpochCreateDT) <= Math.floor(Date.now() / 1000) && Number(token.EpochExpDT) >= Math.floor(Date.now() / 1000)) {
          next();
        }
        else {
          return res.status(403).send({ status: "Time Expiry" })
        }
      }
      else {
        return res.status(403).send({ status: "no Authentication token provided" });
      }
    }
  }
}
