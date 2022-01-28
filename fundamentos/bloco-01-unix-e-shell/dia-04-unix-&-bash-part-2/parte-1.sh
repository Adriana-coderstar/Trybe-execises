#Exercicio 1

Navegando a pasta unix_tests
cd unix_tests

#Exercicio 2

Criando arquivo skills2.txt com os valores Internet, Unix e Bash em cada linha
cat > skills2.txt
Internet
Unix
Bash

#Exercicio 3

Adicinando mais 5 habilidades a lista de skills e imprimindo no terminal
cat >> skills2.txt 
CSS
Javascript
Python
PHP
React

#Exercicio 4

Contando quantas linhas tem o arquivo skills2.txt
wc -l skills2.txt

#Exercicio 5

Criando o arquivo top_skills.txt usando as 3 primeiras linhas de skill2.txt em ordem alfabética
sort <skills2.txt > top_skills.txt

#Exercicio 6

Criando um novo arquivo chamado phrases2.txt e adicionando frases
cat > phrases2.txt
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley

#Exercicio 7

Contando quantas linhas contem as letras br
grep -ic "br" phrases2.txt 

#Exercicio 8

Contando quantas linhas nao contem as letras br
grep -ivc "br" phrases2.txt

#Exercicio 9

Adicionando dois nomes de paises ao final do arquivo phrases.txt
cat >> phrases2.txt

#Exercicio 10

Criando o arquivo bunch_of_things.txt com os conteudos de phrases2.txt e countries.txt
cat phrases2.txt countries.txt > bunch_of_things.txt

#Exercicio 11

Ordenando o arquivo bunch_of_things.txt
sort -o bunch_of_things.txt bunch_of_things.txt


