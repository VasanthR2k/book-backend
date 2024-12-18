
import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Loginservice } from 'src/Login/Login.service';
import { ModuleRef } from '@nestjs/core';




@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: Loginservice,private moduleRef: ModuleRef) {
    super({
     
      passReqToCallback: true,
    });
  }

  async validate(formdata): Promise<any> {
    const user = this.authService.particulardata(formdata);
    // if (!user) {
    //     throw new UnauthorizedException();
    //   }
      return user;
}
}