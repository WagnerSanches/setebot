var excluir = document.querySelectorAll("#excluir");
var fundo = document.querySelector("#fundo");

for(var a =0; a < excluir.length; a++) {
	excluir[a].addEventListener("click", function() {
	    fundo.style.display = "flex";
	    var linha = this.parentElement.parentElement;
	    var id = linha.children[0].textContent;
	    var nome = linha.children[1].textContent;
	    var email = linha.children[2].textContent;

	    document.querySelector("#id").value = id;
	    document.querySelector("#nome").value = nome;
	    document.querySelector("#email").value = email;
	})
}

fundo.addEventListener("click", function(e) {
    if(e.target == this) {
        this.style.display = "none"
    }
})