//Primeiramente Criremos uma Function
function criaraluno(nome,n1,n2) {
    return {
        nome : nome,
        nota1 : n1,
        nota2 : n2,
        media : calcmedia,

    }
}
function calcmedia() {
    return (this.nota1 + this.nota2) / 2;
}

var turma = [
    criaraluno("Igor",7.7,6.23),
    criaraluno("Joana",8.65,9.75),
]

// Agora criaremos  uma nova variavel (Opcional)
var aluno = turma[0]
// Depois O nosso Sistema Básico de Criação de Alunos Está Pronto
console.log(aluno + " - " + aluno.media())
aluna = turma[1]
console.log(aluna + " - " + aluna.media())