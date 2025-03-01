// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];

function agregarAmigo() {
    
    const nombreInput = document.getElementById('amigo');  // Obtenemos el campo de texto por su ID
    const nombre = nombreInput.value.trim();  // Capturamos el valor y eliminamos los espacios extra

    
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');  // Si está vacío, mostramos un mensaje de error
        return;  // Detenemos la ejecución de la función
    }

    //Actualizamos el array de amigos con el nuevo nombre
    amigos.push(nombre);  // Agregamos el nombre al arreglo

    //Limpiamos el campo de entrada
    nombreInput.value = '';  // Restablecemos el valor del campo a una cadena vacía

    // Actualizamos la lista visible en el HTML
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';  // Limpiamos la lista antes de mostrarla nuevamente

    // Mostramos todos los amigos en la lista
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');  // Creamos un nuevo elemento <li>
        li.textContent = amigos[i];  // Asignamos el nombre de amigo al contenido del <li>
        lista.appendChild(li);  // Agregamos el <li> a la lista HTML
}
}

function sortearAmigo() {
    
    if (amigos.length === 0) {
        alert('No hay amigos para sortear. Agrega al menos un amigo primero.');
        return;  // Salimos de la función si el arreglo está vacío
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length); 
    const amigoSorteado = amigos[indiceAleatorio];  

    const resultado = document.getElementById('resultado');  // Obtenemos el elemento donde se mostrará el resultado
    resultado.innerHTML = `El amigo secreto sorteado es: <strong>${amigoSorteado}</strong>`;  // Mostramos el nombre sorteado
}
