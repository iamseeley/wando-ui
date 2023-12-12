// pages/api/componentCode/[component].ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { promises as fs } from 'fs';
import path from 'path';

export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  const { component } = req.query;

  try {
    // Adjust the path to where your components are stored
    const filePath = path.join(process.cwd(), '../componets/ui/', `${component}.tsx`);
    const fileContents = await fs.readFile(filePath, 'utf8');

    res.status(200).json({ code: fileContents });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error reading component file' });
  }
}
