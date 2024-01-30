# mailer

## deployado en deno deploy (https://free-eel-61-15q370t55c5c.deno.dev)

## comando para ejecutar en local: deno run -A main.ts

## proyecto dockerizado
-build: docker build -t mailer .
-run: docker run -p 8000:8000 mailer

## Variables de entorno que hay que configurar:
MAIL_HOST=
MAIL_PORT=
MAIL_SECURE=
MAIL_USERNAME=
MAIL_PASSWORD=
MAIL_TO_SEND=
PORT=