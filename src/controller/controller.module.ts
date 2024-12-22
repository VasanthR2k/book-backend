import { Controller, MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { MulterModule } from "@nestjs/platform-express";
import { AppService } from "src/app.service";
import { BooksController } from "src/books/books.controller";
import { BooksService } from "src/books/books.service";
import { employeecontroller } from "src/Employees/employee.controller";
import { employeeservice } from "src/Employees/employee.service";
import { RepositoriesModule } from "src/infrastructure/repositories/repositories.module";
import { jwtConstants } from "src/jwt/constants";
import { Logincontroller } from "src/Login/Login.controller";
import { Loginservice } from "src/Login/Login.service";
import { LoggerMiddleware } from "src/midilewate/logger.midileware";
import { pastrocontroller } from "src/pastroLogin/pastroLogin.controller";
import { pastroservice } from "src/pastroLogin/pastroLogin.service";


@Module({
    imports: [RepositoriesModule,MulterModule.registerAsync({
        useFactory: () => ({
          dest: './upload',
        })}),
      
      ],
    controllers:[employeecontroller,BooksController,Logincontroller,pastrocontroller],
    providers: [employeeservice,BooksService,Loginservice,JwtService,pastroservice],
    exports: []
  
})
export class ControllersModule {}