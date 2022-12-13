let contador = 0;

let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btnAdd");
let main = document.getElementById("areaLista");

function addTarefa() {
  //pegar o valor digitado no input
  let valorInput = input.value;
  //Se não for vazio, nem nulo, nem indefinido.
  if ((valorInput !== "") && (valorInput !== null) && (valorInput !== undefined)) {

    ++contador;

    let novoItem = `
    <div id="${contador}" class="item">
      <div onclick="marcarTarefa(${contador})" class="item-icone">
        <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
      </div>
      <div onclick="marcarTarefa(${contador})" class="item-nome">
        ${valorInput}
      </div>
      <div class="item-botao">
        <button onclick="deletar(${contador})" class="delete">Deletar <i class="mdi mdi-delete"></i></button>
      </div>
    </div>`;



    //adicionar novo item
    main.innerHTML += novoItem;

    //zerar os campos
    input.value = "";
    input.focus();
  }

}


function deletar(id){
  var tarefa = document.getElementById(id);
  tarefa.remove();
}


function marcarTarefa(id){
  var item = document.getElementById(id);
  var classe = item.getAttribute('class');

  if (classe == "item"){
    item.classList.add('clicado');

    var icone = document.getElementById("icone_"+id);
    icone.classList.remove('mdi-circle-outline');
    icone.classList.add('mdi-check-circle');

    item.parentNode.appendChild(item);
  }else{
    item.classList.remove('clicado');

    var icone = document.getElementById("icone_"+id);
    icone.classList.remove('mdi-check-circle');
    icone.classList.add('mdi-circle-outline');
  }
}



input.addEventListener("keypress", function (event) {
  //se clicou enter = 13
  if (event.which === 13) {
    event.preventDefault();
    btnAdd.click();
  }
})
