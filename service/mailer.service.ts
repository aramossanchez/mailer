import nodemailer from 'npm:nodemailer@^6.9.7';
import "https://deno.land/std@0.209.0/dotenv/load.ts";

export const transporter = nodemailer.createTransport({
  host: Deno.env.get('MAIL_HOST'),
  port: Deno.env.get('MAIL_PORT'),
  secure: Deno.env.get('MAIL_SECURE'),
  auth: {
    user: Deno.env.get('MAIL_USERNAME'),
    pass: Deno.env.get('MAIL_PASSWORD'),
  },
});