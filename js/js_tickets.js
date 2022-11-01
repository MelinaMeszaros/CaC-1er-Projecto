const categoria = document.getElementById('categoria')

function Calcular(){
  let entrada = 200
  cantidad = parseInt(document.getElementById('cantidad').value)
  switch (categoria.value) {
    case 'Estudiante':
      totalpagar = cantidad * (entrada - (entrada * 0.80));
      break;
    case 'Trainee':
      totalpagar = cantidad * (entrada - (entrada * 0.50));
      break;
    case 'Junior':
      totalpagar = cantidad * (entrada - (entrada * 0.15));
      break;
    case 'Ninguna':
      totalpagar = cantidad * entrada
      break;
    }
  document.getElementById('total').innerHTML = 'Total a Pagar: $' + totalpagar;
}

function Borrar(){
  document.getElementById('total').innerHTML= "Total a Pagar: $"
}




