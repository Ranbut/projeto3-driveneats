function ChosedDish(DishSelected) {
    const dish = document.querySelector(".dishes");
    if (dish !== null) {
      dish.classList.toggle("dishes");
    }
  
    DishSelected.classList.toggle("dishes");
    Update();
  }
  
  function ChosedDrink(DrinkSelected) {
    const drink = document.querySelector(".drinks");
    if (drink !== null) {
      drink.classList.toggle("drinks");
    }
  
    DrinkSelected.classList.add("drinks");
    Update();
  }
  
  function ChosedDessert(DessertSelected) {
    const dessert = document.querySelector(".desserts");
    if (dessert !== null) {
      dessert.classList.toggle("desserts");
    }
  
    DessertSelected.classList.toggle("desserts");
    Update();
  }
  
  function Update() {
    let index = 0;
    const dish = document.querySelector(".dishes");
    const drink = document.querySelector(".drinks");
    const dessert = document.querySelector(".desserts");
    const botao = document.querySelector(".order");
  
    if (dish !== null) {
      index++;
    }
    if (drink !== null) {
      index++;
    }
    if (dessert !== null) {
      index++;
    }
    if (index === 3) {

      botao.innerHTML = "Fechar Pedido";
      botao.classList.remove("order");
      botao.classList.add("finish-button");
    }
  }
  
  function Finish() {
    let index = 0;
    const dish = document.querySelector(".dishes");
    const drink = document.querySelector(".drinks");
    const dessert = document.querySelector(".desserts");
  
    if (dish !== null) {
      index++;
    }
    if (drink !== null) {
      index++;
    }
    if (dessert !== null) {
      index++;
    }

    if (index === 3) {

    const popUp = document.querySelector(".popup-background");
    popUp.classList.toggle("disable");
    }
  }

  function Confirm(){
    const Nome = prompt("Por favor, insira seu nome:");

    if (Nome === "" || Nome === null){
      alert("Nome não inserido, confirmação de pedido cancelado!")
    }
    else{
      const Endereco = prompt("Agora insira seu endereço:");

      if (Endereco === "" || Endereco === null){
        alert("Endereço não inserido, confirmação de pedido cancelado!")
      }
      else{

        let DishValue = document.querySelector(".dishes > .price > strong")
        .innerHTML;
      let DrinkValue = document.querySelector(".drinks > .price > strong")
        .innerHTML;
      let DessertValue = document.querySelector(".desserts > .price > strong")
        .innerHTML;
      const DishSelect = document.querySelector(".dishes > .food").innerHTML;
      const DrinkSelect = document.querySelector(".drinks > .food").innerHTML;
      const DessertSelect = document.querySelector(".desserts > .food")
        .innerHTML;
    
      DishNumber = Number(DishValue.replace(",", "."));
      DrinkNumber = Number(DrinkValue.replace(",", "."));
      DessertNumber = Number(DessertValue.replace(",", "."));
    
      let Total = Number(DishNumber) + Number(DrinkNumber) + Number(DessertNumber);
      Total = Total.toFixed(2);
  
      let MensagemWpp = encodeURIComponent(`Olá, gostaria de fazer o pedido:
    - Prato: ${DishSelect}
    - Bebida: ${DrinkSelect}
    - Sobremesa: ${DessertSelect}
    Total: R$ ${Total}
    
    - Nome: ${Nome}
    - Endereço: ${Endereco}`);
  
    window.open(`https://wa.me/5583993497667?text=${MensagemWpp}`, "_self");
      }
    }
  }

  function Cancel(){
    const popUp = document.querySelector(".popup-background");
    popUp.classList.toggle("disable");
  }
  