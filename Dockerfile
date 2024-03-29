FROM denoland/deno:latest

WORKDIR /app

COPY . .

EXPOSE 8000

CMD ["run", "--allow-net", "--allow-read", "--allow-env", "main.ts"]