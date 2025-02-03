import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  try {
    // Adjust path to correctly access db.json inside the "data" folder
    const filePath = path.join(process.cwd(), 'data/db.json'); 
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const objectData = JSON.parse(jsonData);

    res.status(200).json(objectData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to load data' });
  }
}
