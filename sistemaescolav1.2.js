let prompt = require('prompt-sync')(); 

 let alunos = [];
 let cursos = [];
        // Arrays para armazenar os dados de alunos e cursos.

 let opcao;

do {
        // Menu de Opções: 
 opcao = prompt('1 - Cadastrar Aluno\n' + 
                '2 - Excluir Aluno\n ' +
                '3 - Cadastrar Curso\n'+
                '4 - Excluir Curso \n'+
                '5 - Visualizar Informações\n' +
                '6 - Matricular Aluno em Curso\n' +
                '7 - Sair\n\n' +
                'Escolha uma Opção\n');
 

switch(opcao){

case '1':
        // Cadastro de novo Aluno:

        let nomeAluno = prompt('Digite o nome do aluno:');
    if (nomeAluno !== null && nomeAluno.trim() !== ''){
        alunos.push({ nome: nomeAluno.trim(), curso: null });
        // Adiciona o aluno com curso nulo (não matriculado)
        console.log('Aluno cadastrado com sucesso!');
    }else{
        console.log('Nome Inválido.');
    }
        break;
case '2':
        // Exclusão de Aluno:

        let nomeExcluirAluno = prompt("Digite o nome do aluno:");
        let indexAluno = -1;
    for (let i = 0; i < alunos.length; i++){
    if(alunos[i].nome === nomeExcluirAluno){
        indexAluno = i;
        break;
    }
    }
    if (indexAluno !== -1){
        alunos.splice(indexAluno, 1);
        // Remove o aluno do array.
        console.log("Aluno excluido com sucesso!");
    }else{
        console.log("Aluno não encotrado.");
    }
        break;
case '3':
        // Cadastrar Curso:

        let nomeCurso = prompt('Digite o nome do curso:');
    if (nomeCurso && nomeCurso.trim() !== ''){
        cursos.push(nomeCurso.trim());
        // Adiciona o curso ao array.
        console.log('Curso cadastrado com sucesso!');
    }else{
        console.log('Nome Inválido.');
        }
        break;

case '4':
        // Exclusão do Curso:

        let nomeExcluirCurso = prompt("Digite o nome do curso:");
        let indexCurso = cursos.indexOf(nomeExcluirCurso);
    if (indexCurso !== -1){
        cursos.splice(indexCurso, 1);
    for(let i = 0; i< alunos.length; i++){
        if (alunos[i].curso === nomeExcluirCurso){
            alunos[i].curso = null;
         }
        }
        console.log("Curso excluido com sucesso!");
    }else{
        console.log("Curso não encotrado.");
    }
        break;

case '5':
        // Visualizar Informações:

        console.log("\nAlunos Cadastrados:");
        if (alunos.length > 0){
        for (let i=0; i < alunos.length; i++){
            let curso;
            if(alunos[i].curso){
                curso = alunos[i].curso;
            }else{
                curso = "Não matriculado";
            }
            console.log("- " + alunos[i].nome + " (curso: " + curso + ")");
            }
        }else{
            console.log("Nenhum aluno cadastrado.");
        }
        console.log("\nCursos Cadastrados:");
        if (cursos.length > 0){
            for (let i = 0; i < cursos.length; i++){
                console.log("- " + cursos[i]);
            }
        }else{
            console.log("Nenhum curso cadastrado.");
        }
    break;

case '6':
    // Matricular Aluno em Curso:

    if (alunos.length === 0 || cursos.length === 0){
        console.log("E necessario ter alunos e cursos cadastrados");
        break;
    }
    
    let nomeMatricula = prompt("Digite o nome do aluno para Matricula");
    let aluno = null;
    for (let i = 0; i < alunos.length; i++){
    if (alunos[i].nome === nomeMatricula){
        aluno = aluno = alunos [1];
        break;
    }
}
if (aluno){
    console.log("Aluno não encotrado.")
    break;
}
console.log("Cursos disponiveis:");
for (let i= 0; i<cursos.length; i++){
    console.log((i+1) + "- " + cursos[i]);
}
let cursoindex = parseInt(prompt("Escolha o numero do curso:"));
if(cursoindex >= 0 && cursoindex < cursos.length){
    aluno.curso = cursos[cursoindex];
    console.log("Aluno" + aluno.nome + "matriculado no curso");
}else{
    console.log("curso Inválido");

}
break;

case '7':
        // Sair do Sistema:

        console.log("Saindo do sistema...Oba! Você saiu do Sistema.");
        break;
default:
        console.log("Opção invalida. Tente novamente."); 
    } 
}while(opcao !== "7");