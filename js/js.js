
// criar variaveis importantes se elas não existirem ainda
if (!sessionStorage.userLogged) {
    sessionStorage.setItem("userLogged", "");
}
if (!sessionStorage.IDSender) {
    sessionStorage.setItem("IDSender", "");
}
if (!sessionStorage.courseSender) {
    sessionStorage.setItem("courseSender", "");
}

// cria navbar de acordo com o que é para ser mostrado.
// francamente, a cara do professor quando viu isso me diz que não foi uma boa solução ou foi, no mínimo, uma coisa esquisita
function agr() {
    var nav = document.getElementById("navbar");
    NEnavBar = document.createElement("a");
    NEnavBar.className = "navbar-brand";
    NEnavBar.innerHTML = "MasterProf";
    NEnavBar.href = "index.html";
    nav.insertAdjacentElement("afterbegin", NEnavBar);
    var NEnavBar = document.createElement("i");
    NEnavBar.className = "material-icons";
    NEnavBar.innerHTML = "school";
    nav.insertAdjacentElement("afterbegin", NEnavBar);

    nav = document.getElementById("navbarUL");
    NEnavBar = document.createElement("li");
    NEnavBar.id = "item01";
    NEnavBar.className = "nav-item";
    nav.insertAdjacentElement("Beforeend", NEnavBar);
    nav = document.getElementById("item01");
    NEnavBar = document.createElement("a");
    NEnavBar.className = "nav-link";
    NEnavBar.innerHTML = "Buscar Aulas";
    NEnavBar.href = "innerSearch.html";
    nav.insertAdjacentElement("afterbegin", NEnavBar);
    // ele cria coisas diferentes de umusuário estiver logado
    if (sessionStorage.userLogged) {
        nav = document.getElementById("navbarUL");
        NEnavBar = document.createElement("li");
        NEnavBar.id = "item04";
        NEnavBar.className = "nav-item";
        nav.insertAdjacentElement("Beforeend", NEnavBar);
        nav = document.getElementById("item04");
        NEnavBar = document.createElement("a");
        NEnavBar.onclick = function () {
            sessionStorage.IDSender = "";
        }
        NEnavBar.className = "nav-link";
        NEnavBar.innerHTML = "Perfil";
        NEnavBar.href = "userProfile.html";
        nav.insertAdjacentElement("afterbegin", NEnavBar);

        nav = document.getElementById("navbarUL");
        NEnavBar = document.createElement("li");
        NEnavBar.id = "item05";
        NEnavBar.className = "nav-item";
        nav.insertAdjacentElement("Beforeend", NEnavBar);
        nav = document.getElementById("item05");
        NEnavBar = document.createElement("a");
        NEnavBar.className = "nav-link";
        NEnavBar.innerHTML = "Cadastrar Aula";
        NEnavBar.href = "createCourse.html";
        nav.insertAdjacentElement("afterbegin", NEnavBar);

        nav = document.getElementById("navbarUL");
        NEnavBar = document.createElement("li");
        NEnavBar.id = "item07";
        NEnavBar.className = "nav-item";
        nav.insertAdjacentElement("Beforeend", NEnavBar);
        nav = document.getElementById("item07");
        NEnavBar = document.createElement("a");
        NEnavBar.className = "nav-link";
        NEnavBar.innerHTML = "Aulas Contratadas";
        NEnavBar.href = "contracted.html";
        nav.insertAdjacentElement("afterbegin", NEnavBar);

        nav = document.getElementById("navbarUL");
        NEnavBar = document.createElement("li");
        NEnavBar.id = "item06";
        NEnavBar.className = "nav-item";
        nav.insertAdjacentElement("Beforeend", NEnavBar);
        nav = document.getElementById("item06");
        NEnavBar = document.createElement("a");
        NEnavBar.onclick = function () {
            sessionStorage.setItem("userLogged", "");
        }
        NEnavBar.className = "nav-link";
        NEnavBar.innerHTML = "Sair";
        NEnavBar.href = "login.html";
        nav.insertAdjacentElement("afterbegin", NEnavBar);
    }
    else {
        nav = document.getElementById("navbarUL");
        NEnavBar = document.createElement("li");
        NEnavBar.id = "item02";
        NEnavBar.className = "nav-item";
        nav.insertAdjacentElement("Beforeend", NEnavBar);
        nav = document.getElementById("item02");
        NEnavBar = document.createElement("a");
        NEnavBar.className = "nav-link";
        NEnavBar.innerHTML = "Login";
        NEnavBar.href = "login.html";
        nav.insertAdjacentElement("afterbegin", NEnavBar);

        nav = document.getElementById("navbarUL");
        NEnavBar = document.createElement("li");
        NEnavBar.id = "item03";
        NEnavBar.className = "nav-item";
        nav.insertAdjacentElement("Beforeend", NEnavBar);
        nav = document.getElementById("item03");
        NEnavBar = document.createElement("a");
        NEnavBar.className = "nav-link";
        NEnavBar.innerHTML = "Cadastro";
        NEnavBar.href = "signup.html";
        nav.insertAdjacentElement("Beforeend", NEnavBar);


    }

}



// declaracao de variaveis e objetos
var courses = [];
var users = [];


// dois objetos que servem para o perfil de usuário e de aula :D
function Profile(title, descrip, mail, pic, login, pass, location) {
       this.title = title;
    this.descrip = descrip;
    this.mail = mail;
    this.pic = pic;
    this.login = login;
    this.pass = pass;
    this.location = location;
}
function Course(id, owner, title, descrip, cost, tag, dias, horas, contract) {
    this.id = id;
    this.owner = owner;
    this.title = title;
    this.descrip = descrip;
    this.cost = cost;
    this.tag = tag;
    this.dias = dias;
    this.horas = horas;
    this.contract = contract;
    
}