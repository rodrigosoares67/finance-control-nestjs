import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Type } from 'class-transformer';
import mongoose from 'mongoose';
import { Conta } from 'src/contas/entities/conta.entity';

export type LancamentoDocument = Lancamento & Document;

@Schema()
export class Lancamento {
  @Prop({ required: true })
  nome: string;

  @Prop({ required: false })
  descricao: string;

  @Prop({ required: true })
  tipo: 'RECEITA' | 'DESPESA';

  @Prop({ required: true })
  valor: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Conta.name })
  @Type(() => Conta)
  conta: Conta;
}

export const LancamentoSchema = SchemaFactory.createForClass(Lancamento);
