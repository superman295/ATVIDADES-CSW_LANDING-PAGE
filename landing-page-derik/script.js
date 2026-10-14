// Pequenos recursos de JavaScript da landing page

// Formulário de contato: mostra confirmação sem enviar dados
var form = document.getElementById("form-contato");
if (form) {
  form.addEventListener("submit", function (evento) {
    evento.preventDefault();
    var nome = document.getElementById("nome").value.trim().split(" ")[0];
    var msg = document.getElementById("mensagem-ok");
    msg.textContent = "Obrigado, " + nome + "! Seu pedido foi registrado e você receberá a proposta no horário escolhido.";
    msg.classList.add("visivel");
    msg.scrollIntoView({ behavior: "smooth", block: "center" });
    form.reset();
    atualizarOrcamento();
  });
  form.addEventListener("reset", function () {
    document.getElementById("mensagem-ok").classList.remove("visivel");
    setTimeout(atualizarOrcamento, 0);
  });
}

// Mostra o valor escolhido no campo de orçamento
function atualizarOrcamento() {
  var campo = document.getElementById("orcamento");
  var saida = document.getElementById("saida-orcamento");
  if (campo && saida) {
    saida.textContent = "R$ " + Number(campo.value).toLocaleString("pt-BR");
  }
}
var orc = document.getElementById("orcamento");
if (orc) { orc.addEventListener("input", atualizarOrcamento); }

// Botão de imprimir o currículo
var botaoImprimir = document.getElementById("btn-imprimir");
if (botaoImprimir) {
  botaoImprimir.addEventListener("click", function () { window.print(); });
}
