# Lista de Tareas

Este proyecto es una aplicación web creada con **React** que permite a los usuarios agregar y eliminar tareas de una lista. Las tareas se almacenan en el **LocalStorage** para que persistan aunque se recargue la página.

## Características

- Agregar nuevas tareas.
- Validación de longitud mínima y máxima de las tareas (3 a 20 caracteres).
- Almacena las tareas en **LocalStorage**.
- Posibilidad de eliminar tareas de la lista.
- Interfaz creada utilizando **React-Bootstrap**.

## Cómo usar el proyecto

### Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/santinohamada/ListaTareas.git
   ```
2. Entra en el directorio del proyecto:
   ```bash
   cd ListaTareas
   ```
3. Instala las dependencias necesarias:
   ```bash
   npm install
   ```

### Uso

1. Inicia la aplicación:
   ```bash
   npm start
   ```
2. Abre tu navegador y navega a `http://localhost:3000` para ver la aplicación en funcionamiento.

## Estructura del proyecto

- **FormularioTarea.js**: Componente que contiene el formulario para agregar tareas y gestiona el estado de la lista de tareas.
- **ListaTareas.js**: Componente que renderiza la lista de tareas.
- **ItemTarea.js**: Componente individual para cada tarea con la opción de eliminar.

## Tecnologías utilizadas

- **React**
- **React-Bootstrap**
- **React Hook Form**
- **LocalStorage**

## Futuras mejoras

- Añadir la posibilidad de editar tareas.
- Añadir categorías o etiquetas a las tareas.
- Implementar una base de datos para almacenar las tareas de manera persistente.

## Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar o añadir nuevas características, no dudes en enviar un **pull request**.

## Autor

Creado por [santinohamada](https://github.com/santinohamada).
