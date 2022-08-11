---
title: Impressoras
slug: impressoras
---
# Impressoras
1- Acesse a base da empresa em que será feita a configuração, vá até u funcionário <kbd>1</kbd> e mude o diretório de impressão:


2- Acesse a pasta compartilhada: <kbd>W:\Delphi\AgulhaoImp</kbd> e filtre os arquivos como na imagem


3- No computador do cliente, criar uma pasta em C:\Agulhao\ e colar todos estes arquivos la dentro

4- Dentro desta pasta C:\Agulhao\, criar uma outra pastinha TXT (C:\Agulhao\TXT\)

5- Feito isso, o próximo passo é editar o arquivo AgulhaoImp.ini

dentro de [CONFIG]:
DIRETORIO=C:\Agulhao\TXT

dentro de [CONFIG_WEBSERVICE]:
UTILIZA WEBSERVICE=1
HOST=http://agulhao.softros.com.br/
DIRETORIO REMOTO=NOME_DO_DIRETORIO_DO_CLIENTE

6- criar atalho do executável


7- A última etapa é configurar as impressoras




---

Para evitar que seja necessário executar o programa de impressão toda vez que for imprimir, é aconselhavel colocar o software iniciar junto com o sistema
- copie o executável
- windows = R
- shell:startup
- cole o arquivo