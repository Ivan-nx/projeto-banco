import { Funcioanrio } from "./Funcionario.js";

export class Gerente extends Funcioanrio {
    constructor(nome, salario, cpf) {
        super(nome, salario, cpf)

        this._bonificacao = 1.1;
    }
}