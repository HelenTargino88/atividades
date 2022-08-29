#include <stdio.h>
#include <conio.h>
#include <stdlib.h>

int main (){
	//Declaração de variáveis
	float Tc;
	//Cabeçalho
	printf("Senac\n");
	
	//Inicio do programa
	//Laço apenas com uma variavel
	for (Tc=-100; Tc<=100; Tc++)
		printf(" %.0f %cC = %.1f %cF \n", Tc, 248, (((Tc*9.0)/5.0)+32.0), 248);
	getch();
}


