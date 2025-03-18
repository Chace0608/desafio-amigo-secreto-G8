let amigos = [];

function agregarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    if(nombreAmigo == ""){
        alert("Por favor, ingrese un nombre válido");
        return;
    }

    if (/[0-9]/.test(nombreAmigo)) { 
        alert("Por favor, ingrese un nombre válido (sin números)");
        return;
    }

    if(amigos.includes(nombreAmigo)){
        alert(`El nombre "${nombreAmigo}" ya está en la lista`);
        return;
    }

    amigos.push(nombreAmigo);

    inputAmigo.value = "";

    actualizarLista();

}


function actualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos');

    listaAmigos.innerHTML = "";

    for(let i = 0; i < amigos.length; i++){
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}


function sortearAmigo() {
    if(amigos.length == 0){
        alert("No hay nombres suficientes para sortear. Agregue al menos uno");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    const amigoSorteado = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo sorteado es: <strong>${amigoSorteado}</strong>`;

}