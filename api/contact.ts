import type { VercelRequest, VercelResponse } from '@vercel/node';
import { prisma } from '../lib/prisma';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, email, phone, message } = req.body ?? {};

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    await prisma.contactMessage.create({
      data: {
        name,
        email,
        phone,
        message,
      },
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
