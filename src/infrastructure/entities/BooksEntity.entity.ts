import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity('books')
export class BooksEntity
{
    
    @PrimaryGeneratedColumn('increment')
    id?:number;
    @Column('varchar',{length:50,nullable:true})
    title:string;
    @Column('varchar',{length:50,nullable:true })
    description:string;
    @Column('varchar',{length:50,nullable:true})
    author:string;
    @Column('int')
    release_year:number;
    @Column('varchar',{length:255,nullable:true})
    download:string;
    @Column('varchar',{length:255,nullable:true})
    uploadpdf:string;
    
}

