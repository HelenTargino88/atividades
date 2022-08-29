Algoritmo "Tinta"

Var
altura, comprimento, area, tinta: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 

escreval("Calculando a área e a qtde. de tinta")
escreval()
escreval("Altura em m")
leia(altura)
escreval("Comprimento em m")
leia(comprimento)

area <- altura * comprimento
tinta <- area/2

escreval("A área da parede a ser pintada é de", area, "m")
escreval("A qtde. necessária é de", tinta, "latas de tintas")

Fimalgoritmo