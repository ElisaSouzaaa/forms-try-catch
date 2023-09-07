document.addEventListener("DOMContentLoaded", function () {
    class Funcionario {
      constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
      }

      seApresentar() {
        return (
          "Olá, meu nome é " +
          this.nome +
          " e tenho " +
          this.idade +
          " anos de idade."
        );
      }

      trabalhar() {
        return "Meu cargo é " + this.cargo;
      }
    }

    class Gerente extends Funcionario {
      constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
      }

      gerenciar() {
        return (
          "Departamento: " +
          this.departamento
        );
      }
    }

    class Desenvolvedor extends Funcionario {
      constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
      }

      programar() {
        return "e uso a linguagem " + this.linguagem + ".";
      }
    }

    const formulario = document.getElementById("funcionarioForm");
    const nomeInput = document.getElementById("nome");
    const idadeInput = document.getElementById("idade");
    const cargoInput = document.getElementById("cargo");
    const departamentoInput = document.getElementById("departamento");
    const linguagemInput = document.getElementById("linguagem");
    const erroMensagem = document.getElementById("erroMensagem");

    const infoApresentacao = document.getElementById("infoApresentacao");
    const infoTrabalho = document.getElementById("infoTrabalho");
    const infoExtra = document.getElementById("infoExtra");

    formulario.addEventListener("submit", function (event) {
      event.preventDefault();

      try {
        const nome = nomeInput.value;
        const idade = parseInt(idadeInput.value);
        const cargo = cargoInput.value;
        const departamento = departamentoInput.value;
        const linguagem = linguagemInput.value;

        if (!nome || !idade || !cargo || !departamento || !linguagem) {
          throw new Error(
            "Por favor, preencha todos os campos corretamente!"
          );
        }

        const nomeRegex = /^[A-Za-z\s]+$/;
        if (!nomeRegex.test(nome) || !nomeRegex.test(cargo) || !nomeRegex.test(departamento) || !nomeRegex.test(linguagem)) {
          throw new Error(
            "Por favor, preencha todos os campos corretamente!"
          );
        }

        const funcionario = new Funcionario(nome, idade, cargo);
        const gerente = new Gerente(
          nome,
          idade,
          cargo,
          departamento
        );
        const desenvolvedor = new Desenvolvedor(
          nome,
          idade,
          cargo,
          linguagem
        );

        infoApresentacao.textContent = `Apresentação: ${funcionario.seApresentar()}`;
        infoTrabalho.textContent = `Cargo: ${funcionario.trabalhar()}`;
        infoExtra.textContent = `${gerente.gerenciar()} ${desenvolvedor.programar()}`;

        // Limpa a mensagem de erro, se houver
        erroMensagem.textContent = "";
      } catch (error) {
        // Exibe a mensagem de erro na página
        erroMensagem.textContent = error.message;
      }
    });
  });