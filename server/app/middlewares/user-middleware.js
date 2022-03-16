import jwt from 'jsonwebtoken';

export const verifyToken = (res, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.split(' ')[0] == 'Bearer'
  ) {
    const token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(403).send('Token is required');
  }

  try {
    req.user = jwt.verify(token, config.TOKEN_KEY);
  } catch (err) {
    return res.status(401).send('Invalid Token');
  }
  return next();
};
