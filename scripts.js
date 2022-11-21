function ComidaSelecionada(ComidaClick) {
  const comidinha = document.querySelector(".dishs");
  if (comidinha !== null) {
    comidinha.classList.toggle("dishs");
  }

  ComidaClick.classList.toggle("dishs");
  AtivaBotao();
}

function BebidaSelecionada(BebidaClick) {
  const bebidinha = document.querySelector(".drinks");
  if (bebidinha !== null) {
    bebidinha.classList.toggle("drinks");
  }

  BebidaClick.classList.add("drinks");
  AtivaBotao();
}

function SobremesaSelecionada(SobremesaClick) {
  const sobremesinha = document.querySelector(".desserts");
  if (sobremesinha !== null) {
    sobremesinha.classList.toggle("desserts");
  }

  SobremesaClick.classList.toggle("desserts");
  AtivaBotao();
}

function AtivaBotao() {
  const comidinha = document.querySelector(".dishs");
  const bebidinha = document.querySelector(".drinks");
  const sobremesinha = document.querySelector(".desserts");
  const botao = document.querySelector(".Botao-Pedido");
  let i = 0;

  if (comidinha !== null) {
    i += 1;
  }
  if (bebidinha !== null) {
    i += 1;
  }
  if (sobremesinha !== null) {
    i += 1;
  }
  if (i === 3) {
    //troca botão de finalizar pedido
    botao.innerHTML = "Fechar Pedido";
    botao.classList.remove("Botao-Pedido");
    botao.classList.add("Fechar-Pedido");
  }
}

function FinalizaPedido() {

  let nome;
  let endereco;

  while(!nome){
    nome = prompt("Digite seu nome:");
    if(!nome){
      alert("Nome invalido!");
    }
  }

  while(!endereco){
    endereco = prompt("Digite seu endereço:");
    if(!endereco){
      alert("Endereço invalido!");
    }
  }

  let valorComida = document.querySelector(".dishs > .preco > strong")
    .innerHTML;
  let valorBebida = document.querySelector(".drinks > .preco > strong")
    .innerHTML;
  let valorSobremesa = document.querySelector(".desserts > .preco > strong")
    .innerHTML;
  const ComidaSelect = document.querySelector(".dishs > .produto").innerHTML;
  const BebidaSelect = document.querySelector(".drinks > .produto").innerHTML;
  const SobremesaSelect = document.querySelector(".desserts > .produto")
    .innerHTML;

  valorComid = Number(valorComida.replace(",", "."));
  valorBebid = Number(valorBebida.replace(",", "."));
  valorSobremes = Number(valorSobremesa.replace(",", "."));

  let Total = Number(valorComid) + Number(valorBebid) + Number(valorSobremes);
  Total = Total.toFixed(2);
  let MensagemWpp = encodeURIComponent(`Olá, gostaria de fazer o pedido:
  - Prato: ${ComidaSelect}
  - Bebida: ${BebidaSelect}
  - Sobremesa: ${SobremesaSelect}
  Total: ${Total}

  Nome: ${nome}
  Endereço: ${endereco}
  `);

  window.open(`https://wa.me/55000000000?text=${MensagemWpp}`, "_self");
}

/*
criar mensagem
fazer calculos da mensagem
fazer link do wpp
associar ao botão
*/
