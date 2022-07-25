import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ContaDocument = Conta & Document;

@Schema()
export class Conta {
  @Prop({ required: true })
  nome: string;

  @Prop({ required: false })
  descricao: string;

  @Prop({ required: true })
  saldo: number;

  @Prop({ required: true })
  ativo: boolean;
}

export const ContaSchema = SchemaFactory.createForClass(Conta);
