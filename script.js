console.log("hello word")
document.getElementById('pegarValor').addEventListener('click', function() {
    alert('funcionando!')
    const bill = document.getElementById('inputBill')

    const valor = bill.value

    console.log(valor)
})