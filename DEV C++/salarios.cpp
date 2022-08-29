#include <stdio.h>
#include <conio.h>
#include <stdlib.h>
int main (){
	
	int cont=1; //Contador
	float salario, soma, maior=0, menor=3000000000000000;
	
	printf("Digite os salarios dos funcionarios: \n");
	do
{
	printf("Digite o %d.a salario: ", cont);
	scanf("%f", &salario);
	while (salario<0 || salario>3000000000000000)  //validação
{
	printf("");	
}
	soma=soma+salario;
	if (salario>maior)
		maior=salario;
	if(salario<menor)
		menor=salario;
	cont++;
}while (cont<=10);
//Apresentação de resultados
printf("\n\nA media dos salarios sao: %.2f", (soma/10));
printf("\nO maior salario e: %.2f", maior);
printf("\nO menor salario e: %.2f", menor);
getch();

}
