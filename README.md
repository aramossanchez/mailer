# MAILER ('enviador' de correos)
Aplicación desarrollada en deno y express, usando nodemailer.
Realiza envíos de correos electrónicos a través de peticiones post a su endpoint.

## Funcionamiento
- Endpoint mailer/carmina
  - get: muestra mensaje indicando ✔️ - ready to ✉️🚀 - ✔️
  - post: hay que mandar una petición con el siguiente formato -> {body: {name: string, email: string, phone: string, text: string}}
  - Manda 2 correos electrónicos: uno al correo indicado en el body y otro al correo indicado en la variables de entorno. Es perfecto para que usuarios que rellenen un formulario sean informados sobre que el mensaje fue recibido, y para que la información que nos quiere transmitir el usuario (sus datos y un texto abierto) llegue a una dirección de correo electrónico de nuestra elección.
  - Ambos correos tienen un diseño html personalizado.

## Comando para ejecutar en local:
- deno run -A main.ts

## Proyecto dockerizado. Comando para ejecutarlo en docker:
- docker-compose up

## Variables de entorno que hay que configurar:
### MAIL_HOST=
### MAIL_PORT=
### MAIL_SECURE=
### MAIL_USERNAME=
### MAIL_PASSWORD=
### MAIL_TO_SEND=
### PORT=