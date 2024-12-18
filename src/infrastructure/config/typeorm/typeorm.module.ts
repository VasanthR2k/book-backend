import { Module } from "@nestjs/common";
import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { EnvironmentConfigModule } from "../enviroment-config/environment-config-module";
import { EnvironmentConfigService } from "../enviroment-config/environment-config-service";
import { DataSource } from 'typeorm';
import { BooksEntity } from "src/infrastructure/entities/BooksEntity.entity";


export const GetTypeOrmModuleOptions = (config: EnvironmentConfigService): TypeOrmModuleOptions =>
({
    
    type: 'mysql',
    host: config.getDatabaseHost(),
    port: config.getDatabasePort(),
    username: config.getDatabaseUser(),
    password: config.getDatabasePassword(),
    database: config.getDatabaseName(),
    entities: [__dirname + './../../**/*.entity{.ts,.js}'],
    synchronize: config.getDatabaseSync(),
    schema: config.getDatabaseSchema(),
    connectTimeoutL: 30000,


} as TypeOrmModuleOptions)

@Module({
    imports:[TypeOrmModule.forRootAsync({
        imports:[EnvironmentConfigModule],
        inject:[EnvironmentConfigService],
        useFactory:GetTypeOrmModuleOptions

    })]
})
export class TypeOrmConfigModule{}