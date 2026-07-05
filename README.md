Componente Visual Interactivo - Toast.js

INSTITUTO TECNOLÓGICO NACIONAL DE MÉXICO
INSTITUTO TECNOLÓGICO DE OAXACA

Ingeniería en Sistemas Computacionales

Programación Web

Componente Visual Reutilizable - Notificaciones tipo Toast

Unidad 2

Alumno: López Herrera Noel

Docente: Adelina Martínez Nieto

Grupo: 7SC

Fecha de entrega: 05 de Julio del 2026

## ¿Qué problema resuelve?

`toast.js` es un componente visual interactivo hecho en JavaScript puro, sin frameworks: notificaciones flotantes que aparecen en una esquina de la pantalla y se ocultan solas después de un tiempo.

Este componente resuelve algo que se repite en casi cualquier sistema con formularios o acciones del usuario: avisar que algo pasó (se guardó, hubo un error, hay un cambio pendiente) sin usar un `alert()` que bloquea toda la pantalla y que el usuario tiene que cerrar a fuerza, y sin que el aviso se quede ahí estorbando para siempre.

El componente se llama con una sola función, `mostrarToast()`, a la que le puedes cambiar el mensaje, el tipo (informativo, éxito o error) y cuánto tiempo debe durar visible — sin tener que tocar el código del componente cada vez que lo usas en un lugar distinto.

## Instalación

Para usar el componente, incluye el CSS en el `<head>` de tu HTML, y el script de `componente.js` antes de tu propio código:

```html
<link rel="stylesheet" href="css/componente.css">
```

```html
<script src="js/componente.js"></script>
<script src="js/tu-script.js"></script>
```

No se necesita ningún `<div>` extra en el HTML — el componente crea su propio contenedor de toasts automáticamente la primera vez que se usa.

## Uso y Ejemplos

### Llamada básica

```javascript
mostrarToast('¡Registro guardado correctamente!');
```

### Con tipo y duración personalizados

```javascript
mostrarToast('No se pudo conectar al servidor', {
    tipo: "error",
    duracion: 5000
});
```

### Varios toasts seguidos

```javascript
mostrarToast("Cargando datos del estudiante", { tipo: "info" });

setTimeout(() => {
    mostrarToast("Calificaciones actualizadas", { tipo: "exito" });
}, 800);
```

Los toasts se apilan automáticamente uno debajo del otro, sin importar cuántos se disparen al mismo tiempo.

## Integración en el proyecto

`index.html` tiene 4 botones que llaman a `mostrarToast()` con mensajes, tipos y duraciones distintas: uno informativo, uno de éxito, uno de error con duración más larga, y uno que dispara 3 toasts seguidos para demostrar que se apilan correctamente.

## Capturas de Pantalla

## Capturas de Pantalla

**Ventana normal**
Vista inicial de la página, sin ningún toast activo todavía.

![Ventana Normal](img/VentanaNormal.png)

**Toast informativo**
Notificación azul que aparece al hacer clic en el botón de aviso informativo.

![Toast informativo](img/ToastInfo.png)

**Toast de éxito**
Notificación verde confirmando que una acción se completó correctamente.

![Toast de éxito](img/ToastExito.png)

**Toast de error**
Notificación roja con mayor duración en pantalla, avisando que algo falló.

![Toast de error](img/ToastError.png)

**Varios toasts apilados**
Tres notificaciones distintas mostrándose al mismo tiempo, una debajo de la otra, sin pisarse entre ellas.

![Varios toasts apilados](img/VariosToasts.png)

## Video Demostrativo

Ver Video: https://youtu.be/SLB9rSER0qg

## Enlace a GitHub Pages

Puedes ver el componente funcionando en vivo en el siguiente enlace:

Ver Repositorio: https://github.com/Sonnx18/Toast.js.git

Ver Página en Vivo - GitHub Pages: https://sonnx18.github.io/Toast.js/