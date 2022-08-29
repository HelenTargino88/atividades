Algoritmo "carro"

Var
// Seção de Declarações das variáveis 
km, dia, total: real

Inicio

escreva ("KM percorridos: ")
leia (km)
escreva ("Quantos dias alugado: ")
leia (dia)
dia <- 90 * dia
km <- 0.20 * km
total <- km + dia

escreval ("Valor total KM: ", km, " Reais. Total dias de aluguel: ", dia, " Reais")
escreval ("Valor final: ", total, " Reais")

Fimalgoritmo