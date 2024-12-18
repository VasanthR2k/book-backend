import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RepositoriesModule } from './infrastructure/repositories/repositories.module';
import { BooksController } from './books/books.controller';
import { BooksService } from './books/books.service';
import { DBbooks } from 'src/infrastructure/repositories/book.repositories';
import { employeecontroller } from './Employees/employee.controller';
import { employeeservice } from './Employees/employee.service';
import { ControllersModule } from './controller/controller.module';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { LoggerMiddleware } from './midilewate/logger.midileware';


console.log(path.join(__dirname, '../',"upload"));

@Module({
  imports: [RepositoriesModule, ControllersModule, ServeStaticModule.forRoot({
    rootPath: path.join(__dirname, '../', "upload"),
     serveRoot: '/public',
  }),],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {

  
    consumer.apply(LoggerMiddleware)
        .exclude(
      {path: '/pastro/findone', method: RequestMethod.POST}, 
    
      { path: '/public/(.*)', method: RequestMethod.ALL },
      { path: '/login/datalist', method: RequestMethod.ALL },
)  
       .forRoutes('*')
// .forRoutes({path:'*',method:RequestMethod.ALL})
    
    
  }
  
}
  