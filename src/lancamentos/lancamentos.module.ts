import { Module } from '@nestjs/common';
import { LancamentosService } from './lancamentos.service';
import { LancamentosController } from './lancamentos.controller';
import { Lancamento, LancamentoSchema } from './entities/lancamento.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Lancamento.name, schema: LancamentoSchema },
    ]),
  ],
  controllers: [LancamentosController],
  providers: [LancamentosService],
})
export class LancamentosModule {}
