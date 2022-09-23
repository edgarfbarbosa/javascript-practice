const pessoa = {
    nome: 'Edgar',
    sobrenome: 'Barbosa',
    idade: '25',
    empresa: [
        {
            nome_empresa: 'SpaceX',
            cargo: 'Programador',
            tempo_de_empresa: '2 anos'
        }
    ]
}

console.log(pessoa.empresa[0].nome_empresa);