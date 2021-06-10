import { dotenv } from '../utils/dev.js';
dotenv.config();

// exporting project informations
export const port = process.env.PORT;
export const env = process.env.NODE_ENV;
export const masterKey = process.env.MASTER_KEY;
export const baseUrl = process.env.API_URL;

// exporting database informations
export const db = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  name: process.env.DB_NAME,
  auth: process.env.DB_AUTH,
  access: process.env.DB_ACCESS
}

// exporting email informations
export const email = {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  username: process.env.MAIL_USERNAME,
  password: process.env.MAIL_PASSWORD
}
