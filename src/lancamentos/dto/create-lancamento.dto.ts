export class CreateLancamentoDto {
  nome: string;
  descricao: string;
  tipo: 'RECEITA' | 'DESPESA';
  valor: number;
  conta: string;
}
