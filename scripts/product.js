document.querySelector("div #product button").addEventListener("click", insertProduct);

//Insere o produto no grupo selecionado
function insertProduct(){
    const nameProduct = document.getElementById("nameProduct").value;
    const group = document.getElementById("groups").value;

    if (nameProduct == ""){
        return showAlert("Insira um nome para o produto!")
    }else if (group == "default"){
        return showAlert("Escolha um grupo para este produto!")
    }

    addProductToCard(nameProduct, group);
}

//Adiciona o produto ao Card do grupo que ele pertence
function addProductToCard(nameProduct, group){
    var item = createElement("span", {}, nameProduct);

    itens = (document.querySelector(`#${group} .itens`));
    if (verifyItemExist(nameProduct, itens)){
        return showAlert("Este produto já existe neste grupo");
    }
    itens.appendChild(item);
    view.style.display = "flex"
}

//Verifica se o item já existe no grupo e retorna apenas true caso exista
function verifyItemExist(nameProduct, itens){
    products = itens.querySelectorAll("span");

    for (var i = 0; products.length > i; i++){
        if (products[i].textContent == nameProduct){
            return true
        }
    }
    return false
}