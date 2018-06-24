

if (!sessionStorage.userLogged) {
    sessionStorage.setItem("userLogged", "");
}
if (!sessionStorage.IDSender) {
    sessionStorage.setItem("IDSender", "");
}
if (!sessionStorage.courseSender) {
    sessionStorage.setItem("courseSender", "");
}


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
var userLogged = "";
function Profile(title, descrip, mail, pic, login, pass, location) {
    // this.id = id;
    // this.name = document.getElementById("userName").value;
    // this.descrip = document.getElementById("userDescrip").value;
    // this.mail = document.getElementById("userMail").value;
    // this.pic = "pic";
    // this.login = document.getElementById("userLogin").value;
    // this.pass = document.getElementById("userPass").value;
    // this.id = id;
    this.title = title;
    this.descrip = descrip;
    this.mail = mail;
    this.pic = pic;
    this.login = login;
    this.pass = pass;
    this.location = location;
}
function Course(id, owner, title, descrip, cost, tag, dias, horas) {
    this.id = id;
    this.owner = owner;
    this.title = title;
    this.descrip = descrip;
    this.cost = cost;
    this.tag = tag;
    this.dias = dias;
    this.horas = horas;
    // this.time = time;
}
arrayTeste1 = [1, 2, 0, 1, 0, 0, 1];
arrayTeste2 = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1];


users[0] = new Profile("Lula Molusco", "Não dou aula para o Bob Esponja e o Patrick", "tentacuos@mail.com", "LM.jpg", "tentaculos", "1234", "Fenda do Bikini");
users[1] = new Profile("Pasquale", "Jamais trema na linguiça", "portuga@mail.com", "PASQ.jpg", "Pasquale", "1234", "Sampa");
users[2] = new Profile("aluno", "HerpDerp HurDUr", "mail@mail.com", "HERP.jpg", "aluno1", "1234", "Curitiba");
users[3] = new Profile("Dr. Rey", "Viva Bwrasil", "emagreça@mail.com", "REY.jpg", "emagreça", "1234", "Holywood");
// courses[0] = new Course("6666", users[0], "Aulas de Clarinete", "Aula completa de clarinete", "10", "musica", arrayTeste1, arrayTeste2)
// courses[1] = new Course("7777", users[1], "Aulas de Português", "Lorem ipsum dolor sit amet, sagittis risus et eu. Euismod suspendisse ipsum tellus integer, ut ac posuere at libero leo faucibus, suscipit id sit arcu, pede turpis lacus, diam vulputate at tortor. Vestibulum praesent urna molestie augue et, proin sociis. Sed a in ac arcu quam, praesent a massa bibendum nec bibendum ridiculus, dolore aenean sem ante justo est, wisi et nulla sit nec, justo libero porta massa sapien ut magna. Nisl dui dapibus sagittis vivamus quis magna, neque vel massa wisi sed pede sed, vehicula ut duis urna odio commodo magna, condimentum magnis vel vel. Non ut libero mauris elit, donec in in et, gravida mauris ante taciti a massa nam, molestie adipiscing praesent vulputate molestie nulla. Suspendisse vehicula elementum, magna nec malesuada sem a viverra ipsum. Vitae sed non parturient. Sed pellentesque wisi eum mi, nulla erat arcu rutrum erat a tincidunt. Pellentesque mi sapien est mauris urna donec. ", "20", "idioma", arrayTeste1, arrayTeste2)
// courses[2] = new Course("8888", users[0], "Aulas de Ciclismo", "descrição completa 3 ", "10", "esportes", arrayTeste1, arrayTeste2)
// courses[3] = new Course("9999", users[3], "Aulas de Inglês", "descrição completa 4 ", "10", "idioma", arrayTeste1, arrayTeste2)
// ManageCourses.add(new Course("6666", users[0], "Aulas de Clarinete", "Aula completa de clarinete", "10", "musica", arrayTeste1, arrayTeste2));
// ManageCourses.add(new Course("7777", users[1], "Aulas de Português", "Lorem ipsum dolor sit amet, sagittis risus et eu. Euismod suspendisse ipsum tellus integer, ut ac posuere at libero leo. ", "20", "idioma", arrayTeste1, arrayTeste2));
// ManageCourses.add(new Course("8888", users[0], "Aulas de Ciclismo", "descrição completa 3 ", "10", "esportes", arrayTeste1, arrayTeste2));
// ManageCourses.add(new Course("9999", users[3], "Aulas de Inglês", "descrição completa 4 ", "10", "idioma", arrayTeste1, arrayTeste2));
// outras funçoes 
