const addButton = document.getElementById("addButton");
const overlay = document.querySelector(".overlay");
const addForm = document.getElementById("addForm");
const editForm = document.getElementById("editForm");
const nomePorto = document.getElementById("nomePorto");
const editNomePorto = document.getElementById("editNomePorto");
const submitButton = document.getElementById("submitButton");
const editSubmitButton = document.getElementById("editSubmitButton");
const estado = document.getElementById("estado");
const editEstado = document.getElementById("editEstado");
const tipoPorto = document.getElementById("tipoPorto");
const editTipoPorto = document.getElementById("editTipoPorto");
const fecharAddForm = document.getElementById("fecharAddForm");
const fecharEditForm = document.getElementById("fecharEditForm");
const gerarRelatorioTxt = document.getElementById("gerarRelatorioTxt");
const gerarRelatorioCsv = document.getElementById("gerarRelatorioCsv");


const listaDePortos = [];

// Evento de clique no botão "Add"
addButton.addEventListener("click", function () {
  overlay.style.display = "block";
  addForm.style.display = "block";
  estado.selectedIndex = 0;
  tipoPorto.selectedIndex = 0;
  nomePorto.value = "";
});

// Evento de clique no botão "Fechar" do formulário de adição
fecharAddForm.addEventListener("click", function () {
  overlay.style.display = "none";
  addForm.style.display = "none";
  editNomePorto.value = "";
  editEstado.selectedIndex = 0;
  editTipoPorto.selectedIndex = 0;
});

// Evento de clique no botão "Fechar" do formulário de edição
fecharEditForm.addEventListener("click", function () {
  overlay.style.display = "none";
  editForm.style.display = "none";
});

// Evento de clique no botão "Adicionar"
submitButton.addEventListener("click", function () {
  if (!nomePorto.value) {
    alert("Digite as informações");
    return;
  }
  if (estado.selectedIndex === 0) {
    alert("Selecione um estado");
    return;
  }
  if (tipoPorto.selectedIndex === 0) {
    alert("Selecione um tipo");
    return;
  }

  const porto = {
    nome: nomePorto.value,
    estado: estado.value,
    tipo: tipoPorto.value,
  };

  const inputValue = porto.nome;
  if (inputValue) {
    let listItem = null;
    const existingPorto = listaDePortos.find((p) => p.nome === inputValue);

    if (existingPorto) {
      // Se já existe um porto com o mesmo nome, atualize suas informações
      existingPorto.estado = porto.estado;
      existingPorto.tipo = porto.tipo;
      listItem = document.querySelector(
        `div[id="${listaDePortos.indexOf(existingPorto)}"] p`
      );
    } else {
      // Caso contrário, crie um novo elemento na lista
      listaDePortos.push(porto);
      listItem = document.createElement("p");
      const portoDiv = document.createElement("div");
      portoDiv.id = listaDePortos.length - 1;
      portoDiv.innerHTML = `
        <h5>Porto ${porto.nome} - ${porto.estado}</h5>
        <p>Tipo: ${porto.tipo}</p>
        <span class="options">
          <i onClick="editTask(this)" class="fas fa-edit"></i>
          <i onClick="deletePost(this)" class="fas fa-trash-alt"></i>
        </span>
      `;
      infoList.appendChild(portoDiv);
    }

    // Atualize o texto do elemento da lista visível com as novas informações
    listItem.textContent = inputValue;
    console.log(listaDePortos);

    estado.selectedIndex = 0;
    tipoPorto.selectedIndex = 0;
    nomePorto.value = "";
    overlay.style.display = "none";
    addForm.style.display = "none";
  }
});

let deletePost = (e) => {
  e.parentElement.parentElement.remove();
  listaDePortos.splice(e.parentElement.parentElement.id, 1);
  console.log(listaDePortos);
};

let editTask = (element) => {
  const portoDiv = element.parentElement.parentElement;
  const portoId = portoDiv.id;
  const porto = listaDePortos[portoId];

  // Preencha os campos do formulário de edição com as informações do porto selecionado
  editNomePorto.value = porto.nome;
  editEstado.value = porto.estado;
  editTipoPorto.value = porto.tipo;

  overlay.style.display = "block";
  editForm.style.display = "block";

  // Atualizar as informações do porto na lista quando o botão de atualização for clicado
  editSubmitButton.onclick = function () {
    // Realize as validações necessárias antes de atualizar as informações do porto
    if (!editNomePorto.value) {
      alert("Digite as informações");
      return;
    }
    if (editEstado.selectedIndex === 0) {
      alert("Selecione um estado");
      return;
    }
    if (editTipoPorto.selectedIndex === 0) {
      alert("Selecione um tipo");
      return;
    }

    // Atualize as informações do porto na lista
    porto.nome = editNomePorto.value;
    porto.estado = editEstado.value;
    porto.tipo = editTipoPorto.value;

    // Atualize o texto do elemento da lista visível com as novas informações
    const h5 = portoDiv.querySelector("h5");
    const p = portoDiv.querySelector("p");
    h5.textContent = `Porto ${porto.nome} - ${porto.estado}`;
    p.textContent = `Tipo: ${porto.tipo}`;

    console.log(listaDePortos);

    // Limpe os campos do formulário e oculte o formulário de edição
    editNomePorto.value = "";
    editEstado.selectedIndex = 0;
    editTipoPorto.selectedIndex = 0;
    overlay.style.display = "none";
    editForm.style.display = "none";
  };
};

gerarRelatorioTxt.addEventListener('click', function() {
    let tabela = "    RELATÓRIO DE PORTOS ORGANIZADOS BRASILEIROS    \n\n"
    tabela += `   Nome do porto\tEstado\t\tTipo\t\n`;
       tabela += "---------------------------------------------------\n";

  
    for (let i = 0; i < listaDePortos.length; i++) {
      tabela += `${listaDePortos[i].nome.padEnd(20)}│\t${listaDePortos[i].estado.padEnd(10)}│\t${listaDePortos[i].tipo.padEnd(10)}│\n`;
      tabela += "---------------------------------------------------\n";
    }
  
    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([tabela], { type: "data:text/plain;charset=utf-8;" }));
    link.download = "relatorio.txt";
    link.click();

    alert("Relatório exportado como TXT com sucesso!");
});

gerarRelatorioCsv.addEventListener("click", function () {
    let csv = "Nome do porto;Estado;Tipo\n";

    for (let i = 0; i < listaDePortos.length; i++) {
      csv += `${listaDePortos[i].nome};${listaDePortos[i].estado};${listaDePortos[i].tipo}\n`;
    }

    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8;" }));
    link.download = "relatorio.csv";
    link.click();
    
    alert("Relatório exportado como CSV com sucesso!");
});
