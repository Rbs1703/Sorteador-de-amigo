let amigos = [];


function adicionarAmigo() {
    
    let nomeAmigo = document.getElementById("amigo").value;

    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nomeAmigo);

    document.getElementById("amigo").value = "";

    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    
    let listaAmigos = document.getElementById("listaAmigos");

    listaAmigos.innerHTML = "";

    for (let amigo of amigos) {
        let novoItem = document.createElement("li");
        novoItem.textContent = amigo;
        listaAmigos.appendChild(novoItem);
    }
}

function sortearAmigo() {
    
    if (amigos.length === 0) {
        alert("Adicione amigos à lista antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    let amigoSorteado = amigos[indiceAleatorio];

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `O amigo secreto sorteado é: <strong>${amigoSorteado}</strong>`;
}
