 let prompt = require('prompt-sync')(); 

 let alunos = [];
 let cursos = [];
 //arrays para armazenar os dados de alunos e cursos

 let opcao;

do {
//exibe o menu de opções 
 opcao = prompt('1 - Cadastrar aluno\n' + 
                '2 - Excluir aluno\n ' +
                '3 - Cadastrar Curso\n'+
                '4 - Excluir curso \n'+
                '5 - Visualizar Informações\n' +
                '6 - Sair\n\n' +
                'Escolha uma opção\n');
 

switch(opcao){

case '1':
        //cadastrar Aluno:

        let nomeAluno = prompt('Digite o nome do aluno:');
    if (nomeAluno !== null && nomeAluno.trim() !== ''){
        alunos.push(nomeAluno.trim());
        console.log('Aluno cadastrado com sucesso!');
    }else{
        console.log('Nome Inválido.');
    }
        break;
case '2':
        //Excluir Aluno:

        let nomeExcluirAluno = prompt("Digite o nome do aluno:");
        let indexAluno = alunos.indexOf(nomeExcluirAluno);
    if (indexAluno !== -1){
        alunos.splice(indexAluno, 1);
        console.log("Aluno excluido com sucesso!");
    }else{
        console.log("Aluno não encotrado.");
    }
        break;
case '3':
        //Cadastrar Curso:

        let nomeCurso = prompt('Digite o nome do curso:');
    if (nomeCurso !== null && nomeCurso.trim() !== ''){
        cursos.push(nomeCurso.trim());
        console.log('Curso cadastrado com sucesso!');
    }else{
        console.log('Curso Inválido.');
        }
        break;

case '4':
        //Excluir Curso:

        let nomeExcluirCurso = prompt("Digite o nome do curso:");
        let indexCurso = cursos.indexOf(nomeExcluirCurso);
    if (indexCurso !== -1){
        cursos.splice(indexCurso, 1);
        console.log("Curso excluido com sucesso!");
    }else{
        console.log("Curso não encotrado.");
    }
        break;

case '5':
        //Visualizar Informações:

        let info = "\nAlunos Cadastrados:\n";
        if (alunos.length > 0){
        for (let i=0; i < alunos.length; i++){
        info +="- " + alunos[i] +"\n";
    }
    }else{
        info += "Nenhum aluno cadastrado.\n";
        }
        info += "\nCursos cadastrados:\n";
    if (cursos.length > 0){
    for (let i = 0; i < cursos.length; i++){
        info += "- " + cursos[i] + "\n";
    }
    }else{
        info += "Nenhum curso cadastrado.\n";
    }
    console.log(info);
    break;

case '6':
        //Sair do Sistema:

        console.log("Saindo do sistema...");
        break;
default:
        console.log("Opção inválida. Tente novamente."); 
    } 
}while(opcao !== "6");