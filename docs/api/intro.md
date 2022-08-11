---
title: Integração
slug: intro
---
# Integração
Documentação da API do Agulhão

**Homologação**  
Endereço: http://agulhao.softros.com.br/rest/URLAppCliente  
Integrador:  
Empresa: ...  
Usuario: ...  
senha: ...  

**Credenciais Agulhão**  
Basta entrar em contato conosco através do telefone **(44) 3199-9000** (*WhatsApp* disponível)

**Precisa de ajuda?**  
Entre em contato com nosso suporte: **(44) 3199-9000** (*WhatsApp* disponível)

**Isnomnia V4 (JSON)**  
Com este arquivo você pode importar as requisições no programa [Insomnia](https://insomnia.rest/).  
[Download do arquivo JSON](https://drive.google.com/file/d/1eSOFmLOSytWKpgq7TXdvQ_pVl-RdOBht/view?usp=sharing)

## 1 - Autenticação
Para usar a API do Agulhão é necessário se identificar em **todas** requisições. Os parâmetros que irão identificar o integrador deverão ser enviados no cabeçalho das requisições.
 
Exemplo cabeçalho padrão de cada requisição:
```json
{
	"Content-Type": "application/json",
	"Integrador": "integrador_token", // Seu código de integração
	"Empresa-Id": "1", // Código da empresa
	"Filial-Id": "1" // Código da filial
}
```

Para poder ter acesso as ações é necessário gerar um token JWT e acrescentar o seguinte campo (Authorization) no cabeçalho:
```json
{ 
	"Content-Type": "application/json",
  	"Integrador": "integrador_token", // Seu código de integração
  	"Empresa-Id": "1", // Código da empresa
	"Filial-Id": "1", // Código da filial
  	"Authorization": "Bearer (jwt_token)" // Código do usuário autenticado
}
```

**Gerando refresh e access token**

A requisição deve ser feita utilizando o método **POST** para o endereço: $link/rest/auth  
Exemplo do endereço: http://agulhao.softros.com.br/rest/Auth

**Cabeçalho** da requisição:
```json
{
	"Content-Type": "application/json",
    "Integrator": "integrador_token", // Seu código de integração
	"RefreshToken": "refresh_token" // Utilize este campo somente se tiver um refreshtoken válido. Caso preencha, não é necessário preencher as informações do corpo
}
```

**Corpo** da requisição:
```json
{
    "empresa": "08683998000188", // CNPJ da Empresa
    "filial": "1", // Código da filial
    "usuario": "adm", // Usuário
    "senha": "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3" // Senha criptografada utlizando o algorítmo SHA256
}
```
:::tip SUCESSO
A requisição deverá retornar o seguinte corpo:
```json
{
	"accessToken": "token_jwt", // Token JWT (Expira em 1 hora)
	"refreshToken": "f8bf56ab-28c1-4b21-bcdf4dc7ccbb018d", // Token para gerar novo AccessToken sem a necessidade de senha (Expira me 7 dias)
	"mensagem": "" // Caso haja algum erro, este campo será preenchido
}
```
:::

## 2 - Buscar tabelas de preço
Para poder consultar os produtos é necessário primeiro ter uma tabela de preço selecionada. Você pode pegar a lista de tabelas de preço neste procedimento.

A requisição deve ser feita utilizando o método **POST**  
Exemplo do **corpo** da requisição:
```json
{
	"AppCliente": {
		"Acao": "N"
	}
}
```
:::tip SUCESSO
A requisição deverá retornar o seguinte corpo:
```json
{
	"AppClienteRsp": {
		"TabelaPreco": [
			{
				"TabelaPrecoCod": "1", // Código da tabela de preço
				"TabelaPrecoDescricao": "LOJAS", // Descrição
				"TabelaPrecoCor": "#000a78" // Cor identificadora
			},
			{
				"TabelaPrecoCod": "2",
				"TabelaPrecoDescricao": "REPRESENTANTES",
				"TabelaPrecoCor": "#b80000"
			}
		]
	}
}
```
:::

## 3 - Buscar marcadores
Os marcadores são utilizados como filtro na hora de buscar os produtos.   
Exemplo de marcadores: Calça, Masculino, Feminino, Promoção, etc...

A requisição deve ser feita utilizando o método **POST**
Exemplo do **corpo** da requisição:
```json
{
	"AppCliente": {
		"Acao": "J"
	}
}
```
:::tip SUCESSO
A requisição deverá retornar o seguinte corpo:
```json
{
  "AppClienteRsp": {
    "Marcadores": [
      {
        "MarcadorChave": "1", // Código do marcador
        "MarcadorDescricao": "CAMISETAS" // Descrição
      },
      {
        "MarcadorChave": "2",
        "MarcadorDescricao": "CALÇAS"
      }
    ]
  }
}
```
:::


## 4 - Buscar produtos
Irá retornar os produtos da loja conforme os filtros passados pela requisição.

:::info
A consulta é paginada a cada **16 produtos**, você pode aumentar essa quantidade de produtos por página informando o campo **quantidade** no cabeçalho.
:::
Exemplo do **cabeçalho** da requisição:
```json
{
	"Quantidade": "2",
	"Pagina": "1",
	"Aplicativo": "7" // Valor padrão
}
```

A requisição deve ser feita utilizando o método **POST**   
Exemplo do **corpo** da requisição:
```json
{
	"AppCliente": {
        "Acao": "A",
        "TabelaPrecoCod": 1, // Tabela de preço selecionada
        "Filtros": {
            "FiltroBusca": "", // Filtrar pelo nome do produto, exemplo: 'Jaqueta'
            "FiltroMarcador": [], // Marcadores que foram selecionados, exemplo: [1, ...]
			"FiltroGenero": [], // Filtrar pelo gênero do produto, exemplo: ['M', ...]
			"UltimaAtualizacao": "", // Retornar somente produtos alterados após esta data, exemplo: 11/04/2022 12:00
			"ComGrade": false // Retorna grades do produto. É necessário estar autenticado! (Pode deixar a requisição pesada)
        }
    }
}
```
:::tip SUCESSO
A requisição deverá retornar o seguinte corpo:
```json
{
  "AppClienteRsp": {
    "Produtos": [
      	{
			"ProdutoCod": "1", // Código do produto
			"ProdutoNome": "CAMISA FEM R. 1001", // Descrição
			"ProdutoReferencia": "00001365", // Referência na empresa
			"MarcaNome": "SOFTROS", // Marca
			"ImagemPrincipalURL": "https://i.imgur.com/1rVUQm7.png", // Foto principal
			"PrecoMin": "99.90", // Preço mínimo das grades do produto
			"ProdutoSexo": "F", // Sexo do produto
			"PrecoBase": "99.90", // Preço base do produto
			"Oferta": { // Caso o produto esteja na oferta, será informado o percentual e o preço de venda
				"OfertaProdutoPerc": 0, 
				"OfertaProdutoVenda": "0.00"
			},
			"Grades": [ // Retorna grades com base no filtro "ComGrade"
				{
					"ProdutoGradeId": 1, // Código da grade
					"ProdutoGradeNumero": "02", // Número
					"ProdutoGradePreco": "99.90", // Preço
					"ProdutoGradePrecoProm": "0.00", // Preço promocional
					"ProdutoEstoque": "48.000", // Quantidade em estoque
					"ProdutoGradeCorNome": "AZUL", // Nome da cor da grade
					"ProdutoGradeCor": "#000fb5", // Hexadecimal da cor
					"ProdutoGradeCorImgExt": "", // Url da estampa da grade 
					"ProdutoGradeBarras": "3330004373013" // Código de barras
				}
			]
		},
		{
			"ProdutoCod": "2",
			"ProdutoNome": "CAMISA FEM R. 1001",
			"ProdutoReferencia": "00001366",
			"MarcaNome": "SOFTROS",
			"ImagemPrincipalURL": "https://i.imgur.com/1rVUQm7.png",
			"PrecoMin": "100.00",
			"ProdutoSexo": "M",
			"PrecoBase": "1.90",
			"Oferta": {
				"OfertaProdutoPerc": 0,
				"OfertaProdutoVenda": "0.00"
			}
		}
    ]
  }
}
```

A requisição também retornará no **cabeçalho** o ultimo código do produto na lista:
```json
{
	"Content-Type": "application/json",
	"UltimoProduto": "2", // Código do último produto
	"Produtos": "99" // Quantidade de produtos
}
```
:::

## 5 - Cadastrar cliente
Inserir um novo cadastro de cliente na empresa

A requisição deve ser feita utilizando o método **POST**  
Exemplo do **corpo** da requisição:
```json
{
	"AppCliente": {
		"Acao": "P",
		"Cliente": {
			"ClienteCpfCnpj": "08.683.998/0001-88", // CPF ou CNPJ
			"ClienteTelefone": "(00) 0 0000-0000", // Número telefone
			"ClienteEmail": "contato@softros.com.br", // Email
			"ClienteNome": "Softros Sistemas", // Nome
			"ClienteUf": "PR", // Estado
			"ClienteCidCod": "4117909", // Código IBGE da cidade
			"ClienteEndBairro": "Centro", // Bairro
			"ClienteCep": "85950-000", // CEP
			"ClienteEndLgr": "XV de Novembro", // Rua
			"ClienteEndNro": "800", // Número do endereço
			"ClienteEndCpl": "", // Complemento
			"VendedorCodigo": "" // Código do vendedor que indicou o cliente (Ou do integrador)
		}
	}
}
```
:::tip SUCESSO
A requisição deverá retornar o seguinte corpo:
```json
{
  "AppClienteRsp": {
    "Cliente": {
    	"ClienteCod": "5638", // Código do cliente
      	"ClienteStatus": "A", // Conta do cliente ativada
      	"ClienteCpfCnpj": "08.683.998/0001-88",
      	"ClienteTelefone": "(44) 9 9976-0287",
      	"ClienteEmail": "contato@softros.com.br",
      	"ClienteNome": "Softros Sistemas",
      	"ClienteUf": "PR",
      	"ClienteCidCod": "4117909",
      	"ClienteEndBairro": "Centro",
      	"ClienteCep": "85950-000",
      	"ClienteEndLgr": "XV de Novembro",
      	"ClienteEndNro": "800"
    }
  }
}
```
:::

:::warning Atenção
Caso ocorra algum erro, será retornado da seguinte forma:

```json
{
  "AppClienteRsp": {
    "Retorno": [
      {
        "RetornoNivel": 3, // Erro
        "RetornoMensagem": "CPF/CNPJ do cliente não definido!" // Descrição do erro
      }
    ]
  }
}
```
:::

## 6 - Atualizar cliente
Este procedimento atualiza as informações do usuário, como por exemplo, seu endereço.

A requisição deve ser feita utilizando o método **POST**  
Exemplo do **corpo** da requisição:
```json
{
	"AppCliente": {
		"Acao": "F",
		"Cliente": {
			"ClienteCod": "5638", // Código do cliente que está alterando
			"ClienteEndLgr": "XV de Novembro",
			"ClienteEndNro": "800",
			"ClienteEndBairro": "Centro",
			"ClienteEndCpl": "",
			"ClienteCep": "85950-000",
			"ClienteCidCod": "4117909",
      		"ClienteUf": "PR",
      		"PessoaFuncionarioCod": "",	
		}
	}
}
```
:::tip SUCESSO
A requisição deverá retornar um JSON vazio, como por exemplo:
```json
{
  	"AppClienteRsp": {
  	}
}
```
:::

## 7 - Buscar produto
Retorna produto com as grades, preços e estoque.

A requisição deve ser feita utilizando o método **POST**  
Exemplo do **corpo** da requisição:
```json
{
  	"AppCliente": {
    	"Acao": "C",
    	"TabelaPrecoCod": 1,
    	"Produtos": [
      		{
	    		"ProdutoCod": 2
    		}
   	 	]
  	}
}
```

:::tip SUCESSO
A requisição deverá retornar o seguinte corpo:
```json
{
	"AppClienteRsp": {
		"Produtos": [
			{
				"ProdutoCod": "2",
				"ProdutoNome": "CAMISA FEM R. 1001",
				"ProdutoReferencia": "00001366",
				"MarcaNome": "SOFTROS",
				"ImagemPrincipalURL": "https://i.imgur.com/1rVUQm7.png",
				"PrecoMin": "100.00",
				"Grades": [
					{
						"ProdutoGradeId": 1,
						"ProdutoGradeNumero": "04",
						"ProdutoGradePreco": "100.00",
						"ProdutoEstoque": "0.000",
						"ProdutoGradeCorNome": "AZUL",
						"ProdutoGradeCor": "#000fb5",
						"ProdutoGradeCorImgExt": "",
						"ProdutoGradeBarras": "333000000002"
					}
				]
			}
		]
	}
}
```
:::

## 8 - Fazer pedido
Cadastra pedido no sistema e o manda para análise

A requisição deve ser feita utilizando o método **POST**   
Exemplo do **corpo** da requisição:
```json
{
	"AppCliente": {
		"Acao": "K",
		"TabelaPrecoCod": 1, // Código da tabela de preço
		"Cliente": {
			"ClienteCod": "5638" // Código do cliente
		},
		"Pedidos": [
			{
				"PedidoId": -1, // Número que referencia um novo pedido
				"Itens": [
					{
						"ProdutoCod": 1,
						"ProdutoGradeId": 1,
						"PedidoItemQtde": 5
					},
					...
				]
			}
		]
	}
}
```

A requisição deverá retornar um JSON vazio, como por exemplo:

```json
{
	"AppClienteRsp": {
	}
}
```

## 9 - Consultar pedidos
Este procedimento retorna os pedidos do cliente

```json
{
	"AppCliente": {
		"Acao": "E",
		"Cliente": {
			"ClienteCod": "5638" // Código do cliente
		}
	}
}
```

:::tip SUCESSO
A requisição deverá retornar o seguinte corpo:
```json
{
  "AppClienteRsp": {
    "Pedidos": [
      {
        "PedidoId": "11540",
        "PedidoDataEmissao": "2021-08-27",
        "PedidoDataFechamento": "0000-00-00",
        "PedidoSaidaStatus": 4,
        "PedidoValorLiquido": "499.50",
        "Itens": [
          {
            "ProdutoCod": "1",
            "ProdutoGradeId": "1",
            "ProdutoDescricaoCompleta": "CAMISA FEM R. 1001 (02)",
            "PedidoItemQtde": "5.000",
            "PedidoItemVlrUnitario": "99.90",
            "ProdutoGradeCorNome": "AZUL",
            "ProdutoGradeCor": "#000fb5",
            "ProdutoImagemUrl": ""
          }
        ]
      }
    ]
  }
}
```
:::

:::note Status do pedido
```json
{
  "1": "Digitando",
  "2": "Analisando",
  "3": "Aguardando data envio",
  "4": "Aprovando",
  "5": "Expedição",
  "6": "Separando",
  "7": "Faturando",
  "8": "Despachado",
  "9": "Cancelado",
  "10": "Conferindo"
}
```