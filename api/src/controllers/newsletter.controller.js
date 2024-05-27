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


export const newsletter = async (req, res) => {
    const { email, post } = req.body;

    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: `FCIO Publicación: ${post.name}`,
        text: `Se acaba de hacer una nueva publicación en la Casa del Indio, no te lo pierdas!
        
        ${post.name}
        ${post.text}`
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
