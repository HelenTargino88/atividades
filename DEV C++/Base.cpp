#include<stdio.h>
#include<conio.h>
#include<sdlib.h>

int main () {
	// Declaração de Variáveis
	float area1, area2, base, altura;
	// Cabeçalho 
	printf("Senac\n");
	
	// Início da lógica de programação
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
	
	//Comparação das areas
	if(area1>area2)
		printf("\nA area do primeiro retangulo e maior.\n");
	if (areal<area2)
		printf("\nA area do segundo retangulo e maior.\n");
	if (areal==area2)
		printf("\nAs areas do dois retangulos sao iguais. \n");
	getch(); //Função que aguarda o recebimento de um caractere via teclado.	
}

