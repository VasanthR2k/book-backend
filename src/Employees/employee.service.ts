import { Injectable } from "@nestjs/common";
import { DBbooks } from "src/infrastructure/repositories/book.repositories";
import { DBEmployee } from "src/infrastructure/repositories/employee.repositories";



@Injectable()

export class employeeservice {
 constructor( private Ifemployee:DBEmployee){}
 
async addemployees(employee):Promise<any>{
    console.log(employee)
   return await this.Ifemployee.createEmployee(employee);
}

async findemployees():Promise<any>{
    return await this.Ifemployee.findAll()
}
}