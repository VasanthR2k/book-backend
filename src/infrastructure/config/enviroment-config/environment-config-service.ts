import { Injectable } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { DatabaseConfig } from "src/domain/config/database.interface";
import * as dotenv from "dotenv";
import * as path from "path";
var FileEnv = path.resolve(__dirname, "../../../../") + "/.env";
dotenv.config({path: FileEnv})
console.log(process.env.DATABASE_NAME);

export class EnvironmentConfigService implements DatabaseConfig{
    getDatabaseHost(): string {
       return process.env.DATABASE_HOST;
    }
    getDatabasePort(): number {
       return Number(process.env.PORT);                                
    }
    getDatabaseUser(): string {
      return process.env.DATABASE_USER;
    }
    getDatabasePassword(): string {

        return process.env.DATABASE_PASSWORD;

    }
    getDatabaseName(): string {

        return process.env.DATABASE_NAME;

    }
    
    getDatabaseSchema(): string {
        

       return process.env.DATABASE_SCHEMA;

    }
    getDatabaseSync(): boolean {
        return false;
    }


}
