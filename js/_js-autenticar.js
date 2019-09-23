var logado = document.cookie.split("=")[1];
console.log(logado)
if(logado == undefined) {
	window.location.href="login.html"
}
