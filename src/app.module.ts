import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ContasModule } from './contas/contas.module';
import { LancamentosModule } from './lancamentos/lancamentos.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/finance-control'),
    UsersModule,
    ContasModule,
    LancamentosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
