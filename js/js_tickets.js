const categoria = document.getElementById('categoria')

function Calcular(){
  let entrada = 200
  cantidad = document.getElementById('cantidad').value
  switch (categoria.value) {
    case 'Estudiante':
      totalpagar = cantidad * (entrada - (entrada * 0.80));
      document.getElementById('total').innerHTML = 'Total a Pagar: $' + totalpagar;
      break;
    case 'Trainee':
      totalpagar = cantidad * (entrada - (entrada * 0.50));
      document.getElementById('total').innerHTML = 'Total a Pagar: $' + totalpagar
      break;
    case 'Junior':
      totalpagar = cantidad * (entrada - (entrada * 0.15));
      document.getElementById('total').innerHTML = 'Total a Pagar: $' + totalpagar;
      break;
    case 'Ninguna':
      totalpagar = cantidad * entrada
      document.getElementById('total').innerHTML = 'Total a Pagar: $' + totalpagar;
      break;
    }
}

function Borrar(){
  document.getElementById('total').innerHTML= "Total a Pagar: $"
}




