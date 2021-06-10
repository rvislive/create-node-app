// imported depedencies 
import { express, https, http, logger, path } from './src/utils/dev.js';

// dotenv configuration
import { port, env, baseUrl  } from './src/config/env.js';

// database configuration
import './src/config/dbconnect.js';

// creating express app
const app = express();

// just some required step-up
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static('/public'));

/** All Routes starts here */
import welcome from './src/routes/welcome.js';
app.use('/', welcome);


/** Creating Server configuration for local and production */ 
if(env === 'PRODUCTION') {
  var credentials = {
      key: fs.readFileSync('/etc/letsencrypt/live/nodeserver.mydevfactory.com/privkey.pem', 'utf8'),
      cert: fs.readFileSync('/etc/letsencrypt/live/nodeserver.mydevfactory.com/fullchain.pem', 'utf8')
  };
  var server = https.createServer(credentials, app);
  server.listen(port, () => {
    console.log(`Server started at ${baseUrl}:${port}`);
  });
} else {
  const server = http.createServer(app);
  server.listen(port, () => { 
    console.log(`Server Started at http://localhost:${port}`) 
  });
}



