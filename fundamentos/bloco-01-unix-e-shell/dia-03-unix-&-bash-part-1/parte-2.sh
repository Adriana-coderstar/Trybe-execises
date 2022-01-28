# Exercício 1

Baixando arquivo de paises na pasta countries.txt

cd unix_tests
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries"

# Exercício 2

Mostrando o conteudo de countries.txt
cat countries.txt

# Exercício 3

Mostrando o conteudo do arquivo countries.txt

less countries.txt

# Exercício 4

less countries.txt

# agora que você está dentro do arquivo, digite uma barra `/` e em seguida a palavra Zambia, aperte n para proxima e p para a anterior pagina
# /Zambia
# pressione "Enter" para sair

# Exercício 5

Buscando por Brazil em countries.txt
grep "Brazil" countries.txt


# Exercício 6

grep -i "brazil" countries.txt 


# Exercício 7

Criando phrases.txt e buscando por frases que nao contem a palavra "fox"
touch phrases.txt
grep -v fox phrases.txt

# Exercício 8

Contando o numero de palavras no arquivo phrases.txt
wc -w phrases.txt

# Exercício 9

Contando o numero de linhas do arquivo phrases.txt
wc -l phrases.txt

# Exercício 10

Criando os arquivos empty.tbt e empty.pdf
touch empty.tbt empty.pdf

# Exercício 11

Liste todos os arquivos do diretório unix_tests 
ls 

# Exercício 12

Listando todos os arquivos que terminam com txt
ls *.txt

# Exercício 13

Liste todos os arquivos que terminem com tbt ou txt 
ls -l *t?t

# Exercício 14

Acessando o manual do comando ls
man ls


