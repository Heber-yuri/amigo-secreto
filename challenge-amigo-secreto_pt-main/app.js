let amigos = []; // Certifique-se de que esta variável existe

function adicionarAmigo() {
    let nome = document.querySelector('#amigo').value.trim();

    if (nome !== "" && !amigos.includes(nome)) {
        amigos.push(nome);
        atualizarLista();
        document.querySelector('#amigo').value = ''; // Limpa o input
    } else {
        alert("Digite um nome válido e não repetido.");
    }
}

function atualizarLista() {
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = '';

    amigos.forEach((amigo) => {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearUmAmigo() {
    if (amigos.length === 0) {
        alert("Nenhum amigo na lista para sortear.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    let resultadoElemento = document.querySelector("#resultado");
    resultadoElemento.innerHTML = `<li>🎉 Amigo sorteado: <strong>${amigoSorteado}</strong></li>`;
}

function reiniciarJogo() {
    // Limpa a lista de amigos
    amigos = [];

    // Limpa a exibição da lista de amigos
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML = '';

    // Limpa o resultado do sorteio
    let resultadoElemento = document.querySelector("#resultado");
    resultadoElemento.innerHTML = '';

    // Limpa o campo de entrada de nome
    document.querySelector('#amigo').value = '';

    alert("O jogo foi reiniciado!");
}
