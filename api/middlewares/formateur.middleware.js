module.exports = {
    isFormateur: async (req, res, next) => {
      if(!req.session.user) return res.redirect('/connexion')
      const [user] = await db.query(`SELECT is_formateur FROM users WHERE email="${req.session.user.email}"`);
      console.log(user);
      ( user.isFormateur === req.session.user.isFormateur && user.isFormateur === 0 ) ? res.redirect('/connexion') : next();
    }
}