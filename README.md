# Parcial1_Daniel_Garcia
La aplicacion por defecto se abre en el localhost:3000.
Este proyecto utiliza varios componentes y tecnologías de React y otras bibliotecas. Aquí están los principales:

React: Utilizado como la biblioteca principal para construir la interfaz de usuario.
React Router: Utilizado para la navegación y la gestión de rutas en la aplicación.
react-i18next: Utilizado para la internacionalización y traducción de etiquetas y mensajes estáticos en la aplicación.
Bootstrap: Utilizado para estilos y diseño de componentes.

Este proyecto se desarrolló siguiendo los siguientes pasos:
Diseño de la Interfaz de Usuario: Se diseñaron las vistas de login y home de la aplicación de acuerdo con los requisitos del parcial.
Configuración del Enrutamiento: Se utilizó React Router para configurar las rutas de la aplicación y la navegación entre las vistas.
Implementación del Componente Login: Se creó el componente de login que maneja la autenticación del usuario y realiza validaciones de datos.
Implementación del Componente Home: Se creó el componente de home que muestra la lista de partes disponibles y permite navegar a los detalles de cada parte.
Implementación del Componente DetailPart: Se creó el componente de detalle de cada parte que muestra información detallada sobre una parte específica.
Internacionalización: Se implementó la internacionalización de las etiquetas y mensajes estáticos utilizando react-i18next.
Documentación: Se creó este archivo README para proporcionar instrucciones de ejecución y un resumen del proyecto.
Publicación: El proyecto se puede implementar en un servidor web real después de realizar pruebas adicionales y configurar la construcción de producción.

Para comenzar la aplicación es necesario entrar a la carpeta parcial1 que se encuentra dentro de la otra carpeta Parcial1_Daniel_Garcia, en ese punto se utiliza el comando npm start y arranca la aplicación. 
En primer lugar se podra observar el login, donde es necesario meter un email valido y una clave mayor a 6 carácteres, si eso no se realiza de manera correcta la aplicación no cambia de Página. Posteriormente,
se encuentra la página Home, en donde se ven pequeños datos de los carros y sus respectivas imagenes, se puede dar click a cualquier parte del carro o a cualquier imagen, y la aplicación dirigirá al usuario al
detalle especifico de cada parte.
