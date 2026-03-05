"use server";

import nodemailer from "nodemailer";

export async function sendRecommendation(formData: FormData) {
  const game = formData.get("game") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "New recommendation",
    text:`
      Game: ${game}
      User email: ${email}
      Message: ${message}`,
  });
}