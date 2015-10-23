function nextPage(pagina) {
    window.location.assign(pagina)
}

function criarLink(pagina)
{
	document.getElementById("link").innerHTML = "<a href="+pagina+">Proxima Pagina</a>";
    document.getElementById("btnPg2").style.visibility='hidden'; // hide
}
