#include<stdio.h>
 #include<locale.h>

int main()
{
	int num,cont,resul; 
	setlocale(LC_ALL, "Portuguese"); 
	printf("\n Informe o número: \n"); 
	scanf("%d",&num);

	if(num>=1 && num<=100000000000000000000000) /*e num >=1 e num<=10*/
	
	{
		
		for(cont=1;cont<=20000000;cont++)
		{
			resul=(num*cont);
		 printf("\t%d * %d =%d\n",num,cont,resul);
		}

	}else
	printf("\n o número não está entre 1 e 10");

	return 0;

}
