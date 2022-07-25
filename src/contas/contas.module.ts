import { Module } from '@nestjs/common';
import { ContasService } from './contas.service';
import { ContasController } from './contas.controller';
import { Conta, ContaSchema } from './entities/conta.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Conta.name, schema: ContaSchema }]),
  ],
  controllers: [ContasController],
  providers: [ContasService],
})
export class ContasModule {}
