const portosPorEstado = [
    36,//Todos os estados 
    0, //Acre
    1, //Alagoas
    1, //Amapá
    1, //Amazonas
    3, //Bahia
    1, //Ceará
    0, //Distrito Federal
    2, //Espírito Santo
    0, //Goiás
    1, //Maranhão
    0, //Mato Grosso
    0, //Mato Grosso do Sul
    0, //Minas Gerais
    3, //Pará
    1, //Paraíba
    2, //Paraná
    2, //Pernambuco
    0, //Piauí
    5, //Rio de Janeiro
    2, //Rio Grande do Norte
    3, //Rio Grande do Sul
    1, //Rondônia
    1, //Roraima
    4, //Santa Catarina
    2, //São Paulo
    0, //Sergipe
    0  //Tocantins
  ];
  
  // variável que armazena o número total de portos públicos
  let totalPortos = 0;
  
  // Loop que soma o número de portos públicos de todos os estados
  for (let i = 1; i < portosPorEstado.length; i++) {
    totalPortos += portosPorEstado[i];
  }
  
  function atualizarPorcentagem() {
    const select = document.getElementById("estado");
    const index = select.selectedIndex;
    let nomeEstado;
    let porcentagem;
  
    if (index == 0) {
      document.getElementById("Texto_porcentagem").innerHTML = "";
      for (let i = 1; i < portosPorEstado.length; i++) {
        porcentagem = (portosPorEstado[i] / totalPortos) * 100;
        nomeEstado = getNomeEstado(i);
        document.getElementById("Texto_porcentagem").innerHTML 
        += `${nomeEstado} = ${porcentagem.toFixed(2)}% <br>`;
      }
    } else {
      porcentagem = (portosPorEstado[index] / totalPortos) * 100;
      nomeEstado = getNomeEstado(index);
      document.getElementById("Texto_porcentagem")
      .textContent = `O estado ${nomeEstado} tem ${portosPorEstado[index]} porto(s), isso representa 
      ${porcentagem.toFixed(2)}% do total de portos públicos organizados do Brasil.`;
    }
  
    const bandeira = document.getElementById("bandeira");
    bandeira.src = bandeiras[index];
  }
  
  function getNomeEstado(index) {
    switch (index) {
      case 0:
        return "Todos os Estados";
      case 1:
        return "Acre";
      case 2:
        return "Alagoas";
      case 3:
        return "Amapá";
      case 4:
        return "Amazonas";
      case 5:
        return "Bahia";
      case 6:
        return "Ceará";
      case 7:
        return "Distrito Federal";
      case 8:
        return "Espírito Santo";
      case 9:
        return "Goiás";
      case 10:
        return "Maranhão";
      case 11:
        return "Mato Grosso";
      case 12:
        return "Mato Grosso do Sul";
      case 13:
        return "Minas Gerais";
      case 14:
        return "Pará";
      case 15:
        return "Paraíba";
      case 16:
        return "Paraná";
      case 17:
        return "Pernambuco";
      case 18:
        return "Piauí";
      case 19:
        return "Rio de Janeiro";
      case 20:
        return "Rio Grande do Norte";
      case 21:
        return "Rio Grande do Sul";
      case 22:
        return "Rondônia";
      case 23:
        return "Roraima";
      case 24:
        return "Santa Catarina";
      case 25:
        return "São Paulo";
      case 26:
        return "Sergipe";
      case 27:
        return "Tocantins";
    }
  }
  
  const bandeiras = [
    "https://www.curitiba.pr.leg.br/atividade-parlamentar/legislacao/imagens/bandeira-do-brasil.png/image",
    "https://www.infoescola.com/wp-content/uploads/2021/02/bandeira-acre-600x420.png",
    "https://www.infoescola.com/wp-content/uploads/2021/02/bandeira-alagoas-600x400.png",
    "https://www.infoescola.com/wp-content/uploads/2021/02/bandeira-amapa-600x420.png",
    "https://www.infoescola.com/wp-content/uploads/2021/02/bandeira-amazonas-600x428.png",
    "https://www.infoescola.com/wp-content/uploads/2021/02/bandeira-bahia-600x400.png",
    "https://www.infoescola.com/wp-content/uploads/2021/02/bandeira-ceara-600x420.png",
    "https://www.infoescola.com/wp-content/uploads/2021/02/bandeira-distrito-federal-600x420.png",
    "https://www.infoescola.com/wp-content/uploads/2021/02/bandeira-espirito-santo-600x420.png",
    "https://www.infoescola.com/wp-content/uploads/2021/02/bandeira-goias-600x420.png",
    "https://www.infoescola.com/wp-content/uploads/2021/02/bandeira-do-maranhao-600x400.png",
    "https://www.infoescola.com/wp-content/uploads/2021/02/bandeira-mato-grosso-600x420.png",
    "https://www.infoescola.com/wp-content/uploads/2021/02/bandeira-mato-grosso-do-sul-600x420.png",
    "https://www.infoescola.com/wp-content/uploads/2021/02/bandeira-minas-gerais-600x420.png",
    "https://www.infoescola.com/wp-content/uploads/2021/02/bandeira-pa-600x400.png",
    "https://www.infoescola.com/wp-content/uploads/2021/02/bandeira-paraiba-600x420.png",
    "https://www.infoescola.com/wp-content/uploads/2021/02/bandeira-parana-600x420.png",
    "https://www.infoescola.com/wp-content/uploads/2021/02/bandeira-pernambuco-600x400.png",
    "https://www.infoescola.com/wp-content/uploads/2021/02/bandeira-piaui-600x400.png",
    "https://www.infoescola.com/wp-content/uploads/2021/02/bandeira-rio-de-janeiro-600x420.png",
    "https://www.infoescola.com/wp-content/uploads/2021/02/bandeira-rio-grande-do-norte-600x400.png",
    "https://www.infoescola.com/wp-content/uploads/2021/02/bandeira-rio-grande-do-sul-600x420.png",
    "https://www.infoescola.com/wp-content/uploads/2021/02/bandeira-rondonia-600x420.png",
    "https://www.infoescola.com/wp-content/uploads/2021/02/bandeira-de-roraima-600x400.png",
    "https://www.infoescola.com/wp-content/uploads/2021/02/bandeira-santa-catarina-600x436.png",
    "https://www.infoescola.com/wp-content/uploads/2021/02/bandeira-sao-paulo-600x400.png",
    "https://www.infoescola.com/wp-content/uploads/2021/02/bandeira-sergipe-600x420.png",
    "https://www.infoescola.com/wp-content/uploads/2021/02/bandeira-tocantins-600x420.png"
  ];

const gerarRelatorioTxt = document.getElementById("gerarRelatorioTxt");

gerarRelatorioTxt.addEventListener('click', function() {
      let tabela = " QUANTIDADE DE PORTOS ORGANZIZADOS POR ESTADO BRASILEIRO\n\n"
      tabela += `      Estado\t\tQuantidade\t Porcentagem\t\n`;
         tabela += "---------------------------------------------------------\n";
  
    
      for (let i = 1; i < portosPorEstado.length; i++) {
        tabela += `${getNomeEstado(i).padEnd(20)}│\t   ${portosPorEstado[i].toString().padEnd(9)}│\t   ${(((portosPorEstado[i] / totalPortos) * 100).toFixed(2))}%        │\n`;
        tabela += "---------------------------------------------------------\n";
      }
    
    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([tabela], { type: "data:text/plain;charset=utf-8;" }));
    link.download = "relatorio.txt";
    link.click();

    alert("Relatório exportado como TXT com sucesso!");
  });


const gerarRelatorioCsv = document.getElementById("gerarRelatorioCsv");

gerarRelatorioCsv.addEventListener("click", function () {
    let csv = "Estado;Quantidade de Portos;Porcentagem\n";

    for (let i = 1; i < portosPorEstado.length; i++) {
      csv += `${getNomeEstado(i)};${portosPorEstado[i]};${(((portosPorEstado[i] / totalPortos) * 100).toFixed(2))}%\n`;
    }

    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8;" }));
    link.download = "relatorio.csv";
    link.click();

    alert("Relatório exportado como CSV com sucesso!");
});
