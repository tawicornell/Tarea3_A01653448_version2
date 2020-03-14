const knex = require('../database/connection');
const bcrypt = require('bcrypt')

/**
 * Encuentra al usuario que tenga el correo indicado
 */
exports.find = (id) => {
  return knex
    .select('*')
    .from('users')
    .where('id', id)
    .first();
}

/**
 * Encuentra al usuario que tenga el correo indicado
 */
exports.findByEmail = (email) => {
  return knex
    .select('*')
    .from('users')
    .where('email', email)
    .first();
}

/**
 * Crea al usuario con los datos definidos dentro del objeto user
 */
exports.create = (user) => {
  // Obtiene la contraseña definida por el usuario
  let pass = user.password;
  // Encripta la contraseña
  pass = bcrypt.hashSync(pass, 10);
  return knex('users')
    .insert({ name: user.name, email: user.email, role: user.role, password: pass });
}

// Crea un nuevo Producto (pero no lo almacena en la base)
exports.factory = (name, email, role) => {
  return {
    name: name,
    email: email,
    role: role
  }
}

// Obtiene todos los productos en la base
exports.all = () => {
  return knex
    .from('users')
    .select('*');
}

exports.delete = (id) => {
 
  return knex.from('users').where('id',id).del();
}