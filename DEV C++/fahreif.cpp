#include <stdio.h>
#include <conio.h>
#include <stdlib.h>

int main (){
	//Declara��o de vari�veis
	float Tc;
	//Cabe�alho
	printf("Senac\n");
	
	//Inicio do programa
	//La�o apenas com uma variavel
	for (Tc=-100; Tc<=100; Tc++)
		printf(" %.0f %cC = %.1f %cF \n", Tc, 248, (((Tc*9.0)/5.0)+32.0), 248);
	getch();
}


