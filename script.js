let valorBill = "";
function inputBill() {
    const valor = document.getElementById('inputBill').value
    valorBill = parseFloat(valor);
    console.log("Valor da conta:", valorBill)
    
}
let valorDesconto = "";
function pegarDesconto(desconto) {
    valorDesconto = parseFloat(desconto)
    console.log("Valor do desconto:", valorDesconto);
    
} 

let valorPeople = ""; 
function inputPeople() {
    const valorDePessoas= document.getElementById('inputPeople').value
    valorPeople = parseFloat(valorDePessoas)
}

function valorTotalConta() {
    const resultado = valorBill - (valorBill * valorDesconto);
    console.log(resultado)

    const mostrarResultadoBill = document.getElementById('contaBillComDesconto')
    mostrarResultadoBill.textContent = `$ ${resultado.toFixed(2)}`;

}

function valorTotalPorPessoa() {
    const resultado =  [valorBill - (valorBill * valorDesconto)]/ valorPeople;
    console.log(resultado)

    const mostrarResultadoParaCadaPessoa = document.getElementById('contaParaCadaPessoa')
    mostrarResultadoParaCadaPessoa.textContent = `$ ${resultado.toFixed(2)}`;
}