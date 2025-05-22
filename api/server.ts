import express from 'express';
import { VercelRequest, VercelResponse } from '@vercel/node';
import { saveApplication } from '../src/lib/firebase';
import type { InsertApplication } from '../shared/schema';

const app = express();
app.use(express.json());

// Handle application submission
app.post('/api/applications', async (req, res) => {
  try {
    const data = req.body as InsertApplication;
    const result = await saveApplication(data);
    
    if (result.success) {
      res.status(200).json({ success: true, id: result.id });
    } else {
      res.status(500).json({ success: false, error: 'Failed to save application' });
    }
  } catch (error) {
    console.error('Error processing application:', error);
    res.status(500).json({ success: false, error: 'Internal server error' });
  }
});

// Export the Express app as a serverless function
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Handle the request using Express
  return app(req, res);
} 