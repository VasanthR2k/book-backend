import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { EnvironmentConfigService } from "./environment-config-service";
import { validate } from "class-validator";
import * as dotenv from "dotenv";
import * as path from "path";

var FileEnv = path.resolve(__dirname, "../../../../") + "/.env";


dotenv.config({ path : FileEnv  });
console.log(process.env.DATABASE_NAME);
console.log(FileEnv);
@Module({
imports:[
    ConfigModule.forRoot({
       envFilePath:'./env/local.env',
       ignoreEnvFile:process.env.NODE_ENV ==='local'||process.env.NODE_ENV ==='test'?false :true,
       isGlobal:true,
       validate,

    })


],
providers:[EnvironmentConfigService],
exports:[EnvironmentConfigService],
})
export class EnvironmentConfigModule{}