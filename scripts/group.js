const product = document.getElementById("product");
const view = document.getElementById("view")

//Insere um grupo no select e no Card e mostra a próxima div
function insertGroup(){
    const nameGroup = document.getElementById("nameGroup").value;

    if (nameGroup == ""){
        return showAlert("Insira um nome para o grupo!");
    } else if(verifyGroupExist(nameGroup)){
        return showAlert("Já existe um grupo com este nome!");
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
    group = createElement("option", {value: nameGroup.toLowerCase(), text: nameGroup})
    
    const select = document.getElementById("groups");
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

    var newGroup = createElement(
        "div", 
        {className: "card", id: nameGroup.toLowerCase()},
        createElement("h3", {}, nameGroup),
        createElement("div", {className: "itens"})
    )

    view.insertBefore(newGroup, view.querySelector("button"));
}

//Verifica se o grupo já existe no Card
function verifyGroupCardExist(nameGroup){
    if (document.querySelector(`#${nameGroup.toLowerCase()}`)){
        return true;
    }
}