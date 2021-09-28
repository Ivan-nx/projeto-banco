import { Funcioanrio } from "./Funcionario.js";

export class Diretor extends Funcioanrio {
    constructor(nome, salario, cpf) {
        super(nome, salario, cpf);
        this._bonificacao = 2;

    }
}