// importing env values
import { port, db } from '../../config/env.js';


/**
 * exporting welcome get
 */
export const welcome_get = async (req, res) => {
  try {
    const hostname = `https://${req.hostname}:${port}/`;

    res.status(200).json({
      msg: `Welcome to the ${db.name} !!`,
      status: 200,
      success: true,
      result: hostname
    })
  } catch (error) {
    throw error;
  }
}

