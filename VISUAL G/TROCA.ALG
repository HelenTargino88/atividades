Algoritmo "troca"

Var
a, b, intermediario: inteiro // crie duasvari?veis do tipo inteiro.


Inicio
// Se??o de Comandos, procedimento, fun??es, operadores, etc... 

escreval("Ol?, digite um valor para A:")
leia(a)

escreval("Ol? de novo, digite agora outro valor B:")
leia(b)

//Exibe para o usuario os valores digitados.
escreval("Muito bem! Voc? digitou os valores para A:", a, " e B:", b)

//Fazemos a troca dos valores das vari?veis.
//Precisamos de uma var?avel intermedi?ria para fazer a troca
intermediario <- a
a <- b
b <- intermediario

escreval("Se invertemos de valores de A e B teremmos A:", a, " e B:", b)


Fimalgoritmo