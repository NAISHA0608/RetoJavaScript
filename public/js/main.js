function calcularPorcentaje() {
  const percentage = document.getElementById('percentage').value;
  const total = document.getElementById('total').value;
  const resultado = (percentage / 100) * total;
  document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
}
