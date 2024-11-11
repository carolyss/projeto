console.log("Curso técnico da tecnologia felina!")

let valor1= 5;
let valor2= 6;
let soma = valor1 + valor2;
let dados= [2024, "técnico", 9.5, "TI"];
let nome = "Carol";
let titulo = document.getElementById('titulo');

console.log("O valor 1 é: " + valor1);

console.log("O valor 2 é: " + valor2);

console.log("A soma é: " + soma);

console.log("O dados do Array são: " + dados);
console.log(titulo);
console.log("O primeiro valor do array é " + dados[0]);
console.log("O terceiro valor do array é " + dados[2]);
 console.log( "O seu nome é " + nome);

 if (nome === 'Carol' && dados[1] == 'Carol') {
    console.log("parabéns, seu nome é Carol");

} else { 
    console.log("seu nome não é Carol"); 
}

console.log(titulo);
alert 
('Seja bem vinda! ' + nome + 'AHHAHAHAHAHAHHA');



let botaoAlterar = document.querySelector('#modo-noturno');
let elementoAlterado = document.querySelector('body');

botaoAlterar. addEventListener('click', () => {
    let alterar = botaoAlterar.checked ? 'dark': 'light' 
    elementoAlterado.setAttribute("data-bs-theme", alterar)
});
