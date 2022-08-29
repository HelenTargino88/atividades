Algoritmo "troca"

Var
a, b, intermediario: inteiro // crie duasvariáveis do tipo inteiro.


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 

escreval("Olá, digite um valor para A:")
leia(a)

escreval("Olá de novo, digite agora outro valor B:")
leia(b)

//Exibe para o usuario os valores digitados.
escreval("Muito bem! Você digitou os valores para A:", a, " e B:", b)

//Fazemos a troca dos valores das variáveis.
//Precisamos de uma varíavel intermediária para fazer a troca
intermediario <- a
a <- b
b <- intermediario

escreval("Se invertemos de valores de A e B teremmos A:", a, " e B:", b)


Fimalgoritmo