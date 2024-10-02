# Juego de Memoria en React

Este proyecto es un juego de memoria implementado en React, donde los jugadores deben emparejar cuadros idénticos dentro de un conjunto de imágenes desordenadas.

## Descripción

El juego utiliza el algoritmo de Fisher-Yates para desordenar las imágenes y permite al usuario hacer clic en los cuadros para descubrir imágenes. El objetivo es encontrar todas las parejas de imágenes correctas en el menor número de intentos posibles.

### Características

- Uso del hook `useState` y `useEffect` para el manejo de estado y efectos colaterales.
- Algoritmo de desordenamiento de Fisher-Yates.
- Contador de intentos y aciertos con porcentaje de éxito.
- Funcionalidad para reiniciar el juego al finalizar.

## Instalación

1. Clona el repositorio:
   git clone https://github.com/tu_usuario/juego-de-memoria.git
   cd juego-de-memoria
   npm install
   npm run dev

## Archivos importantes

- App.js: Contiene la lógica principal del juego.
- App.css: Define los estilos del juego.
- data/datos.js: Contiene los datos de las imágenes utilizadas en el juego.

## Cómo jugar

- Haz clic en dos cuadros para descubrir las imágenes que esconden.
- Si las imágenes coinciden, se mantendrán visibles. Si no coinciden, se cubrirán nuevamente después de un breve retraso.
  El objetivo es encontrar todas las parejas con el menor número de intentos.
  Reiniciar el juego
  Al completar todas las parejas, aparecerá un mensaje informando que el juego ha terminado. Puedes reiniciarlo haciendo clic en el botón de reinicio.

## Créditos

Este juego fue desarrollado utilizando React y fue inspirado en el clásico juego de memoria.

## Licencia

Este proyecto está bajo la licencia MIT.
