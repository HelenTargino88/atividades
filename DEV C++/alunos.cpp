#include<stdio.h> //Biblioteca de entrada/sa�da por perif�ricos padr�o 
#include<conio.h> //Biblioteca para manipula��o de caracteres
#include<stdlib.h> //Biblioteca padr�o para uso de fun��es do sistema
int main () {//Programa principal 
//Declara��o de Vari�veis
	int num_alunos, num_alunas;
//Cabe�alho
	printf("Senac\n", 161);
	printf("Disciplina: 113913 - ICC \n");
	printf("Aluno(a):\n\n\n");
//Inicio da l�gica de programa��o
	printf("Digite o n�mero de alunos: "); //Inicio de intera��o
	scanf("%d", &num_alunos); /*Receber o dado com a fun��o scanf do tipo int identificado por &d que ser� armazenado no espa�o reservado para num_alunos, &num_alunos*/
	printf("Digite o numero de alunas: "); //Segunda impress�o
	scanf ("%d", &num_alunas); /*Receber o dado do tipo int identificado por %d que ser� armazenado no espa�o reservado para num_alunos, num_alunos */
	
		/* Para apresentar os resultados como pedido, basta trocar os comandos de posi��o. O programa � executado com os comandos sequencialmente, ou seja, este executa primeiramente o que vem qant6es e posteriormente o que vem depois.*/
		
		printf("\nO numero de alunas: %d\n", num_alunas);
		printf("0 numero de alunos: %d", num_alunos);
		getch(); //Fun��o que aguarda o recebimento de um caractere via teclado.
}

