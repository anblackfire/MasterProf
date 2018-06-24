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
                FilterTag(x, filter);
            }
            else if (x == "course") {
                // procura por aulas 
                              
                x = ManageCourses.get(tags);
                FilterTag(x, filter);
            }
        }
    }
}

