const bcrypt = require('bcrypt');

exports.inscription = (req, res) => {
    res.render('inscription', { title: 'Inscription', layout: "inscription" });
}

exports.inscripUser = async (req,res) => {
    var value = req.body.password;
    const salt = await bcrypt.genSalt(10);
    value = await bcrypt.hash(value, salt);

    var data = {
        "nom": req.body.nom,
        "prenom": req.body.prenom,
        "email": req.body.email,
        'password': value
    }

    
    const insertion = "INSERT INTO users SET ?";
    console.log(req.body);
    
    await db.query(insertion, data, (err, rows, fields) => {
        if (err) {
            console.log(err.message);
            res.send(err);
        }
        else {
            console.log('Insertion effectuée avec succès');
            res.redirect('/connexion');
        }
    });
}