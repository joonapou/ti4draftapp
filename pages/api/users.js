import prisma from '../../lib/prisma'
const jwtSecret = process.env.JWTSECRET;
const assert = require('assert');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const saltRounds = 10;

import {getUserId} from './auth.js';



export async function getGameGroupUsersForLoggedUser(req, res) {
  var user;
  user = getUserId(req)
  var group_users = {};
  const current_user = await prisma.user.findUnique({
    where: {
      id: user.userId
    }
  });
  if (current_user.groupId !== null){
   group_users = await prisma.user.findMany({
    where: {
      groupId: current_user.groupId
    },
    select : {
      name: true,
      groupId: true,
      pickOrder: true,
      factionId: true,
      seatNumber: true,
    }
  });
};
 return group_users
}






async function findUser(name, callback) {
  const user = await prisma.user.findUnique({
    where: {
      name: name
    },

  });
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