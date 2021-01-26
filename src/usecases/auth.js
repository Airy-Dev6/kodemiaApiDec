

const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const Users = require('../models/users')


async function signup (email, password) {
  const passwordEncripted = await bcrypt.hash(password, 10)
  return Users.create( { email, password : passwordEncripted } )
}

async function login (email,password) {

  

  // 1. Verificar que el usuario exista en la base de datos 
  // 2. Si existe, verificar que la contraseña proporcionada sea la misma que la registrada

  const userFound = await Users.findOne({email})

  if (!userFound) throw new Error('Invalid data')

  const ispasswordValid = await bcrypt.compare(password,  userFound.password)


  if (!ispasswordValid) throw new Error('Invalid data')

  const token = jwt.sign({ id: userFound._id }, 'kodemia123')

  return token
}

module.exports = {
  signup,
  login

}
