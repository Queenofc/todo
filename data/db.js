import data from './db.json';

export default function handler(req, res) {
  // Respond with the 'blogs' array from db.json
  res.status(200).json(data.blogs);
}
