import 'dotenv/config';
export default {
  port: process.env.PORT || 3000,
  db: process.env.DB,
  access_token: process.env.ACCESS_TOKEN,
};
