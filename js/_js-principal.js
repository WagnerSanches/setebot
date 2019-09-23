var links = document.querySelectorAll(".cx_cont");

for(var a = 0; a < links.length; a++) {

    links[a].addEventListener("click", function() {
        mandar((this.id == "m") ? "material.html" : "exercicios.html");
    })

}

var fundo = document.querySelector("#fundo");
document.querySelector("#config_usuario").addEventListener("click", function() {
    fundo.style.display = "flex";
})

fundo.addEventListener("click", function(e){
    if(e.target == fundo) {
        this.style.display = "none";
    }
})

function mandar(string) {
    window.location.href = string ;
}