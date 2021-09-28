import {Cliente} from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";


const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("963963");

const genrete = new Gerente("Ricardo",  5000, 12345678901);
genrete.cadastrarSenha("963");

const cliente = new Cliente("Lais", 78945612302, "456")
const diretoEstaLogado = SistemaAutenticacao.login(diretor, "963963");
const gerneteEstaLogado = SistemaAutenticacao.login(genrete, "963");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");

console.log(diretoEstaLogado, gerneteEstaLogado, clienteEstaLogado);

