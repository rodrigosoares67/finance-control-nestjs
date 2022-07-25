import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true })
  nome: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  senha: string;

  @Prop({ required: true })
  ativo: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
