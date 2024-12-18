import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { IFEmployee } from "src/domain/interface/Employee.interface";
import { Repository } from "typeorm";
import { EmployeeEntity } from "../entities/Employee.entity";



@Injectable()
export class DBEmployee implements IFEmployee{
    constructor(
        @InjectRepository(EmployeeEntity)
        private readonly employee:Repository<EmployeeEntity>
    ){}
    async createEmployee(formData: any): Promise<any> {
        return await this.employee.insert({age: formData.age, personname:formData.personname,employeeRole:formData.employeeRole,employeephn:formData.employeephn});
    }
    
    async findAll(): Promise<any[]> {

        return await this.employee.find();
        
    }

}