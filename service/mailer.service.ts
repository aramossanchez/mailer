import nodemailer from 'npm:nodemailer@^6.9.7';

export const transporter = nodemailer.createTransport({
  host: Deno.env.MAIL_HOST,
  port: Deno.env.MAIL_PORT,
  secure: Deno.env.MAIL_SECURE,
  auth: {
    user: Deno.env.MAIL_USERNAME,
    pass: Deno.env.MAIL_PASSWORD,
  },
});