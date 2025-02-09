//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
    let amigos = [];

    function adicionarAmigo() {
        let nome = document.querySelector('input').value;

        if (nome !== "" && !amigos.includes(nome)) {
            amigos.push(nome);
            nome = document.querySelector('input');
            nome.value = '';
    
        } else {
            alert("Digite um nome válido e não repetido.");
        }
    }
