# API
Documentação da API do Agulhão Vitrine

- **Homologação**
Endereço: http://agulhao.softros.com.br/rest
Rota: URLAppCliente
Integrador: 758a692f2f383ca967e034af959c0ab26fd615e3f6c5af9b9af5a218a418a67d
Empresa: 999999
usuario: 08683998000188
senha: teste
- **Solicitar credenciais para integrar com o Agulhão Vitrine**
Basta entrar em contato conosco através do telefone **(44) 3199-9000** (*WhatsApp* disponível)
- **Precisa de ajuda?**
Entre em contato com nosso suporte: **(44) 3199-9000** (*WhatsApp* disponível)
- **Isnomnia V4 (JSON)**
Com este arquivo você pode importar as requisições no programa [Insomnia](https://insomnia.rest/).
[Download do arquivo JSON](https://drive.google.com/file/d/1eSOFmLOSytWKpgq7TXdvQ_pVl-RdOBht/view?usp=sharing)


 ## 1 - Autenticação
 Para usar a API do Agulhão Vitrine é necessário se identificar em **todas** requisições. Os parâmetros que irão identificar o integrador deverão ser enviados no cabeçalho das requisições.
 
 Exemplo cabeçalho padrão de cada requisição:
```json
{
	"Content-Type": "application/json",
  "Integrador-Token": "758a692f2f383ca967e034af959c0ab26fd615e3f6c5af9b9af5a218a418a67d",
  "Empresa-Token": "999999"
}
```

Caso queira passar a identificação de um usuário cadastrado, use o seguinte cabeçalho:
```json
{ 
	"Content-Type": "application/json",
  "Integrador-Token": "758a692f2f383ca967e034af959c0ab26fd615e3f6c5af9b9af5a218a418a67d",
  "Empresa-Token": "999999"
  "Usuario-Token": "a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3"
}
```

## 2 - Buscar tabelas de preço
Para poder consultar os produtos é necessário primeiro ter uma tabela de preço selecionada. Você pode pegar a lista de tabelas de preço neste procedimento.

> A requisição deve ser feita utilizando o método **POST**
> Exemplo do **corpo** da requisição:
{.is-info}
```json
{
	"AppCliente": {
		"Acao": "N"
	}
}
```

---

> A requisição deverá retornar o seguinte corpo:
{.is-success}
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

## 3 - Buscar marcadores
Os marcadores são utilizados como filtro na hora de buscar os produtos. Exemplo de marcadores: Calça, Masculino, Feminino, Promoção, etc...

> A requisição deve ser feita utilizando o método **POST**
> Exemplo do **corpo** da requisição:
{.is-info}
```json
{
	"AppCliente": {
		"Acao": "J"
	}
}
```

---

> A requisição deverá retornar o seguinte corpo:
{.is-success}
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

## 4 - Buscar produtos
Irá retornar os produtos da loja conforme os filtros passados pela requisição.

> Cada requisição retorna **50 produtos**, então **é necessário informar no cabeçalho** da requisição o **último código do produto** na lista. Quando for a primeira requisição, o valor do produto final é igual a 0.
> Exemplo do **cabeçalho** da requisição:
{.is-warning}
```json
{
	"Content-Type": "application/json",
  "Integrador-Token": "758a692f2f383ca967e034af959c0ab26fd615e3f6c5af9b9af5a218a418a67d",
  "Empresa-Token": "999999",
  "ULTIMOPRODUTO": "0"
}
```

> A requisição deve ser feita utilizando o método **POST**
> Exemplo do **corpo** da requisição:
{.is-info}
```json
{
	"AppCliente": {
        "Acao": "A",
        "TabelaPrecoCod": 1, // Tabela de preço selecionada
        "Filtros": {
            "FiltroBusca": "", // Filtrar pelo nome do produto, exemplo: 'Jaqueta'
            "FiltroMarcador": [] // Marcadores que foram selecionados, exemplo: [1, ...]
        }
    }
}
```

---

> A requisição deverá retornar o seguinte corpo:
{.is-success}
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
        "PrecoMin": "99.90" // Preço mínimo das grades do produto
      },
      {
        "ProdutoCod": "2",
        "ProdutoNome": "CAMISA FEM R. 1001",
        "ProdutoReferencia": "00001366",
        "MarcaNome": "SOFTROS",
        "ImagemPrincipalURL": "https://i.imgur.com/1rVUQm7.png",
        "PrecoMin": "100.00"
      }
    ]
  }
}
```

> A requisição também retornará no cabeçalho o ultimo código do produto na lista:
{.is-warning}
```json
{
  "Content-Type": "application/json",
  "ULTIMOPRODUTO": "2"
}
```

## 5 - Cadastrar usuário
Inserir um novo cadastro de cliente na empresa

> A requisição deve ser feita utilizando o método **POST**
> Exemplo do **corpo** da requisição:
{.is-info}
```json
{
	"AppCliente": {
		"Acao": "P",
		"Cliente": {
			"ClienteCpfCnpj": "08.683.998/0001-88", // CPF ou CNPJ
			"ClienteTelefone": "(44) 9 9976-0287", // Número telefone
			"ClienteEmail": "contato@softros.com.br", // Email
			"ClienteSenha": "teste", // Senha
			"ClienteNome": "Softros Sistemas", // Nome
			"ClienteUf": "PR", // Estado
			"ClienteCidCod": "4117909", // Código IBGE da cidade
			"ClienteEndBairro": "Centro", // Bairro
			"ClienteCep": "85950-000", // CEP
			"ClienteEndLgr": "XV de Novembro", // Rua
			"ClienteEndNro": "800", // Número do endereço
			"ClienteEndCpl": "", // Complemento
			"VendedorCodigo": "" // Código da vendedora que indicou o cliente
		}
	}
}
```

---

> A requisição deverá retornar o seguinte corpo:
{.is-success}
```json
{
  "AppClienteRsp": {
    "Cliente": {
    	"ClienteCod": "5638", // Código do cliente
      "ClienteStatus": "A", // Conta do cliente ativada
      "ClienteCpfCnpj": "08.683.998/0001-88",
      "ClienteTelefone": "(44) 9 9976-0287",
      "ClienteEmail": "contato@softros.com.br",
      "ClienteSenha": "",
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

> Caso ocorra algum erro, será retornado da seguinte forma:
{.is-danger}
```json
{
  "AppClienteRsp": {
    "Retorno": [
      {
        "RetornoNivel": 3, // Erro
        "RetornoMensagem": "CPF/CNPJ do cliente não definido!"
      }
    ]
  }
}
```

## 6 - Entrar com usuário
Ao realizar a autenticação do usuário, ele poderá fazer pedidos e consultar os detalhes do produto.

> A requisição deve ser feita utilizando o método **POST**
> Exemplo do **corpo** da requisição:
{.is-info}
```json
{
  "AppCliente": {
    "Acao": "B",
    "Cliente": {
      "ClienteCpfCnpj": "08.683.998/0001-88",
      "ClienteSenha": "teste"
    }
  }
}
```

---

> A requisição deverá o token de autenticação no seguinte corpo:
{.is-success}
```json
{
  "AppClienteRsp": {
    "Cliente": {
      "ClienteCod": "5638",
      "ClienteStatus": "A",
      "ClienteCpfCnpj": "08.683.998/0001-88",
      "ClienteTelefone": "(44) 9 9976-0287",
      "ClienteEmail": "contato@softros.com.br",
      "ClienteSenha": "",
      "ClienteNome": "Softros Sistemas",
      "ClienteUf": "PR",
      "ClienteCidCod": "4117909",
      "ClienteEndBairro": "Centro",
      "ClienteCep": "85950-000",
      "ClienteEndLgr": "XV de Novembro",
      "ClienteEndNro": "800",
      "Token": "9a8fcf6694ccc288dffc050d35c2d33e791c8335e24aa285450b81ee80109e7a" // Token para utilizar no cabeçalho das próximas requisições
    }
  }
}
```

## 7 - Atualizar usuário
> É necessário autenticar o usuário para realizar este processo! O token deverá ser passado no cabeçalho, como explicado no tópico 1.
{.is-warning}

Este procedimento atualiza as informações do usuário, como por exemplo, seu endereço.

> A requisição deve ser feita utilizando o método **POST**
> Exemplo do **corpo** da requisição:
{.is-info}

```json
{
	"AppCliente": {
		"Acao": "F",
		"Cliente": {
			"ClienteEndLgr": "XV de Novembro",
			"ClienteEndNro": "800",
			"ClienteEndBairro": "Centro",
			"ClienteEndCpl": "",
			"ClienteCep": "85950-000",
			"ClienteCidCod": "4117909",
      "ClienteUf": "PR",
      "PessoaFuncionarioCod": "",
      "ClienteSen": "" // Informar somente quando for trocar a senha
		}
	}
}
```
---

> A requisição deverá retornar um JSON vazio, como por exemplo:
{.is-success}
```json
{
  "AppClienteRsp": {
  }
}
```

## 8 - Buscar produto
> É necessário autenticar o usuário para realizar este processo! O token deverá ser passado no cabeçalho, como explicado no tópico 1.
{.is-warning}

Retorna produto com as grades, preços e estoque.

> A requisição deve ser feita utilizando o método **POST**
> Exemplo do **corpo** da requisição:
{.is-info}
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

---

> A requisição deverá retornar o seguinte corpo:
{.is-success}
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

## 9 - Fazer pedido
> É necessário autenticar o usuário para realizar este processo! O token deverá ser passado no cabeçalho, como explicado no tópico 1.
{.is-warning}

Manda pedido para análise

> A requisição deve ser feita utilizando o método **POST**
> Exemplo do **corpo** da requisição:
{.is-info}

```json
{
  "AppCliente": {
    "Acao": "K",
    "TabelaPrecoCod": 1,
    "Pedidos": [
      {
        "PedidoId": -1,
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

---

> A requisição deverá retornar um JSON vazio, como por exemplo:
{.is-success}
```json
{
  "AppClienteRsp": {
  }
}
```

## 10 - Consultar pedidos
> É necessário autenticar o usuário para realizar este processo! O token deverá ser passado no cabeçalho, como explicado no tópico 1.
{.is-warning}

Este procedimento retorna os pedidos do usuário

```json
{
  "AppCliente": {
    "Acao": "E"
  }
}
```
---

> A requisição deverá retornar o seguinte corpo:
{.is-success}
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

> Status do pedido
{.is-info}
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