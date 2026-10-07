function verificarIdade() {
 
  const elementoInput = document.getElementById("campoIdade");
  const idadeDigitada = parseInt(elementoInput.value);


  const elementoResultado = document.getElementById("mensagemResultado");


  if (isNaN(idadeDigitada)) {
    elementoResultado.innerText = "Por favor, digite uma idade numérica válida.";
    elementoResultado.style.color = "#dc2626";
    return;
  }

 
  if (idadeDigitada >= 18) {
    elementoResultado.innerText = `Você tem ${idadeDigitada} anos e já é maior de idade.`;
    elementoResultado.style.color = "#16a34a";
    console.log(`Verificação aprovada: ${idadeDigitada} anos (Maior de idade)`);
  } else {
    elementoResultado.innerText = `Você tem ${idadeDigitada} anos e ainda é menor de idade.`;
    elementoResultado.style.color = "#d97706";
    console.log(`Verificação informativa: ${idadeDigitada} anos (Menor de idade)`);
  }
}