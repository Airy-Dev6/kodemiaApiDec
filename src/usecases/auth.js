
const bcrypt = require('bcrypt')

const Users = require('../models/users')


async function signup (email, password) {
  const passwordEncripted = await bcrypt.hash(password, 10)
  return Users.create( { email, password : passwordEncripted } )
}

async function login (email,password) {

  

  // 1. Verificar que el usuario exista en la base de datos 
  // 2. Si existe, verificar que la contraseña proporcionada sea la misma que la registrada

  const userFound = await Users.findOne({email})

  if (!userFound) return false

  const ispasswordValid = await bcrypt.compare(password,  userFound.password)


  if (!ispasswordValid) return false

  return true
}

module.exports = {
  signup,
  login

}
