import nodemailer from "nodemailer";

type EmailOptions = {
  to: string;
  subject: string;
  body: string;
};

export default async function sendEmail({ to, subject, body }: EmailOptions) {
  const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT) || 587,
  secure: process.env.EMAIL_PORT === "465",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to,
    subject,
    html: body,
  });
}
