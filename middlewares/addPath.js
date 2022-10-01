const addPath = (req, res, next) => {
  res.locals.path = req.path;
  console.log(req.path);
  next();
}

module.exports = {
  addPath,
};

