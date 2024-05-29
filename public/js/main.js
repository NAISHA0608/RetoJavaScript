function calcularPorcentaje() {
  const percentage = parseFloat(document.getElementById('percentage').value);
  const total = parseFloat(document.getElementById('total').value);
  const resultado = (percentage / 100) * total;
  document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
}

// Asociar la función al evento clic de un botón, por ejemplo:
document.getElementById('calcularButton').addEventListener('click', calcularPorcentaje);

