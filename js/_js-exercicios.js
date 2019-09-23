var opcoes = document.querySelectorAll("#opcoes_exercicios div");
var e_td = document.querySelector("#e_td");
var e_est = document.querySelector("#e_est");

var cx_est = document.querySelector("#cx_exercicios_est");
var cx_td = document.querySelector("#cx_exercicios_tom");

var teste = document.querySelectorAll(".cx_exercicios_class");
for(var a = 0; a < opcoes.length; a++) {
    opcoes[a].addEventListener("click", function(a) {

        if(this.id == "e_est") {
            selecionar_exercicio(this, e_td)
            mostrar_exercicios(cx_est, cx_td);


        } else {
            selecionar_exercicio(this, e_est);

            mostrar_exercicios(cx_td, cx_est);

            
        }   

    }) 
}


function selecionar_exercicio(opcao, tirarClasse) {
    if(opcao.className != "opcoes_exercicios_ativada") {
        opcao.className = "opcoes_exercicios_ativada"    
        tirarClasse.className = "";
    }
}

function mostrar_exercicios(mostrar, esconder) {
    if(mostrar.className == "cx_exercicios_class") {
        mostrar.className = "cx_exercicios_class_aparecer";
    }
    if(esconder.className == "cx_exercicios_class_aparecer") {
        esconder.className = "cx_exercicios_class";
    }
}
window.onload = mostrar_exercicios(cx_est, cx_td); 
