var btnConf = document.querySelector("#btn-conf");
var cx_drop = document.querySelector("#cx_effect_drop");
var cx_effect = document.querySelector("#cx_effect");
var config_usuario = document.querySelector("#config_usuario");

window.onclick = function(e) {
    if(e.target.matches("button#btn-conf") || e.target.matches("button i")) {
        cx_drop.style.display = "block";
    } else {
        cx_drop.style.display = "none";        
    }
}


config_usuario.addEventListener("click", function(){
    console.log("hello word!")
})