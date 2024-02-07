const perguntas = [
  {
    pergunta: "Qual é o objetivo principal do JavaScript?",
    respostas: [
      "Estilizar páginas da web",
      "Aprimorar a funcionalidade de páginas da web",
      "Definir a estrutura de páginas da web",
    ],
    correta: 1
  },
  {
    pergunta: "Qual palavra-chave é usada para declarar variáveis em JavaScript?",
    respostas: [
      "let",
      "variavel",
      "var",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a maneira correta de comentar várias linhas em JavaScript?",
    respostas: [
      "// Este é um comentário",
      "/* Este é um comentário */",
      "# Este é um comentário",
    ],
    correta: 1
  },
  {
    pergunta: "Qual função é usada para exibir uma mensagem no console?",
    respostas: [
      "console.log()",
      "print()",
      "display()",
    ],
    correta: 0
  },
  {
    pergunta: "O que significa 'DOM' em JavaScript?",
    respostas: [
      "Modelo de Objeto Documento",
      "Modelo de Dados de Objeto",
      "Modo de Operação Dinâmica",
    ],
    correta: 0
  },
  {
    pergunta: "Como você pode verificar o tipo de dados de uma variável em JavaScript?",
    respostas: [
      "typeof()",
      "datatype()",
      "checktype()",
    ],
    correta: 0
  },
  {
    pergunta: "Qual operador é usado para igualdade estrita em JavaScript?",
    respostas: [
      "==",
      "===",
      "=",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é o propósito da palavra-chave 'this' em JavaScript?",
    respostas: [
      "Refere-se ao objeto atual",
      "Refere-se ao objeto anterior",
      "Refere-se a um objeto global",
    ],
    correta: 0
  },
  {
    pergunta: "Como você declara uma função em JavaScript?",
    respostas: [
      "function minhaFuncao()",
      "declare function minhaFuncao()",
      "minhaFuncao: function()",
    ],
    correta: 0
  },
  {
    pergunta: "O que significa 'NaN' em JavaScript?",
    respostas: [
      "Não é um Nó",
      "Não é um Número",
      "Sem Argumento",
    ],
    correta: 1
  },
];



const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')
// array com as respotas corretas, quando clicadas 
const corretas = new Set()
// pega total de perguntas
const totalDePerguntas = perguntas.length
// pega a div acertos e juntamente a span
const mostrarTotal = document.querySelector("#acertos span")
// atribui o texto "X de XY"
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

for ( const item of perguntas ){
   const quizItem = template.content.cloneNode(true)
   quizItem.querySelector('h3').textContent = item.pergunta
   
   for( let resp of item.respostas ){
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resp
      dt.querySelector('input').setAttribute('name', 'pergunta-'+perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resp)

      dt.querySelector('input').onchange = (event)=>{
        const estacorreta = event.target.value == item.correta
        // força remover primeiro do array
        corretas.delete(item)
        if(estacorreta){
          // depois inclui a correta.
          corretas.add(item)
        }
        
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        
      }
      //const a     


      quizItem.querySelector('dl').appendChild(dt)
      
   }
   // remove a primeira posicao do resp
   quizItem.querySelector('dl dt').remove()

   // escreve as perguntas na tela
   quiz.appendChild(quizItem)
}

