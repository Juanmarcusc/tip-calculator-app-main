document.getElementById('pegarValor').addEventListener('click', function() {
    const bill = number(document.getElementById('inputBill'));

    const valor = bill.value;

    console.log(valor);
  });


  function pegarDesconto(desconto) {
    console.log(desconto);
  } 