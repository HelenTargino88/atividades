#include<stdio.h>
#include<conio.h>
#include<stdlib.h>

int main () {
	// Declaração de Variáveis
	int num; // Variável que irá receber o número na base decimal
	
	//Cabeçalho
	printf("Senac \n\n");
	printf("Aluno(a): \n\n\n ");

	
	//Escrevendo o comando na tela
	printf("Escreva um numero na base decimal: ");
	
	scanf("%d", &num);
	
	printf("\nO numero %d na base octal e: %o\n", num, num);
	printf("O numero %d na base hexadecimal e: %x", num, num);
	getch(); // Função que aguarda o recebimento de um caractere via teclado.
}
