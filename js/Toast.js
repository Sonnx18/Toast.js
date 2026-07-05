function mostrarToast(mensaje, opciones = {}) { //Recibe el mensaje y un objeto con conf extra con un objeto vacio para que no de error
    // Valores por defecto si no se especifican
    const tipo = opciones.tipo ?? "info";//Si no se define el tipo de msg aparecería el msg info
    const duracion = opciones.duracion ?? 3000;//Si no se define duración se pone la duración 3000

    //Con esto se busca si en nuestro html ya existe el div "toast-contenedor"
    let contenedor = document.getElementById("toast-contenedor");

    // Si es la primera vez que se llama la funció entonces el contenedor 
    // no existe todavía. Por eso lo creamos una sola vez
    if (!contenedor) {
        contenedor = document.createElement("div");//Aquí se crea
        contenedor.id = "toast-contenedor";
        contenedor.classList.add("toast-contenedor");
        // Lo agregamos al final del <body>, para que quede encima de todo lo demás
        document.body.appendChild(contenedor);
    }

    // Creamos el elemento visual del toast
    const toast = document.createElement("div");
    // La clase "toast" trae el estilo base, y "toast-<tipo>" el color según el tipo (info/exito/error)
    toast.classList.add("toast", `toast-${tipo}`);
    toast.textContent = mensaje;//Se le da el mensaje asignado

    // Lo insertamos dentro del contenedor (si ya hay otros toasts, este se apila junto a ellos)
    contenedor.appendChild(toast);

    //El navegador necesita "pintar" el elemento sin la clase "mostrar" primero, y hasta el siguiente frame agregársela.
    requestAnimationFrame(() => {
        toast.classList.add("mostrar");
    });

    // Después de "duracion" milisegundos, ocultamos el toast con una animación de salida
    setTimeout(() => {
        toast.classList.remove("mostrar");

        // Esperamos a que termine la animación de salida (300ms, que la definimos en el CSS)
        // antes de eliminar el elemento del DOM por completo
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, duracion);
}

function dispararVariosToasts() {
    // Cada llamada crea un toast independiente, con su propio tipo y duración
    mostrarToast("Cargando datos del estudiante...", { tipo: "info", duracion: 4000 });

    // setTimeout aquí es solo para simular que los mensajes van llegando poco a poco
    setTimeout(() => {
        mostrarToast("Calificaciones actualizadas", { tipo: "exito" });
    }, 800);

    setTimeout(() => {
        mostrarToast("Un archivo no se pudo subir", { tipo: "error", duracion: 5000 });
    }, 1600);
}