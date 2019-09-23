document.querySelector("#erroAutenticar").style.color = "rgb(211, 20, 20)";
var divLoad = document.querySelector("#div_load img");
var btnLogin = document.querySelector("#btn_login");
var input_email = document.querySelector("#email");
var input_senha = document.querySelector("#senha");


var esqueci_senha = document.querySelector("#esqueci_senha");
var tela_password = document.querySelector("#tela_password");
var img_close = document.querySelector("#tela_password form img");
var button_esqueci_pass = document.querySelector("#tela_password form button");
var input_esqueci_pass = document.querySelector("#tela_password form input");
var confirmado = document.querySelector("#confirmacao");
var erro_aut = document.querySelector("#erroAutenticar");

erro_aut.style.display = document.URL.indexOf("erro") > 1 ? "block" : "none";

var frm = document.querySelector("#frm_login");
btnLogin.addEventListener("click", function(e) {
    e.preventDefault();
    var aux = 0;
    validarInput(input_email) ? aux++ : 0;
    validarInput(input_senha) ? aux++ : 0;
    
    if(aux == 2) {
        this.style.display = "none";
        divLoad.style.display = "block";
        setTimeout(redirecionar, 1500);
    }

});

esqueci_senha.addEventListener("click", function(){
    tela_password.style.display = "flex";
});

tela_password.addEventListener("click", function(e) {
    e.target == this ? fechar_tela_password() : null;
})

img_close.addEventListener("click", fechar_tela_password);

button_esqueci_pass.addEventListener("click", function(e) {
    e.preventDefault();
    if(validarInput(input_esqueci_pass)) {
        if(input_esqueci_pass.value.indexOf("@") > 1) {
            if(input_esqueci_pass.value.split("@")[1] != "") {
                console.log(input_esqueci_pass.value.indexOf("@"));
                enviado();
            }
        } else {
            
        }
    }
    input_esqueci_pass.className = "erro"
})



function validarInput(input) {
    if(input.value == "") {
        return input_erro(input);    
    }
    input.className = "";
    return true;
}

function input_erro(input) {
    input.className = "erro";
}

function enviado() {
    confirmado.style.display = "block";
    fechar_tela_password();
    input_esqueci_pass.value = "";
    setTimeout(function() {
        confirmado.style.display = "none";
    }, 3000)
}

function fechar_tela_password() {
    tela_password.style.display = "none";
}
function redirecionar() {
    frm.action = "../AutenticarLogin";
    frm.method = "POST";
    frm.submit();
}
