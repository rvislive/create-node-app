// importing mongoose
import { mongoose } from '../utils/dev.js';

// default value for db connection
import { db } from './env.js';

// database connection string 
const URL = `mongodb://${db.user}:${db.password}@${db.host}:${db.port}/${db.name}?authSource=${db.auth}`;

/**
 * @param { String } URL - mongoose database coneection string.
 */
const getConnection = async (req, res) => {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    console.log(`Database Connected: ${db.name}`);
  } catch (error) {
    throw error;
  }
}

getConnection();
