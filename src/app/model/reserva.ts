export interface Reserva{
    id: number;
    nome: string;
    cpf: string;
    qtdPessoas: number;
    dataReserva: string,
    observacoes: string;
    telefone: string;
    horario: string;
}

export interface Cardapio{
    titulo: string
    nome: string,
    descricao: string,
    preco: number,
    promocao?: number;
}