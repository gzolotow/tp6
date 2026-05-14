# tp6
# Catstagram 

Proyecto realizado con React + Vite + TypeScript.

## Descripción

Este proyecto consiste en un clon visual de Instagram utilizando imágenes de gatos obtenidas desde The Cat API.

La aplicación permite:

- visualizar publicaciones
- dar likes
- abrir publicaciones en modal
- navegar entre feed y perfil
- mostrar un perfil emulado

## Tecnologías

- React
- TypeScript
- Vite
- Axios
- CSS

## API utilizada

https://thecatapi.com/

## Hooks utilizados

### useState

Utilizado para:

- likes
- publicaciones
- modal
- navegación
- loading

### useEffect

Utilizado para consumir la API cuando carga la aplicación.

## Componentes

### Encabezado

Barra superior para navegación.

### Feed

Contenedor de publicaciones.

### Publicacion

Renderiza cada publicación individual.

### ModalPublicacion

Muestra información ampliada de un post.

### Perfil

Simula el perfil del usuario.

### BarraHistorias

Historias estilo Instagram.

## Cómo ejecutar

```bash
npm install
npm run dev
