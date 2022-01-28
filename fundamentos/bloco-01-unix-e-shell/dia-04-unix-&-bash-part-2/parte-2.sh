#Exercicio 1

Navegando ate a pasta unix_tests e verificando as permissoes dos arquivos
cd unix_tests
pwd

#Exercicio 2

Rode o comando ls -l e veja quais as permissões dos arquivos
ls -l

#Exercicio 3

Modificando a permissao do arquivo bunch_of_things.txt para que todos tenham acesso a leitura e escrita
chmod a+rw bunch_of_things.txt
ls -l

#Exercicio 4

Removendo a permissao de escrita do arquivo bunch_of_things.txt
chmod a-w bunch_of_things.txt 
ls -l

#Exercicio 5

Voltando as permissoes do arquivo inicial
chmod 644 bunch_of_things.txt
ls -l
