#include<stdio.h>
#include<conio.h>
#include<stdlib.h>

int main () {
	// Declara��o de Vari�veis
	int num; // Vari�vel que ir� receber o n�mero na base decimal
	
	//Cabe�alho
	printf("Senac \n\n");
	printf("Aluno(a): \n\n\n ");

	
	//Escrevendo o comando na tela
	printf("Escreva um numero na base decimal: ");
	
	scanf("%d", &num);
	
	printf("\nO numero %d na base octal e: %o\n", num, num);
	printf("O numero %d na base hexadecimal e: %x", num, num);
	getch(); // Fun��o que aguarda o recebimento de um caractere via teclado.
}
