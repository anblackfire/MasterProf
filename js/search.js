// gatilho no botão para o caso de uma pesquisa      
document.getElementById("btnFilter").addEventListener("click", function () {
    Start();
});

//reset da tag caso selecione perfil novamente
document.getElementById("prof").addEventListener("click", function () {
    document.getElementById('select').options[0].selected = 'Selecione';
    document.getElementById("select").disabled = true;
});
document.getElementById("courses").addEventListener("click", function () {
    document.getElementById("select").disabled = false;
});

// chamar função de construir conteudo pelo menos uma vez
Start();

function Start() {
    //criar primeiros filtros:
    //x = se procura perfil ou curso
    var x = document.getElementsByName("sort");
    // filtro de palavra-chave
    var filter = document.getElementById("filterText").value.toUpperCase();
    // filtro de tag
    var tags = document.getElementById("select").value;
    // limpa tabela e chama a primeira função
    ClearTable();
    FilterSort(x, filter, tags);
}

// autoexplicativo
function ClearTable() {
    //pega a tabela pelo id
    var table = document.getElementById("buildHere");
    // e limpa
    table.innerHTML = ""
}

//filtrar o tipo de busca por perfil ou por aula marcados nos dois radio inputs
function FilterSort(x, filter, tags) {
    //varredura no x
    for (var i = 0; i < x.length; i++) {
        //se achar o radio filtrado passa o valor dele
        if (x[i].checked) {
            x = x[i].value;
            // confere o valor e determina o array correspondente
            if (x == "profile") {
                //atribui a X o array de perfis já filtrado por titulo e chama a proxima função
                x = ManageProfiles.get(tags);
                FilterArray(x, filter);
            }
            else if (x == "course") {
                //atribui a X o array de cursos já filtrado por tags e chama a proxima função
                x = ManageCourses.get(tags);
                FilterArray(x, filter);
            }
        }
    }
}

//Filtrar por palavras-chave e entregar outro array
function FilterArray(x, filter) {
    //varredura no x
    for (let i = 0; i < x.length; i++) {
        const data = x[i];
        //cria o novo array a ser entrege
        var arrayFiltrado = [];

        // hasFilter sera true se encontrar no titulo a palavra-chave procurada
        var hasFilter = data.title.toUpperCase().indexOf(filter) > -1;

        // opção extra para o tipo de filtro, se data tiver ID
        if (data.id) {
            // se data tiver um ID, então é coletado o parametro "owner"
            var login = data.owner;
            // e usado para filtrar novamente o array baseado no que voltou
            var owner = ManageProfiles.get(login);
            // no caso, busca as palavras chave tambem nos  parametros "title" e "location" dos donos daquela aula
            hasFilter |= owner["0"].title.toUpperCase().indexOf(filter) > -1;
            hasFilter |= owner["0"].location.toUpperCase().indexOf(filter) > -1;


        }
        // opção extra para o tipo de filtro, se data tiver Login
        else if (data.login) {
            // se data tiver um Login, então é também conferido se encontra-se no "Location" a palavra-chave procurada 
            hasFilter |= data.location.toUpperCase().indexOf(filter) > -1;
        }
        // .push do conteudo encontrado para o array filtrado a cada sucesso
        if (hasFilter) {
            arrayFiltrado.push(data);
        }

        // chamada a proxima função
        CreateElements(x, arrayFiltrado, owner);

    }
}

// criar elementos necessários para mostrar informações e colocar no site posteriormente
function CreateElements(x, arrayFiltrado, owner) {

    // para cada indice que veio do array determinado pela busca
    for (let i = 0; i < arrayFiltrado.length; i++) {
        // cria o OBJ para guardar informações
        var obj = new LetterOBJ;
        //criar elementos de img e labels
        const element = arrayFiltrado[i];



        Content(x, arrayFiltrado, obj, i, owner);
    }
}

// busca o conteudo de cada elemento do array e manda para o build table
function Content(x, arrayFiltrado, obj, i, owner) {
    // Atribuir o conteudo que interessa baseado no filtro original (perfil ou aula)
    if (arrayFiltrado[i].login) {
        obj.currentID = arrayFiltrado[i].login;
        obj.ownerTitle.className = "lead  text-center titulo";
        obj.IMG.src = "img/" + arrayFiltrado[i].pic;
        obj.ownerTitle.innerHTML = arrayFiltrado[i].title;
        obj.location.innerHTML = arrayFiltrado[i].location;
        obj.descrip.innerHTML = arrayFiltrado[i].descrip;

        BuildTableProfiles(obj);

    }

    else if (arrayFiltrado[i].id) {
        obj.currentID = arrayFiltrado[i].id;
        obj.IMG.src = "img/" + owner["0"].pic;
        obj.courseTitle.innerHTML = arrayFiltrado[i].title;
        obj.ownerTitle.innerHTML = owner["0"].title;
        obj.location.innerHTML = owner["0"].location;
        obj.descrip.innerHTML = arrayFiltrado[i].descrip;
        obj.cost.innerHTML = "R$" + arrayFiltrado[i].cost;

        BuildTableCourses(obj);
    }


}

// construir tabela com img e conteudo recebidos
function BuildTableProfiles(obj) {
    // insere linha
    var here = document.getElementById("buildHere")

    var divRow = document.createElement("div");
    var divImg = document.createElement("div");
    var divTxt = document.createElement("div");
    var divCst = document.createElement("div");

    divRow.className = "row justify-content-md-center align-items-center block link";
    divRow.id = obj.currentID;
    divRow.onclick = function () {
        sessionStorage.IDSender = obj.currentID;
        location.href = "userProfile.html";
    };
    divImg.className = "col-md-auto tdimg";
    divTxt.className = "col-10 col-lg-8";
    divCst.className = "col-sm ";

    obj.DIV2.insertAdjacentElement("afterbegin", obj.IMG);
    divImg.insertAdjacentElement("afterbegin", obj.DIV2);
    divCst.insertAdjacentElement("afterbegin", obj.location);
    divTxt.insertAdjacentElement("afterbegin", obj.descrip);
    divTxt.insertAdjacentElement("afterbegin", document.createElement("br"));
    divTxt.insertAdjacentElement("afterbegin", obj.ownerTitle);
    here.insertAdjacentElement("afterbegin", document.createElement("br"));
    divRow.insertAdjacentElement("afterbegin", divCst);
    divRow.insertAdjacentElement("afterbegin", divTxt);
    divRow.insertAdjacentElement("afterbegin", divImg);

    here.insertAdjacentElement("afterbegin", divRow);

}

// construir tabela com img e conteudo recebidos
function BuildTableCourses(obj) {
    // insere linha
    var here = document.getElementById("buildHere")

    var divRow = document.createElement("div");
    var divImg = document.createElement("div");
    var divTxt = document.createElement("div");
    var divCst = document.createElement("div");

    divRow.className = "row justify-content-md-center align-items-center block link";
    divRow.id = obj.currentID;
    divRow.onclick = function () {
        sessionStorage.courseSender = obj.currentID;
        location.href = "coursesProfile.html";
    };


    divImg.className = "col-md-auto tdimg";
    divTxt.className = "col-10 col-lg-8";
    divCst.className = "col-sm";

    obj.DIV2.insertAdjacentElement("afterbegin", obj.IMG);
    divImg.insertAdjacentElement("afterbegin", obj.DIV2);
    divCst.insertAdjacentElement("afterbegin", obj.location);
    divCst.insertAdjacentElement("afterbegin", document.createElement("br"));
    divCst.insertAdjacentElement("afterbegin", obj.cost);

    divTxt.insertAdjacentElement("afterbegin", obj.descrip);
    divTxt.insertAdjacentElement("afterbegin", document.createElement("br"));

    divTxt.insertAdjacentElement("afterbegin", obj.ownerTitle);
    divTxt.insertAdjacentElement("afterbegin", document.createElement("br"));
    divTxt.insertAdjacentElement("afterbegin", obj.courseTitle);
    here.insertAdjacentElement("afterbegin", document.createElement("br"));

    divRow.insertAdjacentElement("afterbegin", divCst);
    divRow.insertAdjacentElement("afterbegin", divTxt);
    divRow.insertAdjacentElement("afterbegin", divImg);

    here.insertAdjacentElement("afterbegin", divRow);


}

function LetterOBJ(currentID, courseTitle, ownerTitle, location, descrip, cost, IMG, DIV, DIV2) {
    this.currentID = "";
    this.courseTitle = document.createElement("label");
    this.courseTitle.id = "courseTitle";
    this.courseTitle.className = "lead  text-center titulo";
    this.ownerTitle = document.createElement("label");
    this.ownerTitle.id = "ownerTitle";
    this.ownerTitle.className = "lead    text-center";
    this.location = document.createElement("label");
    this.location.id = "location";
    this.location.className = "lead";
    this.descrip = document.createElement("label");
    this.descrip.id = "descrip";
    this.descrip.className = "lead    float-left";
    this.cost = document.createElement("label");
    this.cost.id = "cost";
    this.cost.className = "lead cost";
    this.IMG = document.createElement("IMG");
    this.IMG.className = "rounded-circle";
    this.IMG.id = "IMG";
    this.IMG.width = "124";
    this.IMG.height = "124";
    this.DIV = document.createElement("div");
    this.DIV.className = "diva";
    this.DIV2 = document.createElement("div");
    this.DIV2.className = "diva2";
}