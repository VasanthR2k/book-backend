import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity('Login')
export class LoginEntity
{
    @PrimaryGeneratedColumn('increment')
    id?:number;
    @Column('varchar',{length:255,nullable:true})
    username:string;
    @Column('varchar',{length:255,nullable:true})
    Password:string; 
  
    
}

