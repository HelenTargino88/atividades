#include<stdio.h>
#include<conio.h>
#include<sdlib.h>

int main () {
	// Declara��o de Vari�veis
	float area1, area2, base, altura;
	// Cabe�alho 
	printf("Senac\n");
	
	// In�cio da l�gica de programa��o
	printf("Digite a base do primeiro retangulo em cm: ");
	scanf("%d", &base);
	
	printf("Digite a altura do primeiro retangulo em cm: ");
	scanf("%d", &altura);
	area1=altura*base;
	
		printf("Digite a base do segundo retangulo em cm: ");
	scanf("%d", &base);
	
	printf("Digite a altura do segundo retangulo em cm: ");
	scanf("%d", &altura);
	area2=altura*base;
	
	//Resultados
	printf("\n\nA area do primeiro retangulo: %.2f cm\n". area1);
	printf("A area do seundo retangulo: %.2f cm\n", area2);
	
	//Compara��o das areas
	if(area1>area2)
		printf("\nA area do primeiro retangulo e maior.\n");
	if (areal<area2)
		printf("\nA area do segundo retangulo e maior.\n");
	if (areal==area2)
		printf("\nAs areas do dois retangulos sao iguais. \n");
	getch(); //Fun��o que aguarda o recebimento de um caractere via teclado.	
}

