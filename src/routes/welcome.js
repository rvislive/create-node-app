// importing router from express
import { router } from '../utils/dev.js';

// importing all controller
import { welcome_get } from '../controllers/common/welcome.js';


// all routes are here 
router.get(
  '/',
  welcome_get
);


export default router;
