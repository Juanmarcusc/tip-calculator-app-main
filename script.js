let valorBill = "";
function inputBill() {
    const valor = document.getElementById('inputBill').value
    valorBill = parseFloat(valor);
    
}
let valorDesconto = "";
function pegarDesconto(desconto) {
    valorDesconto = parseFloat(desconto)
    
} 

function valorTotalConta() {
    const resultado = valorBill * valorDesconto;
    console.log(resultado)

}