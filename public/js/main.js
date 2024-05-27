function calculate() {
  const percentage = parseFloat(document.getElementById('percentage').value);
  const number = parseFloat(document.getElementById('number').value);

  const result = (percentage / 100) * number;

  document.getElementById('result').innerHTML = `Resultado: ${result}`;
}
