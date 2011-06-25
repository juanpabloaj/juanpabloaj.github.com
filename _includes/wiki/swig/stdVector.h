/* stdVector.h */
#include<vector>
#include <iostream>
void mostrar(std::vector<int> v){
	std::vector<int>::iterator i;
	for( i = v.begin() ; i != v.end(); i++)
		std::cout << *i << std::endl;
}
