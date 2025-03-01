// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];  // Arreglo que almacenará los nombres de los amigos

function agregarAmigo() {
    // Paso 1: Capturamos el valor del campo de entrada
    const nombreInput = document.getElementById('amigo');  // Obtenemos el campo de texto por su ID
    const nombre = nombreInput.value.trim();  // Capturamos el valor y eliminamos los espacios extra

    // Paso 2: Validamos si el campo de entrada está vacío
    if (nombre === '') {
        alert('Por favor, inserte un nombre.');  // Si está vacío, mostramos un mensaje de error
        return;  // Detenemos la ejecución de la función
    }

    // Paso 3: Actualizamos el array de amigos con el nuevo nombre
    amigos.push(nombre);  // Agregamos el nombre al arreglo

    // Paso 4: Limpiamos el campo de entrada
    nombreInput.value = '';  // Restablecemos el valor del campo a una cadena vacía

    // Actualizamos la lista visible en el HTML
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';  // Limpiamos la lista antes de mostrarla nuevamente

    // Mostramos todos los amigos en la lista
    amigos.forEach(amigo => {
        const li = document.createElement('li');  // Creamos un nuevo elemento de lista
        li.textContent = amigo;  // Establecemos el nombre como contenido del elemento
        lista.appendChild(li);  // Añadimos el nuevo elemento a la lista
    });
}
