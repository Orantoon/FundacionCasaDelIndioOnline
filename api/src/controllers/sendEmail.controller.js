import { config } from 'dotenv';
import nodemailer from 'nodemailer';

config();

const transporter = nodemailer.createTransport({
    host: 'smtp-mail.outlook.com',
    port: 587,
    secure: false,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});


export const sendEmail = async (req, res) => {
  const { email, newPassword } = req.body;

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    subject: 'Fundacion Casa del Indio contraseña',
    text: `Tu nueva contraseña es: ${newPassword}`
  };

  console.log('Enviando correo electrónico:', mailOptions); 

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Correo enviado exitosamente:', info);
    res.status(200).send('Correo enviado: ' + info.response);
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).send(error.toString());
  }
};
