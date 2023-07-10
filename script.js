function validationForm() {
    let validationConv = document.forms["register"]["conv"].value;
    let validationMarca = document.forms["register"]["marca"].value;
    let validationLinha = document.forms["register"]["linha"].value;
    let validationTpac = document.forms["register"]["tpac"].value;
    let validationQuantidade = document.forms["register"]["quantidade"].value;
    let validationRadio = document.forms["register"]["radio"].value;
    
 if (validationConv == "") {
    alert("O Nome da Convidada deve ser informado");
    return false;
 }
 if (validationMarca == "") {
    alert("A Marca deve ser informada");
    return false;
 }
 if (validationLinha == "") {
    alert("A Linha ou Categoria deve ser informada");
    return false;
 }
 if (validationTpac == "") {
    alert("O Tamanho do Pacote deve ser informado");
    return false;
 } 
 if (validationQuantidade == "") {
    alert("A Quantidade de Fraldas por Pacote deve ser informada");
    return false;
 }
 if (validationRadio == "") {
   alert("O Tamanho das Fraldas deve ser informado");
   return false;
}
  
 alert("Tudo certo!");
}

function insert() {
    let conv = document.forms["register"]["conv"].value;
    let marca = document.forms["register"]["marca"].value;
    let linha = document.forms["register"]["linha"].value;
    let tpac = document.forms["register"]["tpac"].value;
    let quantidade = document.forms["register"]["quantidade"].value;
    let radio = document.forms["register"]["radio"].value;
          
    let insert = window.document.getElementById("insertRow");
    
    insert.innerHTML = `
    <th scope="row">${conv}</th>
    <td>${marca}</td>
    <td>${linha}</td>
    <td>${tpac}</td>
    <td>${quantidade}</td>
    <td>${radio}</td>
    `;
        }
