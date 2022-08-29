Algoritmo "dias de vida"

Var
diaNascimento, mesNascimento, anoNascimento: inteiro
calculaAno, calculaMes, calculaDias: inteiro


Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 

escreval ("****************** SUPER IDADE CALCULATOR ******************")
escreval ()
escreval ()

escreval("Digite o dia em que nasceu: ")
leia(diaNascimento)

escreval("Digite o mês em que nsceu (digite o mês em número, de 1 e 12): ")
leia(mesNascimento)

escreval("Digite o ano em que nasceu: ")
leia(anoNascimento)

escreval("*****************************************************")

calculaAno <- (2022 - anoNascimento) * 365
calculaMes <- (mesNascimento * 30) - (30 - diaNascimento)
calculaDias <- CalculaAno + calculaMes

escreva("Você possi", calculaDias, " dias de vida")
escreval()
escreval()

Fimalgoritmo
