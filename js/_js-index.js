var btnEntrar = document.querySelectorAll("#btn_entrar");
for(var a = 0; a < btnEntrar.length;a++ ) {
    btnEntrar[a].addEventListener("click", function() {
        window.location.href = "views/login.html";
    })
}
