---
title: E-Mail de Cobrança
slug: emailCobranca
---
# Enviar e-mail de cobrança

 - Envia notificação de duplicatas vencidas para os locais de cobrança cujo campo "Notificar cliente a partir de X dias vencidos" esteja preenchido. Envia somente duplicatas a receber, com saldo, com vencimento ou com promessa de cobrança anterior ao nº de dias estabelecido. Efetua automaticamente um registro de cobrança.
- Para agendar e-mail automáticos de cobrança é necessário configurar local de cobrança (que tenha boletos) e em Tarfas Agendadas. 
 
1. No local de cobrança: 
 


>  - O campo Email de cobrança a partir de: é para enviar um email a partir de X dias vencidos, por exemplo, se este campo estiver com 7, o sistema vai disparar um email a partir de 7 dias após o vencimento da duplicata.
>  - Dias para efetuar nova cobrança: é para enviar outro e-mail de cobrança caso o primeiro não tenha sido pago. Por exemplo, na configuracao acima colocamos 7 dias para enviar o primeiro e-mail de cobrança, se nese campo estiver 7 um novo email cobrança será enviado e assim sucessivamente ( de 7 em 7 dias) até que a duplicata for quitada ou cancelada.
 
2.   Em Tarefas Agendadas:
 
 
 
 Inciar: Conforme Agenda;
 Frequencia: Todos os dias;
 Hora:  pode ser antes de começar o expediente, por exemplo 7:00 horas;
 Tipo: Enviar e-mail de cobrança;
 Sem parâmetros. 