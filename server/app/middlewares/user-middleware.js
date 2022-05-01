import jwt from 'jsonwebtoken';
import config from '../../config.js';

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(403).send('Token is required');
  }
  try {
    const user = jwt.verify(token, config.access_token);
  } catch (err) {
    return res.status(401).send('Invalid Token');
  }

  return next();
};
