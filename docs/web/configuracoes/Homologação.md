# Homologação Bancos
**A homologação permite emi**

---

## Banco do Brasil
## Sicredi
### Remessas bancárias

Efetua as operações dos bancos automatizados, como emissao, baixa de titulos e protestos.
1. O cliente deve solicitar no Sicredi Internet Banking a chave master. 


2.  Colar esta chave no local de cobrança 

3. Menu Extras - Configurações 
 -  Aba Financeiro, configuracao **219** - RESPONSÁVEL PELO SETOR FINANCEIRO, para informar o código do(s) funcionário(s) responsável pelo setor Financeiro para que notificações sejam enviadas, caso algo não seja remetido ao banco.
 - Aba Financeiro, configuracao **247** - UTILIZA INTEGRAÇÃO BANCÁRIA ONLINE - Definir sim ou não.
 - Aba Financeiro, configuracao **248** - API BANCOS ONLINE: AÇÕES AUTOMATICAS: definir quais as açoes a serem executadas automaticamente:
    [A] REGISTRO DE TÍTULOS.
    [B] BAIXA DE TITULOS.
    [C] PROTESTO DE TÍTULOS {VALIDO APENAS PARA BANCOS HOMOLOGADOS} 
    Ex. [A,B,C]
	
4. Menu Diversos - Tarefas Agendadas 
		- Inserir nova tarefa, conforme agenda, todos os dias em um determinado horário, do tipo EXECUTAR AS ROTINAS DA API DOS BANCOS AUTOMATIZADOS. Sem parâmetros. 
  


### Etapas
1 - Cadastrar a conta
	- Banco: 748
	- Agência: Informar agência do cliente sem digito
	- Digito Verificador Agência: (Numero do posto com 2 digitos. Ex.: Palotina = 05)
	- Número da conta: 5 Digitos (com zeros a esquerda) sem o digito
	- Cedente: Repetir o número da conta, com dígito separado
	- Tipo Cobrança: 1
	- Nosso Nº atual: Caso o cliente já esteja usando cobrança bancária, colocar o numero do proximo boleto a ser emitido), senão deixar 1
	- Byte: 2

2 - Cadastrar o Local de cobrança
	- Local de pagamento: PAGÁVEL PREFERENCIALMENTE NAS COOPERATIVAS DE CRÉDITO DO SICREDI
	- Selecionar a conta do Sicredi
	- Caso queira destacar as duplicatas na NFe, marcar o campo GERAR DUPLICATAS NA NFE
	- Definir o tipo de Impressão (Boleto ou Carnê)
	- Envio odo boleto: ENVIO PELO CLIENTE
	- Para o Sicredi via API, não são enviados para o banco instruções de Juros ou Multa. Definir no local de cobrança apenas para  impressão dos boletos.
	- Carteira: 1

3 - Homologação:
	- Configuração: 247 - UTILIZA INTEGRAÇÃO BANCÁRIA ONLINE (Deixar como NÃO)
	- Gerar 10 boletos (Salvar o PDF) e gerar o arquivo de Remessa bancária
	- Enviar os arquivos via email para homologação
	- Após o retorno da homologação. iniciar a configuração do ambiente da API EComm

4 - Configurando a API
	- Solicitar a geração da chave Master pelo cliente.
	- Preencher no local de cobrança a chave MASTER
	- Configuração: 219 - RESPONSÁVEL PELO SETOR FINANCEIRO: Preencher com os codigos dos funcionarios como por exemplo: [-1, 1]
	- Configuração: 247 - UTILIZA INTEGRAÇÃO BANCÁRIA ONLINE (Deixar como SIM)
	- Configuração: 248 - API BANCOS ONLINE: AÇÕES AUTOMATICAS (Deixar [A,B])
	- Agendar a tarefa para execução da API
## Sicoob
## Viacred
## CeCred
## Ailos