import rateLimit from 'express-rate-limit';
import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import emailjs from 'emailjs-com';

const limiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 1, // 1 envoi autorisé par fenêtre de temps
  message: 'Too many requests from this IP, please try again later.',
});

const contactHandler: NextApiHandler = (req: NextApiRequest, res: NextApiResponse) => {
  limiter(req, res, async () => {
    try {
      const { email, content } = req.body;

      // Validation des données
      if (!email || !content) {
        return res.status(400).json({ error: 'Please provide both email and content.' });
      }

      // Envoi de l'e-mail avec emailjs
      const response = await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          to_email: 'your-email@example.com',
          from_email: email,
          message: content,
        },
        'YOUR_USER_ID'
      );

      console.log('Email sent successfully!', response.text);

      // Réponse réussie
      res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'An error occurred while sending the email.' });
    }
  });
};

export default contactHandler;