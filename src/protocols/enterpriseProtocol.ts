export type Enterprise = {
    id: number,
    nome: string,
    logo: string,
    servico: string,
    tipo: string,
    contatos: string,
    historico: string
}

export type createEnterprise = Omit<Enterprise, "id">