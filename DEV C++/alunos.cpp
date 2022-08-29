#include<stdio.h> //Biblioteca de entrada/saída por periféricos padrão 
#include<conio.h> //Biblioteca para manipulação de caracteres
#include<stdlib.h> //Biblioteca padrão para uso de funções do sistema
int main () {//Programa principal 
//Declaração de Variáveis
	int num_alunos, num_alunas;
//Cabeçalho
	printf("Senac\n", 161);
	printf("Disciplina: 113913 - ICC \n");
	printf("Aluno(a):\n\n\n");
//Inicio da lógica de programação
	printf("Digite o número de alunos: "); //Inicio de interação
	scanf("%d", &num_alunos); /*Receber o dado com a função scanf do tipo int identificado por &d que será armazenado no espaço reservado para num_alunos, &num_alunos*/
	printf("Digite o numero de alunas: "); //Segunda impressão
	scanf ("%d", &num_alunas); /*Receber o dado do tipo int identificado por %d que será armazenado no espaço reservado para num_alunos, num_alunos */
	
		/* Para apresentar os resultados como pedido, basta trocar os comandos de posição. O programa é executado com os comandos sequencialmente, ou seja, este executa primeiramente o que vem qant6es e posteriormente o que vem depois.*/
		
		printf("\nO numero de alunas: %d\n", num_alunas);
		printf("0 numero de alunos: %d", num_alunos);
		getch(); //Função que aguarda o recebimento de um caractere via teclado.
}

