const inputElements = document.querySelectorAll("#inputs");



function postData(path, data) {
  console.log("Preparando envio...");

  fetch(path, {
    method: 'POST',
    body: data,
  })
    .then((response) => response.json())
    .then((responseData) => {
      console.log("Dados enviados com sucesso:", responseData);
    })
    .catch((error) => {
      console.error("Erro ao enviar dados:", error);
    });
}


// Função para salvar o valor de um input no localStorage
function salvar(nomeInput, valor) {
  window.localStorage.setItem(nomeInput, valor);
}

// Função para preencher os inputs com os valores do localStorage
function preencherInputs() {
  const input1 = document.getElementById('input1');
  const input2 = document.getElementById('input2');
  const input3 = document.getElementById('input3');
  const input4 = document.getElementById('input4');

  // Recupere os valores do localStorage para cada input
  const valorInput1 = window.localStorage.getItem('input1');
  const valorInput2 = window.localStorage.getItem('input2');
  const valorInput3 = window.localStorage.getItem('input3');
  const valorInput4 = window.localStorage.getItem('input4');

  // Preencha os inputs com os valores do localStorage, se existirem
  if (valorInput1) {
    input1.value = valorInput1;
  }
  if (valorInput2) {
    input2.value = valorInput2;
  }
  if (valorInput3) {
    input3.value = valorInput3;
  }
  if (valorInput4) {
    input4.value = valorInput4;
  }
}


  input1.addEventListener("focus", (event) => {
    event.target.style.border = "2px solid #800080"; 
  });

  input2.addEventListener("focus", (event) => {
    event.target.style.border = "2px solid #800080"; 
  });

  input3.addEventListener("focus", (event) => {
    event.target.style.border = "2px solid #800080"; 
  });

  input4.addEventListener("focus", (event) => {
    event.target.style.border = "2px solid #800080"; 
  });


document.addEventListener("DOMContentLoaded", function() {
// Adicione um evento de "blur" para cada input
const input1 = document.getElementById('input1');
input1.addEventListener("blur", (event) => {
  event.target.style.border = "1px solid #ddd";
  salvar('input1', event.target.value);
});

const input2 = document.getElementById('input2');
input2.addEventListener("blur", (event) => {
  event.target.style.border = "1px solid #ddd";
  salvar('input2', event.target.value);

});

const input3 = document.getElementById('input3');
input3.addEventListener("blur", (event) => {
  event.target.style.border = "1px solid #ddd";
  salvar('input3', event.target.value);

});

const input4 = document.getElementById('input4');
input4.addEventListener("blur", (event) => {
  event.target.style.border = "1px solid #ddd";
  salvar('input4', event.target.value);

});


preencherInputs();
});


document.getElementById('formcontainer').addEventListener('submit', function (event) {
  event.preventDefault(); // Impede o envio padrão do formulário
  const formData = new FormData(this); // Obtém os dados do formulário
  postData('https://api.flit.com.br/submeterDados', formData); // Envia os dados para o servidor
});
