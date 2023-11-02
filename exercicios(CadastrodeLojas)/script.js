const inputElements = document.querySelectorAll("#inputs");

inputElements.forEach((input) => {
  input.addEventListener("focus", (event) => {
    event.target.style.border = "2px solid purple"; // 
    console.log("Focou no campo de entrada." + event.target.value);
  });

  input.addEventListener("blur", (event) => {
    event.target.style.border = "1px solid #ddd"; // 
    console.log("Desfocou do campo de entrada." + event.target.value) ;
  });
});



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

document.getElementById('formcontainer').addEventListener('submit', function (event) {
  event.preventDefault(); // Impede o envio padrão do formulário
  const formData = new FormData(this); // Obtém os dados do formulário
  postData('https://api.flit.com.br/submeterDados', formData); // Envia os dados para o servidor
});