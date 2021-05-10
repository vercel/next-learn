---
title: "Como se hizo este Blog"
date: "2021-05-05"
---

**_NEXT.JS_**
"Es una Framework de desarrollo web del front-end esta realizado en _React_."  
Este blog se hizo gracias al uso de **Next.js**, el cual fue realizado mediante la documentación de NextJS. Este blog hace uso de las rutas dinámicas o bien conocida como **Dynamic Routes** estas funcionan de la siguiente manera:
Como bien sabemos _NextJS_ cuenta con una carpeta nombrada como _pages_ esta carpeta permite el _routing_ de la paginas. Cada página que se quiera renderizar debe estar en esta carpeta, como por el ejemplo el archivo index.js se encuentra alojada en ella. Para hacer las publicaciones de este blog se crea un directorio nombrado como _posts_. Esta carpeta cumple la función de almacenar el archivo _[id].js_. Este archivo esta nombrado de esta manera ya se es necesario para crear las _Dynamic Routes_. Esta almacena el **pre-rendiring**, para esta se usó el getStaticProps y el getStaticPaths además del código del _export default function Post_ que retorna lo que se va a visualizar en la página.

Lo que me parece curioso de la documentación es que muestran una forma para colocar la información de los _posts_ debido a que crean una carpeta en el directorio principal nombrada como post, y en el contenido de cada _post_ estos archivos están en un formato .md. En caso tal de no querer usar las rutas dinámicas podríamos crear cada publicación en la carpeta posts de page. Sin embargo, recomiendo usar **Dynamic Routes** por que es una herramienta que funciona bastante bien y facilita la programación.

Para entender NextJS te invito a leer la <a href= https://nextjs.org/docs>documentacion</a> , y buscar a videos referente a este Framework.
