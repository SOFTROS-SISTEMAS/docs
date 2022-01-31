# Sicredi - Remessas bancárias

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
  