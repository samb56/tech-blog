
// const withAuth = (req, res, next) => {
//   if (!req.session.logged_in) {
//     res.redirect('/login')
//   } else {
//     next()
//   }
// }


const withAuth = (req, res, next) => {
  if (!req.session.userId) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = withAuth;
