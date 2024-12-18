import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { employeeservice } from './employee.service';



@Controller('employees')
export class employeecontroller {
    constructor(private employeeser: employeeservice) { }

    @Post('post')
    async addemployee(@Body() data){
        console.log("data")
       
        const employee = await this.employeeser.addemployees(data)
        return employee;
    }
    @Get()
    async findemployee(){
        const employee = await this.employeeser.findemployees()
        return employee;
    }
}