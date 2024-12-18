import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('employee')

export class EmployeeEntity
{
@PrimaryGeneratedColumn('increment')
id?:number;
@Column('varchar',{length:50,nullable:true})
age:number;
@Column('varchar',{length:50,nullable:true})
personname:string;
@Column('varchar',{length:50,nullable:true})
employeeRole:string;
@Column('varchar',{length:50,nullable:true})
employeephn:number;

}      