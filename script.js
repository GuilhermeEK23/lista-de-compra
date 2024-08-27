var create = document.getElementById("create");
var product = document.getElementById("product");
var view = document.getElementById("view")

function createList(){
    create.style.display = "flex"
}

//Insere um grupo no select e no Card e mostra a próxima div
function insertGroup(){
    var nameGroup = document.getElementById("nameGroup").value;

    if (nameGroup == ""){
        return alert("Insira um nome para o grupo!");
    } else if(verifyGroupExist(nameGroup)){
        return alert("Já existe um grupo com este nome!");
    }
    
    createGroup(nameGroup);
    product.style.display = "flex";
}

//Verifica se já exite um grupo com o nome passado no parâmetro e retorna apenas true caso exista
function verifyGroupExist(nameGroup){
    select = document.getElementById("groups");
    groups = select.options;

    for (var i=0; i < groups.length; i++){
        if (groups[i].text.toLowerCase() == nameGroup.toLowerCase()){
            return true;
        }
    }
}

//Cria o grupo com o nome passado no parâmetro e adiciona no select
function createGroup(nameGroup){
    group = document.createElement("option");
    group.value = nameGroup.toLowerCase();
    group.text = nameGroup;
    
    select = document.getElementById("groups");
    groups = select.options;

    groups.add(group);

    //Depois de adicionar no select, usamos a função seguinte para adicionar nos Cards
    createGroupCard(nameGroup);
}

//Cria o Card do grupo
function createGroupCard(nameGroup){
    //antes de criar, verifica se o grupo já existe e caso exista só finaliza a função
    if (verifyGroupCardExist(nameGroup)){
        return;
    }

    var newGroup = document.createElement("div");
    newGroup.classList.add("card");
    newGroup.id = nameGroup.toLowerCase();

    var titleGroup = document.createElement("h3");
    titleGroup.textContent = nameGroup;

    var itens = document.createElement("div");
    itens.classList.add("itens");

    newGroup.appendChild(titleGroup);
    newGroup.appendChild(itens);
    view.insertBefore(newGroup, view.querySelector("button"));
}

//Verifica se o grupo já existe no Card
function verifyGroupCardExist(nameGroup){
    if (document.querySelector(`#${nameGroup.toLowerCase()}`)){
        return true;
    }
}

//Insere o produto no grupo selecionado
function insertProduct(){
    nameProduct = document.getElementById("nameProduct").value;
    group = document.getElementById("groups").value;

    if (nameProduct == ""){
        return alert("Insira um nome para o produto!")
    }else if (group == "default"){
        return alert("Escolha um grupo para este produto!")
    }

    addProductToCard(nameProduct, group);
}

//Adiciona o produto ao Card do grupo que ele pertence
function addProductToCard(nameProduct, group){
    var item = document.createElement("span");
    item.textContent = nameProduct;

    itens = (document.querySelector(`#${group} .itens`));
    if (verifyItemExist(nameProduct, itens)){
        return alert("Este produto já existe neste grupo");
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