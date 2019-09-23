// function readFile(url) {  
//     jQuery.get(url, function(txt) {
//         document.querySelector("#tela").innerHTML = txt;
//     })
// }

// function createUrl(num) {
//     var url = "../material/text" + num + ".txt";
//     console.log(url);
//     readFile(url);
// }

// for(var a = 0; a < lis.length; a++) {
//     lis[a].addEventListener("click", function () {
//         createUrl(this.id)
//     })
// }


// window.onload = readFile("../material/text1.txt");

var opcoes_material = document.querySelectorAll("#first_opcoes");
var m_est = document.getElementById("m_est");
var m_td = document.getElementById("m_td");

for(var a = 0; a < opcoes_material.length; a++) {
    opcoes_material[a].addEventListener("click", function(a) {
        if(this.value == 0) {
            // TERNARIO VERIFICANDO SE A OPCAO TA ABERTA OU NAO
            (m_est.style.display != "block") ? 
                abrir_subOpcoes(m_est, this.children[0], m_td, 1) :
                fechar_subOpcoes(m_est,  this.children[0]);
        } else {

            (m_td.style.display != "block") ? 
                abrir_subOpcoes(m_td, this.children[0], m_est, 0) :
                fechar_subOpcoes(m_td,  this.children[0]);
        }
    })
}

function abrir_subOpcoes(subOpcao, seta, subOpcaoFechar, value) {

    // FECHA A OUTRA SUBOPCAO
    if(subOpcaoFechar.style.display == "block") {
        opcoes_material[value].children[0].style.transform = "rotate(0deg)"; // <-- CODIGO DA IMG SETA
        subOpcaoFechar.style.display = "none";
    }

    subOpcao.style.display = "block";
    seta.style.transform = "rotate(90deg)";

}

function fechar_subOpcoes(subOpcao, seta) {
    subOpcao.style.display = "none";
    seta.style.transform = "rotate(0deg)";
}
