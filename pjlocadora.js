let prompt = require("prompt-sync")();

let Clientes = [];
let Filmes = [];

let opcao;

do {
  opcao = prompt(
    "\n--- MENU ---\n" +
      "1 - Cadastrar Cliente\n" +
      "2 - Excluir Cliente\n" +
      "3 - Cadastrar Filme\n" +
      "4 - Excluir Filme\n" +
      "5 - Visualizar Informações\n" +
      "6 - Cadastrar Cliente em Filme\n" +
      "7 - Sair\n" +
      "Escolha uma opção: "
  );

  switch (opcao) {
    case "1":
      // Cadastro de novo Cliente:
      let nomeCliente = prompt("Digite o nome do Cliente: ");
      if (nomeCliente.trim() !== "") {
        Clientes.push({ nome: nomeCliente.trim(), filme: null });
        console.log("Cliente cadastrado com sucesso!");
      } else {
        console.log("Nome de cliente inválido.");
      }
      break;

    case "2":
      // Exclusão do Cliente:
      let nomeExcluirCliente = prompt("Digite o nome do cliente a excluir: ");
      let indexCliente = Clientes.findIndex(
        (c) => c.nome === nomeExcluirCliente
      );
      if (indexCliente !== -1) {
        Clientes.splice(indexCliente, 1);
        console.log("Cliente excluído com sucesso!");
      } else {
        console.log("Cliente não encontrado.");
      }
      break;

    case "3":
      // Cadastrar Filme:
      let nomeFilme = prompt("Digite o nome do Filme: ");
      if (nomeFilme.trim() !== "") {
        Filmes.push(nomeFilme.trim());
        console.log("Filme cadastrado com sucesso!");
      } else {
        console.log("Nome de filme inválido.");
      }
      break;

    case "4":
      // Exclusão do Filme:
      let nomeExcluirFilme = prompt("Digite o nome do filme a excluir: ");
      let indexFilme = Filmes.indexOf(nomeExcluirFilme);
      if (indexFilme !== -1) {
        Filmes.splice(indexFilme, 1);
        // Desvincula o filme dos clientes
        Clientes.forEach((cliente) => {
          if (cliente.filme === nomeExcluirFilme) {
            cliente.filme = null;
          }
        });
        console.log("Filme excluído com sucesso!");
      } else {
        console.log("Filme não encontrado.");
      }
      break;

    case "5":
      // Visualizar informações:
      console.log("\n--- Clientes Cadastrados ---");
      if (Clientes.length > 0) {
        Clientes.forEach((cliente) => {
          console.log(
            `- ${cliente.nome} (Filme: ${
              cliente.filme ? cliente.filme : "Não matriculado"
            })`
          );
        });
      } else {
        console.log("Nenhum cliente cadastrado.");
      }

      console.log("\n--- Filmes Cadastrados ---");
      if (Filmes.length > 0) {
        Filmes.forEach((filme) => {
          console.log("- " + filme);
        });
      } else {
        console.log("Nenhum filme cadastrado.");
      }
      break;

    case "6":
      // Matricular Cliente em Filme:
      if (Clientes.length === 0 || Filmes.length === 0) {
        console.log("É necessário ter clientes e filmes cadastrados.");
        break;
      }

      let nomeMatricula = prompt(
        "Digite o nome do cliente que deseja alugar o filme : "
      );
      let clienteEncontrado = Clientes.find((c) => c.nome === nomeMatricula);

      if (!clienteEncontrado) {
        console.log("Cliente não encontrado.");
        break;
      }

      console.log("\n--- Filmes Disponíveis ---");
      Filmes.forEach((filme, index) => {
        console.log(`${index + 1} - ${filme}`);
      });

      let escolha = parseInt(prompt("Escolha o número do filme alugado: "));

      if (escolha >= 1 && escolha <= Filmes.length) {
        clienteEncontrado.filme = Filmes[escolha - 1];
        console.log(
          `Cliente '${clienteEncontrado.nome}' cadastrado no filme '${clienteEncontrado.filme}'.`
        );
      } else {
        console.log("Escolha inválida.");
      }
      break;

    case "7":
      console.log("Saindo do sistema... Até logo!");
      break;

    default:
      console.log("Opção inválida. Tente novamente.");
  }
} while (opcao !== "7");
