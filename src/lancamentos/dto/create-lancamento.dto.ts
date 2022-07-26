export class CreateLancamentoDto {
  data: Date;
  nome: string;
  descricao: string;
  tipo: 'RECEITA' | 'DESPESA';
  valor: number;
  conta: string;
}
