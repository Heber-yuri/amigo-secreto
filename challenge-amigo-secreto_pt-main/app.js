let amigos = []; // Array para armazenar os amigos

function adicionarAmigo() {
    let input = document.querySelector('input'); // Seleciona o campo de entrada
    let nome = input.value.trim(); // Remove espaços extras

    if (nome !== "" && !amigos.includes(nome)) {
        amigos.push(nome); // Adiciona ao array
        atualizarLista();  // Chama a função para exibir os nomes
        input.value = '';  // Limpa o campo de entrada
    } else {
        alert("Digite um nome válido e não repetido.");
    }
}

function atualizarLista() {
    let lista = document.querySelector('ul'); // Seleciona a lista <ul>
    lista.innerHTML = ''; // Limpa a lista antes de atualizar

    amigos.forEach((nome) => {
        let item = document.createElement('li'); // Cria um novo <li>
        item.textContent = nome; // Define o texto como o nome do amigo
        lista.appendChild(item); // Adiciona o <li> dentro da <ul>
    });
}