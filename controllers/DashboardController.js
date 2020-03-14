let passport = require('passport');
let LocalStrategy = require('passport-local').Strategy;
let UserModel = require('../models/User');
let router = require('express').Router();

//login to app with privileges
exports.index = (req, res) => {
  let user = req.user;
//console.log(user);
//comporbacion de privilegios
if ( user.role == 'admin' ) {
  res.render('dashboard/indexAdm', {user: user});
}else{ 

  res.render('dashboard/index', {user: user});
  }
}



//************************** 
//LEER TODO
//leer todos los json
exports.readAll = (req, res) => {
  let user = req.user;
  if ( user.role == 'admin' ) {
  
  UserModel.all()
    .then((data) => {
      let users = data;
    //  console.log(users);
      res.render('dashboard/users', { users: users });
    });
    /*
//lectura de bd en json
  queries.database.getAll().then(database => {
    res.json(database); //responder con jsons

  });
*/
}else{ 
//Unathourized access even logged
  res.status(401).json({ msg: 'ERROR 403' });
  }

}

//recibe datos de ruta con app.js y aqui actua, esta funcion se usa en app.js
exports.delete = (req, res) => {
//url
  let id = req.params.id;
  //input
  //request.body.id
console.log(id);
//usa el metodo de User.js que es el modelo, se le manda una variable y lo corre como funcion
UserModel.delete(id)
.then((data) => {
 
res.redirect('back');
});




}


//*************************************