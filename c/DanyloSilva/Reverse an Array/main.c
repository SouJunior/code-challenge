#include <stdio.h>
#include <stdlib.h>
#define n 5
int main(){
    int x[n] = {9, 9, 2, 3, 4};
    int a;
    for(int i = 0; i<n/2; i++){
        a = x[i];
        x[i] = x[n-i-1];
        x[n-i-1] = a;
    }
    for(int i = 0; i < n; i++){
        printf("%d\n", x[i]);
    }
}
