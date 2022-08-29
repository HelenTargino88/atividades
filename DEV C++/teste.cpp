#include <stdio.h>
#include <stdlib.h>

float serieS(int n) {
	if (n > 0)
		return (1+n*n) / (float)n + serieS(n-1);
	else
		return 0;
}
int main () {
	printf("S = %f/n", serieS(2));
	
	system("pause");
	return 0;
}
