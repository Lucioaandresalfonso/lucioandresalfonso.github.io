Curriculum Vitae de Lisa Kelley
===============================

Tecnologías Empleadas:
    * HTML
    * CSS
    * Javascript
    * Bootstrap Framework
    * JQuery 

Descripción: Sitio responsivo. Combinación de CV y Portfolio de un Desarrollador Freelance.

Fuentes de datos empleadas: Randomuser.me (para los datos ficticios del curriculum), imagen de jumbotron realizada con la versión gratuita de la plataforma Vyond. Foto de perfil descargada de Steampowered.com

* Estructura del proyecto web: Navbar, jumbotron, About section, Skills, Separador, Porfolio Section, Cards, Formulario de contacto, Footer, Whatsapp Witget.

* Emplee para ello Bootstrap para utilizar las clases predefinidas (navbar, footer, jumbotron, entre otras) y editarlas a gusto.

* Utilicé el navbar de Bootstrap y lo definí sticky top y luego puse los enlaces internos (#)

* Utilicé una imagen PNG que luego converti a formato .ICO para definir el favicon.

* Se emplea Google Fonts: Source Sans Pro (Regular 400) --> https://fonts.google.com/specimen/Source+Sans+Pro
Para ello se copia el enlace que provee Google Fonts y se coloca luego del bootstrap en tal TAG head. A continuación modifico el font-family del body en el archivo bootstrap.css 

* Utilizo un Widget de Whatsapp flotante para agregar funcionalidad para el contacto con este perfil freelance. Al hacer click lleva a un chat en Whatsapp con el número provisto por la web de Randomuser.me.
* Para los íconos de Fontawesome agregué la clase .fa-solid que es la que empleo en esta versión y le definí el color para que aplique a todos los íconos utilizados (cornflowerblue)

* Agregué FontAwesome Icons en las listas desordenadas utilizando el Javascript Embed Code y coloqué el código antes de cerrar el tag Body.
Luego copié una de las rutas .CSS en un archivo nuevo de forma local para poder editar a gusto los colores, forma, tamaño, etc directamente.
Intenté que los íconos elegidos fuesen lo más representativos posibles para la palabra definida en la lista.

* A modo de separador de secciones emplee frases célebres para las cuales definí la clase outstand (destacar) para acentuar la importancia de dicha frase y allí definí que la fuente sea bolder y larger.
 
* Se cambio el color de todo lo que es <Strong> y <b> (cornflowerblue)

* Utlizacion de plugin skills.js, que se muestra en Habilidades Duras, cada una de las palabras flotantes fue editada, se añadió link destino al hacer click y se cambiaron los formatos, familia de fuentes y colores para que sea lo más similar al diseño actual. La idea era presentar movimiento y cierto grado de interactividad. --> https://codepen.io/

* Formulario  de contacto con iframe de Google con la ubicación ficticia. Dirección, Email y Teléfonos ficticios con ícono de Font Awesome.
Los campos del formulario tienen son todos requeridos y aparece un pop-up en caso que faltase alguno debido a la validación de cada campo con js. Adicionalmente el formato del correo se valida con una expresión
regular para corroborar que esté adecuadamente confeccionado y no le falte por ejemplo el @ o el .com. Una vez completado el formulario correctamente, al Enviar mensaje aparece
un pop-up indicando el envío exitoso, aunque no pude implementar que funcione realmente.
Por último modifiqué el alert para que el pop-up sea más atractivo.

* Implementé un footer con la información del proyecto junto con mis datos de contacto.

* se implementó Wow Animate que es un plugin para agregar animaciones a distintos componentes (Fade in, fade up, etc.). --> https://wowjs.uk/

* todas las imágenes utilizadas tienen el atributo "alt"
