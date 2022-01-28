export class Usuario {

    nome: string = '';
    email: string = '';
    telefone: string = '';
    senha: string = '';


    constructor(model?: Usuario) {

        if (!model)
            return;

        this.nome = model.nome;
        this.email = model.email;
        this.telefone = model.telefone;
        this.senha = model.senha;
    }
}