const assert = require('assert');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const jwtSecret = process.env.JWTSECRET;
import prisma from '../../lib/prisma'

const saltRounds = 10;


export function getUserId(req){
  const cookie = req.headers.cookie;
  const token = cookie.substring(cookie.search("token=")+6)
  if (typeof token !== 'undefined') {
    var userId;
    try {
       userId = jwt.verify(token, jwtSecret)
    } catch (err){
      return {message: err.message}
    }    
    return userId
    
  } else {
    return null;
  }

}
export function validateUser(req){
  var user_info = getUserId(req);

  if (typeof user_info.userId === 'number'){
    return true
  } else {
    return false
  }
}

async function findUser(name, callback) {
  const user = await prisma.user.findUnique({
    where: {
      name: name
    }

  })
  
  callback(user);
}

async function authUser(name, password, hash, callback) {
  bcrypt.compare(password, hash, callback);
}

export default (req, res) => {
  if (req.method === 'POST') {
    //login
    try {
      assert.notEqual(null, req.body.name, 'name required');
      assert.notEqual(null, req.body.password, 'Password required');
    } catch (bodyError) {
      res.status(403).send(bodyError.message);
    }

    const name = req.body.name;
    const password = req.body.password;

    findUser(name, function(user) {
      if (user === null) {
        res.status(404).json({error: true, message: 'User not found'});
        return;
      } else {
        authUser(name, password, user.password, function(err, match) {
          if (err) {
            res.status(500).json({error: true, message: 'Auth Failed'});
          }
          if (match) {
            const token = jwt.sign(
              {userId: user.id, name: user.name},
              jwtSecret,
              {
                expiresIn: 18000, //50 minutes
              },
            );
            res.status(200).json({token});
            return;
          } else {
            res.status(401).json({error: true, message: 'Auth Failed'});
            return;
          }
        });
      }
    });
  } else {
    // Handle any other HTTP method
    res.statusCode = 401;
    res.end();
  }
};