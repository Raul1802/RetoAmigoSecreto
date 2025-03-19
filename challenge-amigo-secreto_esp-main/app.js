// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');
const amigoInput = document.getElementById('amigo');
let amigos = [];

function agregarAmigo() {
  const nombreAmigo = amigoInput.value.trim(); // Elimina espacios en blanco al inicio y final

  if (nombreAmigo !== "") {
    amigos.push(nombreAmigo);
    const nuevoLi = document.createElement('li');
    nuevoLi.textContent = nombreAmigo;
    listaAmigos.appendChild(nuevoLi);
    amigoInput.value = ""; // Limpia el input
  } else {
      alert("Por favor, ingresa un nombre."); // Alerta si el input está vacío
  }
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Debes ingresar al menos dos amigos para el sorteo.");
    return;
  }

  // Algoritmo de Fisher-Yates para barajar el array (más eficiente)
  for (let i = amigos.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [amigos[i], amigos[j]] = [amigos[j], amigos[i]]; // Intercambio de elementos
  }

  resultado.innerHTML = ""; // Limpia resultados anteriores

  for (let i = 0; i < amigos.length; i++) {
    const amigoActual = amigos[i];
    const amigoAsignado = amigos[(i + 1) % amigos.length]; // Circular

    const resultadoLi = document.createElement('li');
    resultadoLi.textContent = `${amigoActual} le regala a ${amigoAsignado}`;
    resultado.appendChild(resultadoLi);
  }
}


// Evento para agregar con Enter
amigoInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { // 13 es el código de la tecla Enter
        agregarAmigo();
    }
});
