const portos = [
  { nome: 'Macapá', estado: 'Amapá', autoridade: 'CDSA', tipo: 'Marítimo', regiao: 'Norte' },
  { nome: 'Itaqui', estado: 'Maranhão', autoridade: 'EMAP', tipo: 'Marítimo', regiao: 'Nordeste' },
  { nome: 'Cabedelo', estado: 'Paraíba', autoridade: 'DOCAS-PB', tipo: 'Marítimo', regiao: 'Nordeste' },
  { nome: 'Recife', estado: 'Pernambuco', autoridade: 'PORTO DO RECIFE S.A', tipo: 'Marítimo', regiao: 'Nordeste' },
  { nome: 'Suape', estado: 'Pernambuco', autoridade: 'SUAPE', tipo: 'Marítimo', regiao: 'Nordeste' },
  { nome: 'Forno', estado: 'Rio de Janeiro', autoridade: 'COMAP', tipo: 'Marítimo', regiao: 'Sudeste' },
  { nome: 'São Sebastião', estado: 'São Paulo', autoridade: 'CDSS', tipo: 'Marítimo', regiao: 'Sudeste' },
  { nome: 'Imbituba', estado: 'Santa Catarina', autoridade: 'SCPAR', tipo: 'Marítimo', regiao: 'Sul' },
  { nome: 'Itajaí', estado: 'Santa Catarina', autoridade: 'SPI', tipo: 'Marítimo', regiao: 'Sul' },
  { nome: 'Laguna', estado: 'Santa Catarina', autoridade: 'SCPAR', tipo: 'Marítimo', regiao: 'Sul' },
  { nome: 'São Francisco do Sul', estado: 'Santa Catarina', autoridade: 'SCPAR', tipo: 'Marítimo', regiao: 'Sul' },
  { nome: 'Antonina', estado: 'Paraná', autoridade: 'APPA', tipo: 'Marítimo', regiao: 'Sul' },
  { nome: 'Paranaguá', estado: 'Paraná', autoridade: 'APPA', tipo: 'Marítimo', regiao: 'Sul' },
  { nome: 'Pelotas', estado: 'Rio Grande do Sul', autoridade: 'PORTO RS', tipo: 'Marítimo', regiao: 'Sul' },
  { nome: 'Porto Alegre', estado: 'Rio Grande do Sul', autoridade: 'PORTO RS', tipo: 'Marítimo', regiao: 'Sul' },
  { nome: 'Rio Grande', estado: 'Rio Grande do Sul', autoridade: 'PORTO RS', tipo: 'Marítimo', regiao: 'Sul' },
  { nome: 'Porto Velho', estado: 'Rondônia', autoridade: 'SOPH-RO', tipo: 'Fluvial', regiao: 'Norte' },
  { nome: 'Manaus', estado: 'Amazonas', autoridade: 'SNPH', tipo: 'Marítimo', regiao: 'Norte' },
];

const opcoes = document.getElementById("opcoes");
const pesquisa = document.getElementById("pesquisa");
const campoDePesquisa = document.getElementById("campoDePesquisa");
const botaoPesquisar = document.getElementById("botaoPesquisar");
const resultado = document.getElementById("resultado");

opcoes.addEventListener("change", () => {
  const valorSelecionado = opcoes.value;
  campoDePesquisa.value = ""

  if (valorSelecionado === "info") {
    campoDePesquisa.placeholder = "Digite o nome do porto";
  } else if (valorSelecionado === "regiao") {
    campoDePesquisa.placeholder = "Digite a região a ser pesquisada";
  } else if (valorSelecionado === "tipo") {
    campoDePesquisa.placeholder = "Digite o tipo de porto (marítimo/fluvial)";
  } else {
    campoDePesquisa.placeholder = "Selecione uma opção";
  }
  // Exibe o campo de entrada de texto
  pesquisa.style.display = "block";
});

botaoPesquisar.addEventListener("click", () => {
  const valorSelecionado = opcoes.value;

  if (valorSelecionado === "info") {
    const nomeDoPorto = campoDePesquisa.value.trim();
    const resultadoDaPesquisa = pesquisarPorto(nomeDoPorto);
    resultado.innerHTML = resultadoDaPesquisa;
  }

  if(valorSelecionado === "regiao") {
    const regiao = campoDePesquisa.value.trim();
    const resultadoDaPesquisa = pesquisarRegiao(regiao);
    resultado.innerHTML = resultadoDaPesquisa;
  }

  if(valorSelecionado === "tipo") {
    const tipo = campoDePesquisa.value.trim();
    const resultadoDaPesquisa = pesquisarTipo(tipo);
    resultado.innerHTML = resultadoDaPesquisa;
  }

  if(valorSelecionado === "selecione") {
    resultado.innerHTML = "Você deve selecionar uma opção primeiro.";
  }

});

function pesquisarPorto(nome) {
  nome = nome.toLowerCase();
  let resultado = "";

  for (let i = 0; i < portos.length; i++) {
    if (portos[i].nome.toLowerCase() === nome) {
      resultado = `<h3>PORTO ${(portos[i].nome).toUpperCase()}</h3> <br>Estado: ${portos[i].estado} <br>Autoridade portuária: ${portos[i].autoridade} <br>Tipo: ${portos[i].tipo}`;
    }
  }

  if (resultado === "") {
    return "Porto não encontrado.";
  } 

  return resultado;
}

function pesquisarRegiao(regiao) {
  regiao = regiao.toLowerCase();

  let resultado = "";

  if(regiao === "n") {
    regiao = "norte";
  } else if(regiao === "s") {
    regiao = "sul"; 
  } else if(regiao === "ne") {
    regiao = "nordeste";
  } else if(regiao === "se") {
    regiao = "sudeste";
  } else if (regiao === "centro-oeste" || regiao === "co" || regiao === "centro oeste") {
    resultado = "A região Centro-Oeste não possui Portos Organizados Delegados.";
  }

  for (let i = 0; i < portos.length; i++) {
    if (portos[i].regiao.toLowerCase() === regiao) {
      resultado += `${portos[i].nome} - ${portos[i].estado}<br>`;
    }
  }

  if (resultado === "") {
    return "Região não encontrada.";
  } 

  return resultado;
}

function pesquisarTipo(tipo) {
  tipo = tipo.toLowerCase();
  let resultado = "";

  if(tipo === "maritimo") {
    tipo = "marítimo";
  }

  for (let i = 0; i < portos.length; i++) {
    if (portos[i].tipo.toLowerCase() === tipo) {
      resultado += `${portos[i].nome} - ${portos[i].regiao}<br>`;
    }
  }

  if (resultado === "") {
    return "Tipo não encontrado.";
  } 

  return resultado;
}
