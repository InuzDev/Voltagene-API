import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

// We having issues with this. fix ASAP before the end of the week.

@Injectable()
export class MailerService {
  private transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  async sendContactEmail(data: {
    firstName: string
    lastName: string
    email: string
    phone?: string
    subject: string
    message: string
  }) {
    const { firstName, lastName, email, phone, subject, message } = data

    const mailOptions = {
      from: `"${firstName} ${lastName}" <${email}`,
      to: process.env.MAIL_USER,
      subject: `📧 ${subject} - Nuevo mensaje de parte de ${firstName} ${lastName}`,
      html: `
            <p><strong>Nombre:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
            <p><strong>Asunto:</strong> ${subject}</p>
            <p><strong>Mensaje:</strong><br/>${message}</p>
         `
    }

    return this.transporter.sendMail(mailOptions)
  }
}
