# programacion_web_p_2
# Master Bikes

Este proyecto es un sitio web para la tienda de bicicletas "Master Bikes". Utiliza Bootstrap para el diseño y presenta varias secciones como el menú de navegación, registros, 
imágenes destacadas, categorías, reparaciones y arriendos, ademas de jquery para la creacion de formularios, 
y se complementas con javascript para la activacion de eventos en ciertas partes de la pagina y ademas de css para los estilos.

## Introducción

El proyecto "Master Bikes" es una página web que permite a los usuarios explorar y comprar bicicletas, acceder a servicios de reparación 
y arrendar bicicletas. La página utiliza Bootstrap para un diseño responsivo y moderno 
(Hasta el momento solo hay algunas opciones fucionales aparte del index principal las cuales se explicaran mas adelante).

## Instalación

Para utilizar este proyecto, sigue los siguientes pasos:

1. Clona el repositorio:
   git clone https://github.com/tu-usuario/master-bikes.git

2. Navega al directorio del proyecto:
	cd master-bikes

3. Abre el archivo index.html en tu navegador preferido de preferencia VScode con las extensiones instaladas (LIVE SERVER y LIVE PREVIEW).
	Uso
	El sitio web incluye las siguientes secciones funcionales:

*Index Principal (index.html)
- Inicio: Página principal con imágenes destacadas y promociones.
- Banner Principal
	- Bicicletas: Catálogo de bicicletas disponibles. (X)
	- Arriendo: Opciones para arrendar bicicletas. (X)
	- Reparaciones: Servicios de reparación disponibles. (X)
	- Quienes Somos: Información sobre los miembros de la tienda. (Funcional)
	- Contacto: Formulario de contacto. (Funcional)
	- El Tiempo Hoy: Información del clima actual. (Funcional)
	- Inicio de Sesion y Registro : seccion de acceso y formulario de registro de usuario. (Funcional)

4. Estructura del Código
	index.html: Contiene el código principal del sitio web.
	style.css: Archivo de estilos CSS.
	Imagenes/: Directorio que contiene todas las imágenes utilizadas en el sitio.
	formualario.html : mustra el formulario de contacto
	inicio_de_sesion.html : muestra la pagina para hacer el inicio de sesion del usuario
	login.html : formulario de creasion de usuario
	pass_accseo_registro.html : solicita contraseña dada por el admin para comenzar el proceso de creacion de nuevo usuario.
	quienes_somos.html : mustra las fotos y nombres de los participantes.
	selec_inicio_sesion.html : muestra las distintas opciones de inicio de sesion que tendran los colaboradores.
	selec_registro.html : muestra las distintas opciones de registro que tendran los colaboradores.
	style_formulario.css : es la hoja de estilos para el formulario de contacto.
	valida.js : contiene los eventos para el formulario de contacto.
	api_clima.html : es la pagina principal para la opcion de (EL TIEMPO HOY), la cual ademas tiene el enlace de conexion a la api del clima.
	clima.js : contiene los eventos para sincronizar y enlazar la api del clima.
	
5. (Funcionales)
- Inicio de sesion y registro
- Este código HTML implementa una página de registro de cliente para el sitio web MasterBikes. Utiliza Bootstrap para el diseño responsivo y estilos personalizados para 
  una presentación atractiva. El formulario incluye campos para nombre, correo electrónico, RUT, comuna, contraseña, confirmación de contraseña, 
  dirección opcional y número de teléfono. La validación del RUT se realiza mediante una función JavaScript que verifica el dígito verificador y 
  muestra errores en caso de datos incorrectos. Además, se incluyen funciones para mostrar y limpiar mensajes de error en el formulario.

- Quienes Somos
- Este código HTML muestra una seccion extra ubicado en el banner principal de "Master Bikes",se muestra un equipo de miembros con sus imágenes y roles. 
  Los scripts de Bootstrap se cargan para asegurar la funcionalidad de los componentes interactivos como la barra de navegación desplegable.

- Contacto
  Este código HTML define una página web para el "Formulario de Contacto" de Master Bikes, utilizando un estilo personalizado a través de "style_formulario.css" 
  y la biblioteca jQuery para funcionalidades adicionales. El `<head>` incluye las configuraciones básicas, como la codificación de caracteres y la configuración de vista, 
  además del enlace a la hoja de estilos y la inclusión de jQuery. En el `<body>`, se establece una imagen de fondo y un enlace de regreso a la página principal. 
  El contenido principal incluye un logotipo centrado y un formulario con diversos campos de entrada para recopilar información del usuario, como el RUT, nombres, 
  apellidos, fecha de nacimiento, edad, género, email, celular, tipo de bicicleta y motivo de contacto. El formulario también tiene botones para previsualizar la solicitud y enviarla, 
  además de un área de texto para mostrar la previsualización. Se incluye un archivo JavaScript externo "valida.js" para validar y manejar la lógica del formulario.

- El Tiempo Hoy (Enlace a la API)
- Este código HTML hace de enlace y muestra una página web para mostrar el clima actual y el pronóstico del tiempo. La estructura incluye una sección para el clima actual, 
  con detalles como temperatura, sensación térmica, humedad, condición, viento, presión, precipitación, visibilidad, índice UV y un ícono representativo del clima. 
  También hay una sección destinada al pronóstico del clima. Los datos se mostrarán dinámicamente mediante un script externo `clima.js`, 
  y el diseño de la página se estiliza con un archivo CSS externo `clima.css`.




