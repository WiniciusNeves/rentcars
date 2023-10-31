function saveText() {
  let id = document.getElementById("campo1").value;
  let locadora = document.getElementById("campo2").value;
  let modelo = document.getElementById("campo3").value;
  let marca = document.getElementById("campo4").value;
  let ano = document.getElementById("campo5").value;
  let motor = document.getElementById("campo6").value;
  let portas = document.getElementById("campo7").value;
  let cambio = document.getElementById("campo8").checked;

  if (id == "" || locadora == "" || modelo == "" || marca == "" || ano == "" || motor == "" || portas == "" || cambio == "") {
    window.alert("Preencha todos os campos");
  } else {
    axios.post('.src/produto.js', {
      id,
      locadora,
      modelo,
      marca,
      ano,
      motor,
      portas,
      cambio
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });

    window.alert("Cadastro realizado com sucesso!");
  }
}