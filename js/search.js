// gatilho       
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


Start();

function Start() {
    var x = document.getElementsByName("sort");
    var filter = document.getElementById("filterText").value.toUpperCase();
    var tags = document.getElementById("select").value;
    // limpa tabela e começa os filtros
    ClearTable();
    FilterSort(x, filter, tags);
}

// autoexplicativo
function ClearTable() {
    var table = document.getElementById("buildHere");
    table.innerHTML = ""
}

function FilterSort(x, filter, tags) {
    //filtrar o tipo de busca por perfil ou por aula marcados nos dois radio
    for (var i = 0; i < x.length; i++) {
        //se achar o radio filtrado passa o valor dele
        if (x[i].checked) {
            x = x[i].value;
            // confere o valor e determina o array correspondente
            if (x == "profile") {
                //procura por perfil 
                x = ManageProfiles.get(tags);
                FilterArray(x, filter);
            }
            else if (x == "course") {
                // procura por aulas 

                x = ManageCourses.get(tags);
                FilterArray(x, filter);
            }
        }
    }
}

//Filtrar por texto e entregar outro array
function FilterArray(x, filter) {
    for (let i = 0; i < x.length; i++) {
        const data = x[i];

        var arrayFiltrado = [];
        var hasFilter = data.title.toUpperCase().indexOf(filter) > -1;
        // console.log(filter);
        // hasFilter sera true se encontrar data.title.toUpperCase().indexOf(filter) > -1;
        // opção extra para o tipo de filtro
        if (data.id) {

            hasFilter |= data.owner.title.toUpperCase().indexOf(filter) > -1;
            hasFilter |= data.owner.location.toUpperCase().indexOf(filter) > -1;


        }
        else if (data.login) {

            hasFilter |= data.location.toUpperCase().indexOf(filter) > -1;
        }
        // .push do conteudo encontrado para o array filtrado
        if (hasFilter) {
            arrayFiltrado.push(data);
        }

        CreateElements(x, arrayFiltrado);

    }
}
// criar elementos necessários para mostrar informações e colocar na tabela posteriormente
function CreateElements(x, arrayFiltrado) {
    // var data;
    // para cada indice que veio do array determinado pela busca
    for (let i = 0; i < arrayFiltrado.length; i++) {
        var obj = new LetterOBJ;
        //criar elementos de img e labels
        const element = arrayFiltrado[i];



        Content(x, arrayFiltrado, obj, i);
    }
}

// busca o conteudo de cada elemento do array e manda para o build table
function Content(x, arrayFiltrado, obj, i) {
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
        obj.IMG.src = "img/" + arrayFiltrado[i].owner.pic;
        obj.courseTitle.innerHTML = arrayFiltrado[i].title;
        obj.ownerTitle.innerHTML = arrayFiltrado[i].owner.title;
        obj.location.innerHTML = arrayFiltrado[i].owner.location;
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
    // document.getElementById(divRow.id).addEventListener("click", function () {
    //     view();
    // });

    // location.href = "userProfile.html";
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
    // document.getElementById(divRow.id).addEventListener("click", function () {
    //     view();
    // });
    divRow.onclick = function () {
        sessionStorage.courseSender = obj.currentID;
        location.href = "coursesProfile.html";
    };

    // location.href = "courseProfile.html";
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
    // divTxt.insertAdjacentElement("afterbegin", document.createElement("br"));
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