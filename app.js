// app.js

// 1. SINTAXIS ES6: Uso de 'const' y 'let'
// 2. MANIPULACIÓN DEL DOM: document.getElementById
const inputTexto = document.getElementById('textoInput');
const btnInyectar = document.getElementById('btnInyectar');
const listaElementos = document.getElementById('listaElementos');

// 3. SINTAXIS ES6: Arrow Function (=>) para generar color aleatorio
const generarColorAleatorio = () => {
    // Genera un formato hexadecimal, ej. #ff0055
    let colorHex = Math.floor(Math.random() * 16777215).toString(16);
    return `#${colorHex.padStart(6, '0')}`;
};

// Función flecha principal para inyectar el texto
const manejarInyeccion = () => {
    // Extraer texto del input (eliminando espacios extra con trim)
    const textoIngresado = inputTexto.value.trim();

    if (textoIngresado !== '') {
        // 4. MANIPULACIÓN DEL DOM: document.createElement
        const nuevoLi = document.createElement('li');

        // 5. CIBERSEGURIDAD: Uso EXCLUSIVO de textContent (Previene XSS)
        // JAMÁS usar innerHTML para evitar que scripts maliciosos se ejecuten.
        nuevoLi.textContent = textoIngresado;

        // Asignamos el color de fondo aleatorio generado
        nuevoLi.style.backgroundColor = generarColorAleatorio();

        // 6. MANIPULACIÓN DEL DOM: appendChild
        listaElementos.appendChild(nuevoLi);

        // Limpiar el input una vez agregado
        inputTexto.value = '';
    } else {
        alert('Por favor, ingresa un texto antes de inyectar.');
    }
};

// Asignar el evento click al botón
btnInyectar.addEventListener('click', manejarInyeccion);