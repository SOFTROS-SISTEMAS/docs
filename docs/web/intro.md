---
sidebar_position: 1
title: Apresentação
slug: intro
---
# Apresentação

## Versão 404 | 01/03/2021
:::info Melhorias
 - As cores de alguns ícones foram retrabalhadas para terem um contraste maior com as telas do sistema, se tornando mais visíveis.
 - **Aplicativo**: Nova interface para o aplicativo. 
:::

:::tip Novas funcionalidades
 - **Notas fiscais:** Adicionada opção de resumo por Categoria (Tipo de Lançamento)
 - **Venda balcão offline:** agora é possível realizar venda balcão quando não estiver conectado a uma rede de internet **(somente aplicativo)**
 - Tabela de preço exclusiva por vendedor.
 - Usuários com permissão podem ver resumo total de vendas CRM.
:::


 ## Versão 400 | 11/02/2021
 

>Novas funcionalidades{.is-success}
 - Novo calendário.
 - [APP] Pedido por representante.
 - [APP] Opção de ficar online/offline.
 - Cadastro de produto simlplificado.
 - FATURAMENTO Adicionada opção de resumo por categoria.
 
 
 ## Versão 395 | 10/12/2020
>Novas funcionalidades{.is-success}

 - Filial folha de pagameto: Adicionado campo de Filial nos holerites, para separação dos registros por filial.
 - Listagem da folha de pagamento: Ajustado listagem conforme saem os olerites entre parte de cima e parte de baixo.
 - Popup para feedback de ações..
 - Implementação de  visualizador de etapas durante os processos de cadastro.
 - Implementado a ferramenta de Montagem e Desmontagem dos KITs
 - Ao cadastrar uso e consumo, puxar o custo da conferencia.
 - Sicoob: remessa Sicoob e carnês com numero de parcelas.
 
 >Correções aplicadas{.is-info}
 - Bug de resolução.
 
 ## Versão 394 | 10/12/2020
>Novas funcionalidades{.is-success}

 - Implementado na rotina de Inativar clientes no Comercial, para gerar um comunicado para o funcionário responsável pelo Financeiro.
 - Ajustes na emissão de etiquetas, (tecla enter não funcionava ao digitar o código do produto).
 - Ajustado na Conferência de Mercadorias, para quando gerar a Nota de Terceiros, preencher o campo Codigo interno do Produto. Em algumas situações este campo estava ficando zerado.
 - Implementado nova permissão em Pedidos de Saida: Permissão alt. Vlr Unt Pedido de Saida.
 - Relatorio de Necessidades: Ajustado para filtrar somente com Necessidade (Quando Referência possui várias cores).
 - Novo modelo de etiquetas: ETIQUETA A4 [3 x 11] Descrição 2 linhas.
 - Novo modelo de etiquetas: ETIQUETA A4 [4 x 11] 50mm x 25mm.
 - Aplicativo: Adicionado filtro na consulta de Cortes, para filtrar por Numero do Pedido personalizado e nome do Cliente.
 - Ao editar as grades de um produto, foi atualizado para forçar sincronização com o aplicativo.
 - Adicionado a opção de estampas / texturas ao invés de cores no aplicativo.
 - Ajustado para quando efetuar o cancelamento de uma NFe/NFCe vinculada a uma venda balcão, não volte o status para FATURANDO e permaneça como DESPACHADO.
 - Ajustado no alterar Senha, para bloquear o campo de Empresa.
 - Sped: Criar uma tela para listar o estoque contabil filtrando por tipo de produto (Tecido, Aviamento, Produto acabado) de um determinado mês (Tabela EstoqueMensal). Criar um detalhe para ver as movimentações do item (Ficha de movimentações) que permita fazer ajustes tanto na quantidade quanto no custo unitario, para levar o estoque sempre ajustado.
 - Adicionado opção de Emitir NFCe ao finalizar um pedido de venda.
 - Imprimir em cima logo a apos a foto a sequencia operacional.
 - Nao filtrar a coleção no relatorio de necessidades.
 - Adicionar unidade no pedido de baixa de matéria prima.
 - Sped: Ao invés de usar a view para o estoque, implementar usando saldo anterior + entradas - saidas do mês para gerar o estoque mensal. Assim caso seja ajustado um estoque no mes anterior, o estoque atual passará a ser ajustado.
 - Balanço: nao funcionou informando a quantidade com a referencia (problema na grade).
 - Implementado Cadastro de Metas Mensais.
 - Ao enviar uma NF por email, enviar tbm a carta de correção junto (XML e PDF).
 - Implementado Consorcio.
 - Colocado paginação na tela de seleção dos itens para NFe, notas com muitos itens não estavam sendo recalculadas.
 - Adicionado opção de imprimir etiquetas de volumes no Monitora NFe (Quando houver um pedido vinculado a NF).
 - Ajustado a emissão de NFSe de Palotina para o novo endereço de WS.
 - Ao cadastrar uso e consumo, puxar o custo da conferencia.
 - Importação de NFe na conferência, Corrigido importação quando campo RetTrib estava vazio e não importava transportadora, nem duplicatas.
 - Na consulta do produto na conferencia, configurado para gravar o ultimo Tipo de produto consultado.
 - Impressão do pedido de compra: Nomenclatura de vendedor, cliente e impressão dos prazos da capa do pedido.

  
  
## Versão 391 | 12/11/2020
>Novas funcionalidades{.is-success}
 - Gerar corte pela referencia ao inves do cod do produto.
 - Criar um relatorio de despesas por Centro de Custo. Na impressao completa, fazer com que a resumida fique abaixo da completa
 - Fazer com que o retorno de acabamento seja por qtde total, porque a quantidade que vai entrar no estoque efetivamente vai ser pela conferência.
 - No cadastro de cor adicionar um campo de imagem para sair na ficha do produto. Utilizado nos casos quando tecido é uma textura por exemplo.
 - Monitora Cobrancas: Incluir a opcao TODOS nas filiais e listar somente as filiais que possue acesso.
 - Implementar opcao de troca de vendedor
 - Novo modelo de ficha tecnica
 - Impressao de pedido de baixa de materia prima/tecido, uma linha por item
 - App: Rankeamento no app por marca e ocultar qtde.
 - Opção de retirar uma pessoa como Fornecedor, Cliente, Transportadora, etc.
 - Criar um botão para remover todas as grades do produto.
 - Implementar sequencia operacional igual do antigo agulhao
 - Criado validação para ao conferir um corte na expedicão, finalizar e clicar no botao voltar, redirecione para a tela de cortes.
 - App: consulta dos cortes parados e qtde de dias
 - Layout de impressao de etiqueta de volume em pagina A4 (3 por folha) 
 - Criado um campo no SPED com o código da Ordem de Produção. Quando informado, o sistema irá utilizar este código no registro K230.
 - Implementado nova opção para estornar as movimentações das etapas dos cortes. (Nas ações da etapa, opção: Estornar Movimentação) 
 - Adicionado no Altera Capa do Pedido o campo para editar a Previsão de Faturamento.
 - R03007 (Relatório de Entregas da Lavanderia) Adicionado coluna com o valor total
 - Relatorio de movimento por plano de contas, adicionado filtros para Despesas Operacionais e Rec/Des. Não Operacionais.
 
>Correções aplicadas{.is-info}

 - Ao trocar tabela de preços no frente de caixa, atualizar o preço de tabela.
 - Filtrar o vendedor no dash de vendedores
 - Quando movimenta a etapa corte, avançar para proxima etapa quando configurado.
 - Ao gerar um corte, gravar nos pedidos abertos o ID do corte referenciado. 
 - Opcao de marcar no pedido que retirou a materia prima. Criar uma tela que atraves do numero do corte, localize os pedidos de baixa. com uma ação de Confirmar Entrega.
 - Configurar emails para disparar pelo sistema
 - Ajustar icone do Favoritos
 - Ver sobre o deposito tanto na venda balcao quanto no rcbto de duplicatas, esta entrando no caixa!
 - Remover uso da tabela ItensTmp do sistema e utilizar diretamente a tabela de itens.
 - Ajustado para notificar o usuario responsavel pela analise de credito (config 224) quando pedidos forem enviados para analise, via aplicativo. +  que um usuario.
 - Quando excluir uma grade excluir os aviamentos tbm
 - Quando gerar uma ref a partir da piloto colocar ela em APROVADO.
 - Retirar a opção de definir grade manualmente do cadastro de produtos, aviamentos e grades.
 - Ordenar os aviamentos em ordem de Tecido, aviamento, e depois em ordem alfabetica
 - Ordenção das operacoes para cima e para baixo
 - Ocultar o ProdutoCod dos produtos e deixar somente referencia quando producao.
 - No Lançamento de aviamentos criar um botão apra aplicar todas as grades e para limpar todas as grades.
 - Ajustado no retorno de remessa(Itaú), para baixar as duplicatas no cod de retorno 09 (Baixa simples)
 - Ajustado para quando alterar a tabela de preços na capa do pedido, setar os preços conforme a tabela.
 - Ajustado para quando Aplicar a tabela de preços através do Altera Capa, aplicar corretamente os preços nos itens.

 ## Versão 385 | 05/09/2020
>Novas funcionalidades{.is-success}
- Aviamentos da grade: Adicionado filtro para trabalhar por Cor os aviamentos.
- Adicionado o campo de cor no Cadastro de cores para facilitar a visualização da Cor da Grade. Esta cor aperecerá em diversos locais do sistema, tais como: Digitação do Pedido (Grades) (Web e Aplicativo), Enfestos do Corte, Grades do Corte, Movimentação das Etapas de Produção (Web e Aplicativo)
- Liberado opção de relacionar tanto aviamentos quanto tecidos ao Produto, e sinalizado com um icone para melhor distinguir o tipo de Produto adicionado (Tecido ou Aviamento). 
- Adicionado o número do Corte nas etiquetas de composição (Modelo MEIO)
- Criado um campo no cadastro de produtos: Ativo para Vendas. Quando este campo não estiver marcado, o sistema não permitirá efetuar pedidos de Venda, tanto pela WEB quanto pelo Aplicativo.
- Implementado novo modelo de etiquetas de Composição: ETIQUETA DE COMPOSIÇÃO [3 COLUNAS] COM OP 33mm x 50mm

>Correções aplicadas{.is-info}
- Ajustado o Agrupamento de pedidos personalizados
- Ajustado para ao processar a Conferencia, buscar o vínculo sempre como ultima opção a tabela de Produtos do Fornecedor
- Ficha do Corte / Ficha Técnica do Produto: ajustado para impressão em modo paisagem, separando os enfestos e aviamentos por Cor.



 ## Versão 383 | 23/08/2020
>Novas funcionalidades{.is-success}
- Acoes do Pedido personalizado: Implementado o Envio por email.

>Correções aplicadas{.is-info}
- Pesquisa por Cliente/Fornecedor, ajustado para filtrar pelo nome fantasia tambem (Contas a Receber/Pgar, Monitora Pedidos, Consulta de Pessoas)

 ## Versão 382 | 20/08/2020
>Novas funcionalidades{.is-success}
- App Força de Vendas: Configurado para disparar email para o Representante ao enviar o pedido para análise
- App Força de Vendas: Implementado opção para informar desconto em Percentual ou Dinheiro na capa do pedido
- App Força de Vendas: Implementado opção para duplicar um pedido de Venda
- Adicionado na capa do pedido de Saida o Desconto em Percentual

>Correções aplicadas{.is-info}
- Ajuste na exclusão do corte, para recalcular a Quantidade Produzindo do Produto


## Versão 382 | 15/08/2020 e 18/08/2020
>Novas funcionalidades{.is-success}
- Agendador de Tarefas: Implementado rotina para baixa automatica dos cartões.
- Relatório de vendas por vendedor: Incluido opção para ordenar por data ao inves de alfabetico.
- Implementado impressão de recibo avulso
- Nfe avulsa foi adicionado campos para informar Desconto para ratear nos itens (em dinheiro ou percentual)

>Correções aplicadas{.is-info}
- Fluxo de caixa: não considerar duplicatas descontadas no saldo a Receber.
- Frente de caixa: Quando troca nao considerar como pedido de revenda
- Pedido de Venda: Validar CPF/CNPJ de acordo com a configuração 84 quando não for consumidor Final.
- Pedidos de Revenda: considerear a filial logada, permitindo assim criar um pedido de revenda em cada filial se necessário.
- Frente de Caixa: icone para inicial devolução de pedido.
- Melhorias nos filtros do Contas a Receber/Pagar
- Ajustes na API Sicredi para limitar o tamanho dos campos para não gerar rejeição no registro dos boletos, e opção de pegar o Telefone ou Celular do cadastro, devido ao campo ser obrigatório na API.
- Lançamento do Pedido de Venda: Na edição do item foi incluido campo para alterar o complemento.
- Adicionado o detalhamento das parcelas na impressão do Pedido modelo 40 colunas (Térmica) [AgulhaoImp]

## Versão 381 | 13/08/2020
>Novas funcionalidades{.is-success}
- Agendador de Tarefas: Implementado rotina para baixa automatica dos cartões.
- Relatório de vendas por vendedor: Incluido opção para ordenar por data ao inves de alfabetico


>Correções{.is-info}
- Fluxo de caixa: não considerar duplicatas descontadas no saldo a Receber.
- Frente de caixa: Quando troca nao considerar como pedido de revenda

