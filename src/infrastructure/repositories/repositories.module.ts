import { Module } from "@nestjs/common";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { jwtConstants } from "src/jwt/constants";
import { Loginservice } from "src/Login/Login.service";
import { TypeOrmConfigModule } from "../config/typeorm/typeorm.module";
import { BooksEntity } from "../entities/BooksEntity.entity";
import { EmployeeEntity } from "../entities/Employee.entity";
import { LoginEntity } from "../entities/LoginEntity.entity";
import { DBbooks } from "./book.repositories";
import { DBEmployee } from "./employee.repositories";
import { Loginrepository } from "./Login.repositories";

@Module({
imports:[TypeOrmConfigModule,TypeOrmModule.forFeature([BooksEntity,EmployeeEntity,LoginEntity])
],
exports:[DBbooks,DBEmployee,Loginrepository],
providers:[DBbooks,DBEmployee,Loginrepository],

})
export class RepositoriesModule{}