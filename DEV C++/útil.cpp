#include<stdio.h> //Biblioteca de entrada/saída por periféricos padrão 
#include<conio.h> //Biblioteca para manipulação de caracteres
#include<stdlib.h> //Biblioteca padrão para uso de funções do sistema
int main () {//Programa principal

	// Declaração de Variáveis
	
	int num;

	//Cabeçalho
	printf("Senac\n", 161);
	printf("Disciplina: 113913 - ICC \n");
	printf("Aluno(a):\n\n\n");
	
	// Início da lógica de programação
	printf("Digite um numero inteiro: ");
	scanf("%d", &num);
	printf("Tabuada de %d:\n\n\n", num);
	
	// Escrevendo Mensagens na Tela
	printf("\t%d x 1 = %d\n", num, num*1);
	printf("\t%d x 2 = %d\n", num, num*2);
	printf("\t%d x 3 = %d\n", num, num*3);
	printf("\t%d x 4 = %d\n", num, num*4);
	printf("\t%d x 5 = %d\n", num, num*5);
	printf("\t%d x 6 = %d\n", num, num*6);
	printf("\t%d x 7 = %d\n", num, num*7);
	printf("\t%d x 8 = %d\n", num, num*8);
	printf("\t%d x 9 = %d\n", num, num*9);
	printf("\t%d x 10 = %d\n", num, num*10);
	
	getch(); // Função que aguarda o recebimento de um caractere via teclado.
}
