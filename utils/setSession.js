const { inscripUser } = require("../api/controllers/inscriptionControllers");

exports.setSession = async function (req, res, email) {
    let userget = await db.query(`SELECT * FROM users WHERE email="${email}"`)
    let user = userget[0];
    
    
    req.session.user = {
      id: user.id,
      email: user.email,
      prenom: user.prenom,
      nom: user.nom,
      // isAdmin: user.is_admin,
      // isFormateur: user.is_formateur
    };
  
    res.redirect('/profil')
  }
  