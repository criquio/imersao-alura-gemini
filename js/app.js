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

}