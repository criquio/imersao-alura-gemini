function popular(){

    let editora = document.getElementById("editoras").value;
    let lstHerois = document.getElementById('herois');

    while (lstHerois.options.length > 0) {
        lstHerois.remove(0);
    }

    for(let dado of dados[editora]){
        let option = new Option(dado.Nome, dado.Nome);
        lstHerois.add(option);
    }

    busca();

}

function busca(){

    let editora = document.getElementById("editoras").value;
    let heroi = document.getElementById('herois').selectedIndex;
    let desc = "";

    for (const [chave, valor] of Object.entries(dados[editora][heroi])) {
        if(chave != "Nome"){
            desc += `<div class="char-box"><span class="char-chave">${chave}:</span> <span class="char-value">${valor}</span></div>`;
        }
    }

    document.getElementById("nome").innerHTML = dados[editora][heroi].Nome;
    document.getElementById("dados").innerHTML = desc;

    let avatar = dados[editora][heroi].Nome.toLowerCase().replaceAll(" ", "_").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    document.getElementById("dados").style.backgroundImage = "url(../imagens/personagens/" + avatar + ".png)";
    document.getElementById("dados").style.backgroundPosition = "top right";
    document.getElementById("dados").style.backgroundRepeat = "no-repeat";
    document.getElementById("dados").style.backgroundSize = "auto 200px";

}