import prisma from '../../lib/prisma'
const jwtSecret = process.env.JWTSECRET;
const assert = require('assert');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

async function findUser(name, callback) {
  const user = await prisma.user.findUnique({
    where: {
      name: name
    },

  });
  console.log("user:", user)
  callback(user);
}

async function createUser(name, password, callback) {
  console.log("createUser")
  bcrypt.hash(password, saltRounds, async function(err, hash) {
   const user = await prisma.user.create({
    data: {
      name: name,
      password: hash
    }
  })
    console.log("hash")
    callback(user)
  });
}

export default async (req, res) => {
  if (req.method === 'POST') {
    // signup
    try {
      assert.notEqual("", req.body.name, 'Name required');
      assert.notEqual("", req.body.password, 'Password required');
    } catch (bodyError) {
      console.log("empty things")
      return res.status(403).json({error: true, message: bodyError.message});
    }

    //verify email does not exist already
    const name = req.body.name;
    const password = req.body.password;

     findUser(name, function(user) {
      if (user == null ) {
       // user not found, create user
        createUser(name, password, function(user) {
          const token = jwt.sign(
            {userId: user.id, name: user.name},
            jwtSecret,
            {
              expiresIn: 3000, //50 minutes
            },
          );
          res.status(200).json({token});
          return;
        }
        );
        
      
      };
   });
  }
};