function PaginaInicial(){
    var form = document.getElementById("formCadastro");
    var dados = new FormData(form);

    fetch("insere-produto.php", {
        method: "POST",
        body: dados
    });
}