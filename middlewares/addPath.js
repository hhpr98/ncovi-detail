const addPath = (req, res, next) => {
  res.locals.path = req.path;
  next();
}

module.exports = {
  addPath,
};

